import React, {useEffect, useState} from "react";
import {
  ProCard,
  ProForm, ProFormDatePicker,
  ProFormDateTimeRangePicker, ProFormGroup,
  ProFormRadio,
  ProFormSelect,
  ProFormText
} from "@ant-design/pro-components";
import {Button, Table} from "antd";
import {NavLink} from "react-router-dom";
import {axiosGetUpdateUserDataMyself, axiosSelectAllCustomer} from "@/networkReuest/Myaxios";
import dayjs from "dayjs";

const UpdateCustomerData = () => {

  const [customerData, setcustomerData] = useState();
  const [tableData, setTableData] = useState();


  useEffect(() => {
    fetchAllCustomerData();
  }, []);

  const fetchAllCustomerData = async () => {
    const result = await axiosSelectAllCustomer();
    console.log(result.data);
    setcustomerData(result.data); //更新下拉選單顯示
  }

  const formOnFinish = async (values) => {
    // console.log(values);

    const customerId = (values?.receive_people?.customer_id ?? "");
    const email = values?.email ?? "";
    const customer_birthday = values?.customer_birthday ?? "";
    const gender = values?.gender ?? "";
    // console.log(customerId, gender, email, customer_birthday);

    const finalData = {customerId, gender, email, customer_birthday};

    console.log(finalData);
    const result = await axiosGetUpdateUserDataMyself(finalData);

    const {success, message} = result.data;
    // console.log(success, message);
    setTableData(message);

  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


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
      title: '客戶名稱',
      dataIndex: 'customer_name',
      key: 'customer_name',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: '性別',
      dataIndex: 'gender',
      key: 'gender',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: '出生日期',
      dataIndex: 'birthday',
      key: 'birthday',
      render: (item) => {
        return (
          <div>
            {item === "" ? "" : dayjs(item).format("YYYY-MM-DD")}
          </div>
        )
      },
    },
    {
      title: '電話',
      dataIndex: 'customer_tel',
      key: 'customer_tel',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: '手機',
      dataIndex: 'customer_cel',
      key: 'customer_cel',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },


    {
      title: "操作",
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (item) => {
        console.log(item)

        return (

          <div>
            <NavLink to={`/user/UpdateCustomerData/${item.customer_id}`}>修改</NavLink>
          </div>
        )
      },
    },

  ];


  return (
    <div>
      <ProCard bordered style={{marginBottom: '20px'}}>

        <ProForm grid={true} onFinish={formOnFinish} onFinishFailed={onFinishFailed} submitter={{
          render: (props, doms) => {
            return [
              <div style={{textAlign: 'center'}}>
                <Button
                  type={"primary"}
                  key="submit"
                  onClick={() => props.form?.submit?.()}
                >
                  搜尋
                </Button>
              </div>

            ];
          }
        }}>
          <ProFormGroup>

            <ProFormSelect
              width="lg"
              colProps={{md: 12, xl: 8}}
              fieldProps={{
                labelInValue: true,

              }}
              // mode={"multiple"}

              showSearch={true}
              onChange={(value, option) => {
                console.log(option)
              }}

              options={customerData}

              name="receive_people"
              label="客戶(可輸入姓名，電話或地址)"
              placeholder={"客戶"}

              rules={[
                {
                  required: false,
                  message: "未輸入",
                },
              ]}
            />

            <ProFormText
              colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
              width="lg"
              label={"email"}
              initialValue={""}

              name="email"
              placeholder={"email"}
            />
            <ProFormDatePicker
              colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 6}}
              width={"sm"}

              name="customer_birthday"
              label="出生日期"
              placeholder={"出生日期"}

            />

            <ProFormRadio.Group
              name="gender"
              width={"lg"}
              colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

              initialValue={""}
              label="性別"
              fieldProps={{
                // onChange: (key) => {
                //
                // }

              }}
              options={[
                {
                  label: '不選擇',
                  value: '',
                },
                {
                  label: '男',
                  value: '男',
                },
                {
                  label: '女',
                  value: '女',
                },


              ]}
            />

          </ProFormGroup>


        </ProForm>
      </ProCard>


      <Table columns={columns} dataSource={tableData}
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

             rowClassName={(record, index) => {

             }}
      />

    </div>

  )
}

export default UpdateCustomerData;


