import {useEffect, useState} from "react";
import {axiosGetCheckDetail} from "@/networkReuest/Myaxios";
import {useParams} from "@/.umi/exports";
import {Table} from "antd";

const CheckDetailSave = () => {
  const params = useParams();
  const [checkdata,setCheckData]=useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const customer_id=params.id;
    const result=await axiosGetCheckDetail({customer_id});
    const {success,message}=result.data;
    console.log(success,message);
    if(success===1){
      setCheckData(message);
    }
  }

  const columns = [
    {
      title: '戶名',
      dataIndex: 'checkName',
      render: (item) => {
        return item;
      }
    },
    {
      title: '支存帳號',
      dataIndex: 'checkAccount',
      render: (item) => {
        return item;
      }
    },
    {
      title: '支存餘額',
      dataIndex: 'checkBalance',
      render: (item) => {
        return Math.round(item);
      }
    },

  ]

  return (
    <div>
      <Table columns={columns} dataSource={checkdata}
             onRow={(record, rowIndex) => {
               return {
                 // onDoubleClick: (event) => {
                 //     console.log(record.customer_id);
                 //      props.updateStoreColor(record.customer_id);
                 //     navigate(record.customer_id);
                 // }, // click row
               };
             }}
             rowKey={record => record.checkAccount}
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
export default CheckDetailSave;
