import {ProCard, ProForm, ProFormDigitRange, ProFormGroup, ProFormSelect} from "@ant-design/pro-components";
import {Button, Table} from "antd";
import React, {useEffect, useState} from "react";
import {axiosGetSaveData, axiosSelectAllCustomer} from "@/networkReuest/Myaxios";
import {NavLink} from "@/.umi/exports";

const SelectSaveCustomerData = () => {
  const [customerData, setcustomerData] = useState();
  const [savetableData,setSaveTableData]=useState();
  useEffect(() => {
    fetchAllCustomerData();
  }, []);

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
      title: '姓名',
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
      title: '活期存款',
      dataIndex: 'cu_b',
      key: 'cu_b',
      render: (item) => {
        return (
          <div>
            {Math.round(item)}
            <div style={{textAlign:'right'}}>
              {/*<NavLink to={`/user/selectCustomerData/${123}`}>詳細</NavLink>*/}

            </div>

          </div>
        )
      },
    },
    {
      title: '定期存款',
      dataIndex: 'fi_b',
      key: 'fi_b',
      render: (item) => {
        return (
          <div>
            {Math.round(item)}

          </div>
        )
      },
    },
    {
      title: '支票存款',
      dataIndex: 'ch_b',
      key: 'ch_b',
      render: (item) => {
        return (
          <div>
            {Math.round(item)}

          </div>
        )
      },
    },
    {
      title: '總餘額',
      dataIndex: 'total',
      key: 'total',
      render: (item) => {
        return (
          <div>
            {Math.round(item)}

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

  const fetchAllCustomerData = async () => {
    const result = await axiosSelectAllCustomer();
    console.log(result.data);
    setcustomerData(result.data); //更新下拉選單顯示
  }

  const formOnFinish = async (values) => {
    // console.log(values);
    // const {receieve_customer, total_balance, rank, cu_balance, fix_balance, check_balance} = values;

    const customer_id = values?.receieve_customer?.customer_id;
    const startTotal = values?.total_balance?.startTotal;
    const endTotal = values?.total_balance?.endTotal;
    const startRank = values?.rank?.[0];
    const endRank = values?.rank?.[1];
    const startCub = values?.cu_balance?.startCub;
    const endCub = values?.cu_balance?.endCub;
    const startFib = values?.fix_balance?.startFib;
    const endFib = values?.fix_balance?.endFib;
    const startChb = values?.check_balance?.starChb;
    const endChb = values?.check_balance?.endChb;

    console.log(customer_id,startTotal,endTotal,startRank,endRank,startCub,endCub,startFib,endFib,startChb,endChb);
    const result=await axiosGetSaveData({customer_id,startTotal,endTotal,startRank,endRank,startCub,endCub,startFib,endFib,startChb,endChb});
    const{success,message}=result.data;
    console.log(success,message);
    if(success===1){
      setSaveTableData(message);
    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <ProCard bordered style={{marginBottom: '20px'}} title={"存款查詢"}>

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
                // console.log(option)
              }}

              options={customerData}

              name="receieve_customer"
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
              label={"合計餘額"}
              // mode={"multiple"}

              showSearch={true}
              onChange={(value, option) => {
                console.log(option)
              }}

              options={[
                {label: "1000萬以下", startTotal: null, endTotal: 10 * Math.pow(10, 6)},
                {
                  label: "1000萬到5000萬",
                  startTotal: 10 * Math.pow(10, 6),
                  endTotal: 50 * Math.pow(10, 6)
                },
                {
                  label: "5000萬以上",
                  startTotal: 50 * Math.pow(10, 6),
                  endTotal: null
                },
              ]}

              name="total_balance"
            />

            <ProFormDigitRange
              colProps={{md: 12, xl: 8}}

              label="排名區間"
              name="rank"
              separator="-"
              placeholder={['輸入數字', '輸入數字']}
              separatorWidth={60}
            />

            <ProFormSelect
              width="lg"
              colProps={{md: 12, xl: 8}}
              fieldProps={{
                labelInValue: true,

              }}
              label={"活期存款餘額"}
              // mode={"multiple"}

              showSearch={true}
              onChange={(value, option) => {
                console.log(option)
              }}

              options={[
                {label: "1000萬以下", startCub: null, endCub: 10 * Math.pow(10, 6)},
                {
                  label: "1000萬到5000萬",
                  startCub: 10 * Math.pow(10, 6),
                  endCub: 50 * Math.pow(10, 6)
                },
                {
                  label: "5000萬以上",
                  startCub: 50 * Math.pow(10, 6),
                  endCub: null
                },
              ]}

              name="cu_balance"
            />

            <ProFormSelect
              width="lg"
              colProps={{md: 12, xl: 8}}
              fieldProps={{
                labelInValue: true,

              }}
              label={"定期存款餘額"}
              // mode={"multiple"}

              showSearch={true}
              onChange={(value, option) => {
                console.log(option)
              }}

              options={[
                {label: "1000萬以下", startFib: null, endFib: 10 * Math.pow(10, 6)},
                {
                  label: "1000萬到5000萬",
                  startFib: 10 * Math.pow(10, 6),
                  endFib: 50 * Math.pow(10, 6)
                },
                {
                  label: "5000萬以上",
                  startFib: 50 * Math.pow(10, 6),
                  endFib: null
                },
              ]}

              name="fix_balance"
            />

            <ProFormSelect
              width="lg"
              colProps={{md: 12, xl: 8}}
              fieldProps={{
                labelInValue: true,

              }}
              label={"支票存款餘額"}
              // mode={"multiple"}

              showSearch={true}
              onChange={(value, option) => {
                console.log(option)
              }}

              options={[
                {label: "1000萬以下", starChb: null, endChb: 10 * Math.pow(10, 6)},
                {
                  label: "1000萬到5000萬",
                  starChb: 10 * Math.pow(10, 6),
                  endChb: 50 * Math.pow(10, 6)
                },
                {
                  label: "5000萬以上",
                  starChb: 50 * Math.pow(10, 6),
                  endChb: null
                },
              ]}

              name="check_balance"
            />


          </ProFormGroup>

        </ProForm>
      </ProCard>

      <Table columns={columns} dataSource={savetableData}
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
export default SelectSaveCustomerData;
