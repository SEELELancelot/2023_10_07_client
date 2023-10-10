import React, {useEffect, useRef, useState} from "react";
import {Form, Select, Table} from "antd";
import {axiosGetWillSendbyProxy} from "@/networkReuest/Myaxios";

const ProxySend=()=>{
  const [GiftArray, setGiftArray] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [checkData, setCheckData] = useState([]);
  const inputRef = useRef();

  useEffect(()=>{
    //     得到資料
    fetchData();
  },[]);
  const fetchData=async ()=>{
    const result=await axiosGetWillSendbyProxy();
    const{success,message}=result.data;
    // console.log(success,message);
    if(success===1){
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
      title: '轉送人',
      dataIndex: '',
      key: '',
      render: (item) => {
        // console.log(item.birthday_gift_state_id);
        return (
          <div>


          </div>
        )
      },
    },

  ]
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log(pagination)
  };

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

  return(
    <div>
      {
        isLoading?<></>:
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



            <div style={{display: "none"}}>
              <div ref={inputRef} id={"dyncAdd"} style={{width:'210mm',height:'297mm'}}>


              </div>

            </div>

          </div>



      }

    </div>
  )
}
export default ProxySend;


