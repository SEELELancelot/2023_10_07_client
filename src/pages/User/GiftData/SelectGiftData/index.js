import {Button, Col, Form, Input, Modal, Row, Select, Table} from "antd";
import SaveUserModal from "@/pages/User/GiftData/SelectGiftData/SaveUserModal/SaveUserModal";
import {axiosfindLocation, axiosGetDefaultBirthdayData, axiosgetSendGiftCustomer} from "@/networkReuest/Myaxios";
import moment from "moment";
import {useEffect, useState} from "react";

const SelectGiftData = () => {
  const [checkData, setCheckData] = useState([]); //勾勾 選中的資料
  const [giftData, setGiftData] = useState([]);
  const [saveUserModal, setSaveUserModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [Location, setLocation] = useState([]);


  useEffect(() => {
    findLocation();
  }, []);
  const findLocation = async () => {
    const result = await axiosfindLocation();
    // console.log(result);
    const {success, data} = result.data;
    // console.log(success,data);
    for (let i = 0; i < data.length; i++) {
      data[i].value = data[i].location_id;
      data[i].label = data[i].location_name;
      // console.log(data[i]);
    }
    data.unshift({
      value: "",
      label: "全部"
    })

    setLocation(data);
  }

  const onFinish = async (values) => {

    let {start_date, end_date, department} = values;
    // 要將接收過來的 (03/24) -轉換成 (03-24) 的格式

    const parseStart_date = start_date?.replace("/", "-");
    const parseEnd_date = end_date?.replace("/", "-");

    console.log(values);
    // console.log(start_date,end_date);
    // console.log(start_date, end_date, department);
    console.log(department.value);
    let sendValue = {
      start_date: parseStart_date,
      end_date: parseEnd_date,
      department: department.value
    }

    const result = await axiosgetSendGiftCustomer(sendValue);
    const {success, message} = result.data;
    console.log(success, message);

    if (success === 1) {
      const defaultBirthdayResult = await axiosGetDefaultBirthdayData();

      const GetHaveBirtyhdayMessage = message.map((item, index) => {
        item.giftContent = defaultBirthdayResult.data[0]  //預設第一個
        item.timeStamp=Date.now();
        return item;
      });

      setGiftData(GetHaveBirtyhdayMessage);
      setIsLoading(false);

    }

  };

  const columns = [
    {
      title: '身分證',
      dataIndex: 'customer_id',
      render: (item) => {
        return item;
      }
    },
    {
      title: '姓名',
      dataIndex: 'customer_name',
    },
    {
      title: '電話',
      dataIndex: 'customer_tel',
    },
    {
      title: '手機',
      dataIndex: 'customer_cel',
    },

    {
      title: '生日',
      dataIndex: 'customer_birthday',
      // defaultSortOrder: 'descend',
      render: (item) => {
        return new Date(item).toLocaleDateString();
      },

    },
    {
      title: "送禮內容",
      render: (item) => {
        // console.log(item);
        return (

          <div>
            {item.giftContent.default_birthday_name}
          </div>
        )
      },
    },


  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log('selectedRows: ', selectedRows);
      // console.log(selectedRows);
      setCheckData(selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
    getCheckboxProps: (record) => {
      // let employee_location = props.myUserData.employ_location_id;
      // let customer_location = record.customer_start_location;
      //
      // if(employee_location!==customer_location){
      //   return {disabled:true}
      // }else{
      //   return null;
      // }
    }
  };
  const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
    // console.log(pagination)

  };
  return (
    <div>


      <Modal title={`儲存${checkData.length}筆資料`}
             centered
             open={saveUserModal}
             footer={null}
             onOk={() => setSaveUserModal(false)}
             onCancel={() => setSaveUserModal(false)}
             width={900}
      >
        <SaveUserModal checkData={checkData} setNewinsertGiftModal={setSaveUserModal}/>

      </Modal>


      <Form
        name={"selectTime"}
        onFinish={onFinish}
        style={{}}

      >
        <Row justify={'center'} gutter={[40, 16]}>
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Form.Item name="start_date"

                       label="開始日期" rules={[
              {
                // required: true,
                message: '請輸入開始日期',

              },
            ]}>
              <Input placeholder={"01/01"}/>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Form.Item name="end_date" label="結束日期"
                       rules={[
                         {
                           // required: true,
                           message: '請輸入結束日期',
                         },
                       ]}>
              <Input placeholder={"12/31"}/>
            </Form.Item>
          </Col>


          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Form.Item
              label={"分部"}
              name={"department"}
              initialValue={"全部"}
            >
              <Select options={Location} showSearch={false} labelInValue={true}>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6} xl={4}>
            <Form.Item
              wrapperCol={{
                offset: 2,
              }}
            >
              <Button type="primary" htmlType="submit">
                搜尋
              </Button>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={2} lg={2} xl={2}>
            {
              isLoading ? <></> :
                <span>{giftData.length}筆</span>
            }
          </Col>


        </Row>
      </Form>

      {
        isLoading ? <></> :

          <div>

            <Table columns={columns} dataSource={giftData} onChange={onChange}
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
                     defaultPageSize: 10,
                     defaultCurrent: 1
                   }}
                   rowSelection={{
                     ...rowSelection
                   }}

                   rowClassName={(record, index) => {
                     // console.log(record);

                     // if(record.customer_id===props.selectGiftDataPageRowColor.clickId){
                     //
                     //     return "selectCustomerData"
                     // }

                   }}
            />
            <div style={{textAlign: 'center'}}>
              <Button type={"primary"} onClick={async () => {
                // console.log(checkData);
                await setSaveUserModal(true);
                // console.log(props.myUserData.user_account);

              }}>點選儲存</Button>
            </div>
          </div>
      }


    </div>
  )
}
export default SelectGiftData;
