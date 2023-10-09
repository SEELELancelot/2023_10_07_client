import {useEffect, useState} from "react";
import {useParams} from "@/.umi/exports";
import {getInterViewDetailData} from "@/networkReuest/Myaxios";
import {Table} from "antd";
import dayjs from "dayjs";

const InterViewDetailRecord=()=>{
  const params = useParams();
  const [InterViewData,setInterViewData]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async ()=>{
    const customer_id = params.id;
    const result=await getInterViewDetailData({customer_id});
    const {success,message}=result.data;
    console.log(success,message);
    if(success===1){
      setInterViewData(message);
    }
  }
  const columns = [
    {
      title: '受訪者',
      dataIndex: 'customer_name',
      render: (item) => {
        return item;
      }
    },
    {
      title: '訪談方式',
      dataIndex: 'Interview_method',
      render: (item) => {
        return item;
      }
    },
    {
      title: '訪談目的',
      dataIndex: 'Interview_subject',
      render: (item) => {
        return item;
      }
    },
    {
      title: '訪談時間',
      dataIndex: 'Interview_time',
      render: (item) => {
        return dayjs(item).format("YYYY-MM-DD HH:mm:ss");
      }
    },
    {
      title: '訪談地點',
      dataIndex: 'interview_location',
      render: (item) => {
        return item;
      }
    },
    {
      title: '訪談人',
      dataIndex: 'employee_true_id',
      render: (item) => {
        return item;
      }
    },


  ]
  return(
    <div>

      <Table columns={columns} dataSource={InterViewData}
             onRow={(record, rowIndex) => {
               return {
                 // onDoubleClick: (event) => {
                 //     console.log(record.customer_id);
                 //      props.updateStoreColor(record.customer_id);
                 //     navigate(record.customer_id);
                 // }, // click row
               };
             }}
             rowKey={record => record.Interview_id}
             pagination={{
               pageSizeOptions: ["10", "20", "30", "40"],
               showSizeChanger: true,
               defaultPageSize: 10,
               defaultCurrent: 1
             }}

             rowClassName={(record, index) => {

             }}
      />

    </div>
  )
}
export default InterViewDetailRecord;
