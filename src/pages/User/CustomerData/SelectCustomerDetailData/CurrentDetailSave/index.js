import {useEffect, useState} from "react";
import {useParams} from "@/.umi/exports";
import {axiosGetCurrentDetail} from "@/networkReuest/Myaxios";
import {Table} from "antd";

const CurrentDetailSave=()=>{
  const [isLoading,setIsLoading]=useState(true);
  const params = useParams();
  const [currentData,setCurrentData]=useState([]);
  useEffect(()=>{
      console.log(params);
      fetchData();
  },[])
  const fetchData=async ()=>{
    const customer_id=params.id;
    const result=await axiosGetCurrentDetail({customer_id});
    const {success,message}=result.data;
    console.log(success,message);
    if(success===1){
      setCurrentData(message);
      setIsLoading(false);
    }
  }

  const columns = [
    {
      title: '戶名',
      dataIndex: 'currentName',
      render: (item) => {
        return item;
      }
    },
    {
      title: '活期帳號',
      dataIndex: 'currentAccount',
      render: (item) => {
        return item;
      }
    },
    {
      title: '活期帳號餘額',
      dataIndex: 'currentBalance',
      render: (item) => {
        return Math.round(item);
      }
    },

  ]
  return(
    <div>

      {
        isLoading?<div></div>:
          <Table columns={columns} dataSource={currentData}
                 onRow={(record, rowIndex) => {
                   return {
                     // onDoubleClick: (event) => {
                     //     console.log(record.customer_id);
                     //      props.updateStoreColor(record.customer_id);
                     //     navigate(record.customer_id);
                     // }, // click row
                   };
                 }}
                 rowKey={record => record.currentAccount}
                 pagination={{
                   pageSizeOptions: ["10", "20", "30", "40"],
                   showSizeChanger: true,
                   defaultPageSize: 10,
                   defaultCurrent: 1
                 }}

                 rowClassName={(record, index) => {

                 }}
          />
      }

    </div>
  )
}
export default CurrentDetailSave;
