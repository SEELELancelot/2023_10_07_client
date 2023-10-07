import {Table, Form, Radio, Button} from "antd";
import React, {useEffect, useState} from "react";
import {axiosGetUnhandleData, axiosupdateMultiState} from "@/networkReuest/Myaxios";



const UnHandleGift = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [GiftArray, setGiftArray] = useState([]);
  const [checkData, setcheckData] = useState([]);
  const [form] = Form.useForm();

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
      title: '電話',
      dataIndex: 'customer_tel',
      key: 'customer_tel',
      render: (item) => {
        return (
          <div>{item}</div>
        )
      },
    },
    {
      title: '手機',
      dataIndex: 'customer_cel',
      key: 'customer_cel',
      render: (item) => {
        return (
          <div>{item}</div>
        )
      },
    },
    {
      title: '生日',
      dataIndex: 'customer_birthday',
      key: 'customer_birthday',
      render: (item) => {
        return new Date(item).toLocaleDateString();
      },
      sorter: (a, b) => {
        // console.log(new Date(a.customer_birthday).toLocaleDateString());
        // console.log("test"+new Date().getFullYear());;
        let a_date = new Date(a.customer_birthday).toLocaleDateString();
        let b_date = new Date(b.customer_birthday).toLocaleDateString();
        // console.log(a_date.indexOf("/")+1);
        let oneDate = a_date.substring(a_date.indexOf("/") + 1);
        let twoDate = b_date.substring(b_date.indexOf("/") + 1);

        return new Date(oneDate).getTime() - new Date(twoDate).getTime()
      }
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
    {
      title: '送禮方式',
      dataIndex: '',
      key: '',
      render: (item) => {
        // console.log(item.birthday_gift_state_id);
        return (
          <div>
            <Form.Item name={`${item.birthday_gift_state_id}-sendMethod`} initialValue={"1"}>
              <Radio.Group>
                <Radio value="1">郵寄</Radio>
                <Radio value="2"> 親送 </Radio>
                <Radio value="3"> 代為轉送 </Radio>
                <Radio value="4"> 不送 </Radio>
              </Radio.Group>
            </Form.Item>

          </div>
        )
      },
    },


  ];

  useEffect(() => {
    fetchUnHandleGift();
  }, []);

  const fetchUnHandleGift = async () => {
    const result = await axiosGetUnhandleData();
    console.log(result);
    const {success, message} = result.data;
    // console.log(success, message);

    setIsLoading(false);
    setGiftArray(message);
  }

  const SendGiftClick=async ()=>{
    console.log(checkData);
    const getAll=form.getFieldsValue(true);

    let updateValue=[];

    for (let i = 0; i <checkData.length ; i++) {
      let selectId=checkData[i].birthday_gift_state_id;

      let OneValue=[];

      for (const allKey in getAll) {
        let id=allKey.split("-")[0];
        let key=allKey.split("-")[1];
        let value=getAll[allKey];
        if(selectId===parseInt(id)){
          // console.log("yes");
          if(parseInt(value)===4){
            checkData[i].birthday_gift_state="4";  //無法送禮
            checkData[i][key]=value;
            OneValue.push("4",value,selectId);

          }else{
            checkData[i].birthday_gift_state="1"; //即將送禮
            checkData[i][key]=value;
            OneValue.push("1",value,selectId);
          }
          updateValue.push(OneValue);

          break;
        }
      }
    }
    //     資料合併
    //     發送資料
    //     console.log(checkData);
    //     console.log(updateValue);
    const sendUpdateData={
      "updateGift":updateValue
    }
    console.log(sendUpdateData);
    const result=await axiosupdateMultiState(sendUpdateData);
    // console.log(result.data);
    const {success,message}=result.data;
    // console.log(success);
    if(success===1){
      console.log("更新成功");
      //     重新獲取資料
      fetchUnHandleGift();

    }

  }
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log('selectedRows: ', selectedRows);

      // console.log(selectedRows);
      setcheckData(selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      // console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: (record) => {

    }
  }
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
    // console.log(pagination)
  };

  return (
    <div>
      {
        isLoading ? <></> :

          <div>

            <Form name={"sendGift"} form={form}>

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
                     rowKey={record => record.customer_id}
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



            </Form>

            <div style={{textAlign:'center'}}>
              <Button onClick={SendGiftClick} type={"primary"}>儲存</Button>
            </div>
          </div>


      }


    </div>
  )
}
export default UnHandleGift;


