import React, {useEffect, useState} from "react";
import {getSendProgressMail} from "@/networkReuest/Myaxios";
import {Table} from "antd";

const SendMailProgress=()=>{
  const [isLoading,setIsLoading]=useState(true);
  const [mailData,setMailData]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async ()=>{
    const result=await getSendProgressMail();
    const{success,message}=result.data;
    console.log(success,message);
    if(success===1){
      setMailData(message);
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
      // setcheckData(selectedRows);
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
          <Table columns={columns} dataSource={mailData}
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

    </div>
  )
}
export default SendMailProgress;
