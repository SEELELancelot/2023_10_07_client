import {useEffect, useState} from "react";
import {useParams} from "@/.umi/exports";
import {axiosGetLenderRecordDetail} from "@/networkReuest/Myaxios";
import {Table} from "antd";

const LenderDetailData=()=>{
  const params = useParams();
  const [LenderData,setLenderData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async ()=>{
    const customer_id = params.id;
    const result=await axiosGetLenderRecordDetail({customer_id});
    const {success,message}=result.data;
    console.log(success,message);
    if(success===1){
      setLenderData(message);
      setIsLoading(false);
    }
  }

  const columns = [
    {
      title: '戶名',
      dataIndex: 'customer_name',
      render: (item) => {
        return item;
      }
    },
    {
      title: '放款帳號',
      dataIndex: 'Lender_Account',
      render: (item) => {
        return item;
      }
    },
    {
      title: '科目',
      dataIndex: 'Lender_subject',
      render: (item) => {
        return item;
      }
    },
    {
      title: '貸放起日',
      dataIndex: 'lenderStart',
      render: (item) => {
        return item;
      }
    },
    {
      title: '貸放訖日',
      dataIndex: 'lenderEnd',
      render: (item) => {
        return item;
      }
    },
    {
      title: '貸放餘額',
      dataIndex: 'lenderBalance',
      render: (item) => {
        return item;
      }
    },
    {
      title: '上次繳息日',
      dataIndex: 'last_interest',
      render: (item) => {
        return item;
      }
    },
    {
      title: '利率',
      dataIndex: 'interest',
      render: (item) => {
        return item;
      }
    },
    {
      title: '核准金額',
      dataIndex: 'approve_money',
      render: (item) => {
        return item;
      }
    },
    {
      title: '擔保品種類',
      dataIndex: 'collateralType',
      render: (item) => {
        return item;
      }
    },

  ]

  return(
    <div>
      {
        isLoading?<></>:
          <Table columns={columns} dataSource={LenderData}
                 onRow={(record, rowIndex) => {
                   return {
                     // onDoubleClick: (event) => {
                     //     console.log(record.customer_id);
                     //      props.updateStoreColor(record.customer_id);
                     //     navigate(record.customer_id);
                     // }, // click row
                   };
                 }}
                 rowKey={record => record.lenderRecord_id}
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
export default LenderDetailData;
