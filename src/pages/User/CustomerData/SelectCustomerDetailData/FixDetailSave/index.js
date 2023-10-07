import {useEffect, useState} from "react";
import {useParams} from "@/.umi/exports";
import {axiosGetFixDetail} from "@/networkReuest/Myaxios";
import {Table} from "antd";

const FixDetailSave=()=>{
  const params = useParams();
  const [fixData,setFixData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    fetchFixData();
  },[]);

  const fetchFixData=async () => {
    const customer_id = params.id;
    console.log(customer_id);
    const result = await axiosGetFixDetail({customer_id});
    const {success, message} = result.data;
    console.log(success, message);
    if(success===1){
      setFixData(message);
      setIsLoading(false);
    }
  }

  const columns = [
    {
      title: '戶名',
      dataIndex: 'fixName',
      render: (item) => {
        return item;
      }
    },
    {
      title: '定期帳號',
      dataIndex: 'fixAccount',
      render: (item) => {
        return item;
      }
    },
    {
      title: '定期帳號餘額',
      dataIndex: 'fixBalance',
      render: (item) => {
        return Math.round(item);
      }
    },

  ]

  return(
    <div>
      {
        isLoading?<></>:
          <Table columns={columns} dataSource={fixData}
                 onRow={(record, rowIndex) => {
                   return {
                     // onDoubleClick: (event) => {
                     //     console.log(record.customer_id);
                     //      props.updateStoreColor(record.customer_id);
                     //     navigate(record.customer_id);
                     // }, // click row
                   };
                 }}
                 rowKey={record => record.fixAccount}
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
export default FixDetailSave;
