import {
  ProCard,
  ProForm,
   ProFormDigitRange,
  ProFormGroup,
  ProFormSelect,
} from "@ant-design/pro-components";
import {Button, Table} from "antd";
import React, {useEffect, useState} from "react";
import {axiosGetLenderData, axiosSelectAllCustomer} from "@/networkReuest/Myaxios";
import {NavLink} from "@/.umi/exports";



const SelectCustomerData = () => {
  const [customerData, setcustomerData] = useState();
  const [LenderTableData, setLenderTableData] = useState();
  useEffect(() => {
    fetchAllCustomerData();
  }, []);

  const fetchAllCustomerData = async () => {
    const result = await axiosSelectAllCustomer();
    console.log(result.data);
    setcustomerData(result.data); //更新下拉選單顯示
  }

  const columns = [

    {
      title: '排名',
      dataIndex: 'rank',
      key: 'rank',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },

    {
      title: '戶名',
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
      title: '歸戶餘額',
      dataIndex: 'L_sum',
      key: 'L_sum',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: '客戶資料',
      render: (item) => {
        return (
          <div>
            <NavLink to={`/user/selectCustomerData/${item.customer_id}`}>客戶資料</NavLink>
          </div>
        )
      },
    },

  ];

  const formOnFinish = async (values) => {
    console.log(values);
    // const start_rank=values
    const customer_id = values?.receive_people?.customer_id;
    const start_L_sum = values?.lend_balance?.start_L_sum;
    const end_L_sum = values?.lend_balance?.end_L_sum;
    const start_rank = values?.rank?.[0];
    const end_rank = values?.rank?.[1];

    console.log(customer_id, start_L_sum, end_L_sum, start_rank, end_rank);
    const result = await axiosGetLenderData({customer_id, start_L_sum, end_L_sum, start_rank, end_rank});
    const {success, message} = result.data;
    console.log(success, message);
    if (success === 1) {
      setLenderTableData(message);
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>

      <ProCard bordered style={{marginBottom: '20px'}} title={"貸款查詢"}>

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
              rules={[
                {
                  required: false,
                  message: "未輸入",
                },
              ]}
            />


            <ProFormSelect
              width="lg"
              colProps={{md: 12, xl: 8}}
              fieldProps={{
                labelInValue: true,

              }}
              label={"歸戶餘額 "}
              // mode={"multiple"}

              showSearch={true}
              onChange={(value, option) => {
                console.log(option)
              }}

              options={[
                {label: "300萬以下", start_L_sum: null, end_L_sum: 3 * Math.pow(10, 6)},
                {
                  label: "300萬到600萬",
                  start_L_sum: 3 * Math.pow(10, 6),
                  end_L_sum: 6 * Math.pow(10, 6)
                },
                {
                  label: "600萬到1000萬",
                  start_L_sum: 6 * Math.pow(10, 6),
                  end_L_sum: 10 * Math.pow(10, 6)
                },
                {label: "1000萬以上", start_L_sum: 10 * Math.pow(10, 6), end_L_sum: null},
              ]}

              name="lend_balance"
            />

            <ProFormDigitRange
              colProps={{md: 12, xl: 8}}

              label="排名區間"
              name="rank"
              separator="-"
              placeholder={['輸入數字', '輸入數字']}
              separatorWidth={60}
            />

            {/*<ProFormText*/}
            {/*    colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}*/}
            {/*    width="lg"*/}
            {/*    label={"email"}*/}
            {/*    initialValue={""}*/}

            {/*    name="email"*/}
            {/*    placeholder={"email"}*/}
            {/*/>*/}


          </ProFormGroup>

        </ProForm>
      </ProCard>

      <Table columns={columns} dataSource={LenderTableData}
             onRow={(record, rowIndex) => {
               return {
                 // onDoubleClick: (event) => {
                 //     console.log(record.customer_id);
                 //      props.updateStoreColor(record.customer_id);
                 //     navigate(record.customer_id);
                 // }, // click row
               };
             }}
             // rowKey={record => record.Interview_id}

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

export default SelectCustomerData;


