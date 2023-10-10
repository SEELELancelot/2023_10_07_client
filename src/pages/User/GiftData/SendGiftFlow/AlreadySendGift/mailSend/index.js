import {Button, FloatButton, Modal, Table} from "antd";
import React, {useEffect, useRef, useState} from "react";
import ReactToPrint from "react-to-print";
import MailSaveModal from "./MailSaveModal/MailSaveModal";
import {axiosGetSendMailData} from "@/networkReuest/Myaxios";

const MailSend = () => {
  const [GiftArray, setGiftArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [checkData, setcheckData] = useState([]);
  const [mailSaveModal,setmailSaveModal]=useState(false);
  const inputRef = useRef();

  useEffect(() => {
    fetchData();
  }, [])
  const fetchData = async () => {
    const result = await axiosGetSendMailData();
    // console.log(result);
    const {success, message} = result.data;
    // console.log(success,message);
    if (success === 1) {
      // console.log(message);
      setGiftArray(message);
      setIsLoading(false);
    }
  }
  const columns = [

    {
      title: '身分證',
      dataIndex: 'customer_id',
      key: 'customer_id',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: '姓名',
      dataIndex: 'customer_name',
      key: 'customer_name',
      render: (item) => {
        return (
          <div>{item}</div>
        )
      },
    },
    {
      title: '通訊地址',
      dataIndex: 'customer_address',
      key: 'customer_address',
      render: (item) => {
        return (
          <div>{item}</div>
        )
      },
    },
    {
      title: '禮物',
      dataIndex: 'default_birthday_name',
      key: 'default_birthday_name',
      render: (item) => {
        return (
          <div>{item}</div>
        )
      },
    },

  ]



  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('selectedRows: ', selectedRows);

      let num = selectedRows.length;

      let div_letter = [];
      let letter_child = [];


      for (let i = 0; i < num; i++) {
        let str = "";
        let address=selectedRows[i].customer_address;

        let div = document.createElement("div");
        div.setAttribute("style", "width:50%; ");
        str += `<p>${address}</p>`;
        str += `<p style="padding-left: 20px">${selectedRows[i].customer_name} 君收</p>`;
        str += "<div style='text-align: center'>"
        str += "<p>祝生日快樂</p>";
        str += "</div>"
        div.innerHTML=str;
        letter_child[i]=div;

        if(i%2===0){
          let div_letter_dom=document.createElement("div")
          div_letter_dom.classList.add("letter");
          let letter_index=parseInt(i/2);
          div_letter[letter_index]=div_letter_dom;
        }

      }

      // console.log(div_letter);
      for (let i = 0; i <num ; i++) {
        let letter_index=parseInt(i/2);
        div_letter[letter_index].appendChild(letter_child[i]);
      }

      let dyncAdd = document.getElementById('dyncAdd');

      dyncAdd.innerHTML=""; //清空
      for (let i = 0; i <div_letter.length ; i++) {
        // console.log(div_letter[i]);
        dyncAdd.appendChild(div_letter[i]);
      }
      // console.log(str1);

      // console.log(div_letter);


      setcheckData(selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
    },
    getCheckboxProps: (record) => {

    }
  }
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log(pagination)
  };


  return (
    <div>

      {
        isLoading ? <></> :
          <Table columns={columns} dataSource={GiftArray} onChange={onChange}
                 onRow={(record, rowIndex) => {
                   return {
                     // onDoubleClick: (event) => {
                     //     console.log(record.customer_id);
                     //      props.updateStoreColor(record.customer_id);
                     //     navigate(record.customer_id);
                     // }, // click row
                   };
                 }}
                 rowKey={(record, )=>{
                   return record.birthday_gift_state_id;
                 }}
                 pagination={{
                   pageSizeOptions: ["10", "20", "30", "40"],
                   showSizeChanger: true,
                 }}
                 rowSelection={{
                   ...rowSelection
                 }}


                 rowClassName={(record, index) => {

                 }}
          />
      }

      <Modal title={`郵寄${checkData.length}筆`}
             centered
             open={mailSaveModal}
             footer={null}
             onOk={() => setmailSaveModal(false)}
             onCancel={() => setmailSaveModal(false)}
             width={900}
      >
        <MailSaveModal checkData={checkData} setmailSaveModal={setmailSaveModal} fetchData={fetchData} setcheckData={setcheckData}  />

      </Modal>

      <FloatButton
        tooltip={<div>送郵寄</div>}
        shape="circle"
        badge={{
          count: checkData.length,
          color: 'blue',
        }}
        onClick={()=>{
          if(checkData.length>=1) {
            setmailSaveModal(true);
          }
        }}
      >

      </FloatButton>

      <ReactToPrint content={() => inputRef.current}
                    copyStyles={true}
                    trigger={() => {
                      return (
                        <div style={{textAlign: 'center'}}>
                          {isLoading?<></>:<Button type={"primary"}>列印</Button>}
                        </div>
                      )
                    }}
                    onAfterPrint={() => console.log("列印成功")}
      />

      <div style={{display: "none"}}>
        <div ref={inputRef}>

          <div className={"page"} id={"dyncAdd"}>



          </div>

        </div>

      </div>

    </div>
  )
}

export default MailSend;

