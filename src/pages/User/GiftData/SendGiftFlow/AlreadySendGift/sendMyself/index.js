import {Button, FloatButton, Modal, Table} from "antd";
import React, {useEffect, useRef, useState} from "react";
import SendMyselfModal from "./SendMyselfModal/SendMyselfModal";
import {axiosGetWillSendbyMyself, axiosSendEmailMyself} from "@/networkReuest/Myaxios";


const SendMyself = () => {

  const [GiftArray, setGiftArray] = useState([]);
  const [checkData, setCheckData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [myselfModal,setmyselfModal]=useState(false);
  const inputRef = useRef();


  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axiosGetWillSendbyMyself();
    // console.log(result);
    const {success, message} = result.data;
    if (success === 1) {
      console.log(message);
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
    // {
    //     title: '電話',
    //     dataIndex: 'customer_tel',
    //     key: 'customer_tel',
    //     render: (item) => {
    //         return (
    //             <div>{item}</div>
    //         )
    //     },
    // },
    // {
    //     title: '手機',
    //     dataIndex: 'customer_cel',
    //     key: 'customer_cel',
    //     render: (item) => {
    //         return (
    //             <div>{item}</div>
    //         )
    //     },
    // },
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
      const dyncAdd = document.getElementById("dyncAdd");
      dyncAdd.innerHTML = "";
      //  清除 dyncAdd
      for (let i = 0; i < num; i++) {
        let pageDiv = document.createElement("div");


        pageDiv.setAttribute("style", "width: 100%;height: 100%;padding:0;margin:0");

        // pageDiv.classList.add("page");

        let birthdayLetterDiv = document.createElement("div")
        birthdayLetterDiv.setAttribute("style", "position:relative;width:18cm;height:12.4cm;border:solid 1px orange ");

        let birthdayTitleDiv = document.createElement("div");
        birthdayTitleDiv.setAttribute("style", "font-size:24px;text-align:center;margin-top:50px;");


        // birthdayTitleDiv.classList.add("birthdayTitle");
        birthdayTitleDiv.innerText = "彰化區漁會祝你生日快樂！";

        let birthdayTextDiv = document.createElement("div")
        birthdayTextDiv.setAttribute("style", "position:absolute;width:100%;bottom:30px;text-align:center");

        // birthdayTextDiv.classList.add("birthdayText");

        birthdayTextDiv.innerHTML = " <p>願所有的快樂，所有的幸福，所有的溫馨，所有的好運圍繞在您身邊</p><p>在生日這天，將精緻的禮物送給你，願你的生活，永遠充滿喜悅，祝生日快樂!</p>"

        birthdayLetterDiv.appendChild(birthdayTitleDiv);
        birthdayLetterDiv.appendChild(birthdayTextDiv);

        pageDiv.appendChild(birthdayLetterDiv);
        // console.log(pageDiv);

        dyncAdd.appendChild(pageDiv);
      }
      // <div className={"page"}>
      //     <div className={"birthdayLetter"}>
      //         <div className={"birthdayTitle"}>彰化區漁會祝你生日快樂！
      //         </div>
      //
      //         <div className={"birthdayText"}>
      //             <p>願所有的快樂，所有的幸福，所有的溫馨，所有的好運圍繞在您身邊</p>
      //             <p>在生日這天，將精緻的禮物送給你，願你的生活，永遠充滿喜悅，祝生日快樂!</p>
      //         </div>
      //
      //     </div>
      // </div>
      setCheckData(selectedRows);

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
          <div>
            <Table columns={columns} dataSource={GiftArray} onChange={onChange}
                   onRow={(record, rowIndex) => {
                     return {
                       // onDoubleClick: (event) => {
                       // }, // click row
                     };
                   }}
                   rowKey={(record,) => {
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


            {/*<ReactToPrint content={() => inputRef.current}*/}
            {/*              copyStyles={true}*/}
            {/*              trigger={() => {*/}
            {/*                  return (*/}
            {/*                      <div style={{textAlign: 'center'}}>*/}
            {/*                          <Button type={"primary"}>列印</Button>*/}
            {/*                      </div>*/}
            {/*                  )*/}
            {/*              }}*/}
            {/*              onAfterPrint={() => console.log("列印成功")}*/}
            {/*/>*/}

            <Modal title={`已備妥生日賀卡${checkData.length}筆`}
                   centered
                   open={myselfModal}
                   footer={null}
                   onOk={() => setmyselfModal(false)}
                   onCancel={() => setmyselfModal(false)}
                   width={900}
            >
              <SendMyselfModal checkData={checkData} setCheckData={setCheckData} fetchData={fetchData} setmyselfModal={setmyselfModal}/>

            </Modal>



            <FloatButton
              tooltip={"已備妥生日賀卡"}
              badge={{
                count: checkData.length,
                color: 'blue',
              }}
              onClick={()=>{
                if(checkData.length>=1) {
                  setmyselfModal(true);
                }
              }}
            />



            <div style={{textAlign:'center'}}>
              {
                GiftArray.length>=1?
                  <Button type={"primary"} onClick={async () => {
                    const html = document.getElementById("dyncAdd").innerHTML;
                    console.log(html);
                    console.log(checkData);
                    if(checkData.length===0){
                      return null;
                    }
                    let str = "";
                    for (let i = 0; i < checkData.length; i++) {
                      str+="<div style='margin-bottom: 10px'>"
                      str+=`${i+1}.`
                      str += `<span>姓名:${checkData[i].customer_name}</span> &nbsp;`;
                      str += `<span>電話:${checkData[i].customer_tel}</span> &nbsp;`;
                      str += `<span>手機:${checkData[i].customer_cel}</span> &nbsp;`;
                      str += `<span>住址:${checkData[i].customer_address}</span> &nbsp;`;

                      str+="</div> "
                    }
                    // console.log(str);

                    const finalSendHtml = {"sendText":str,"sendhtml": html};

                    const result = await axiosSendEmailMyself(finalSendHtml);
                    const {success, message} = result.data;
                    if (success === 1) {
                      console.log(message);
                    }

                  }}>傳遞客戶資料至email</Button>:
                  <></>
              }

            </div>


            <div style={{display: "none"}}>
              <div ref={inputRef} id={"dyncAdd"} style={{width:'210mm',height:'297mm'}}>


              </div>

            </div>

          </div>

      }
    </div>
  )
}
export default SendMyself;
