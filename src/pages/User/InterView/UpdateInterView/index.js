import React, {useEffect, useState} from "react";
import {
  ProCard,
  ProForm,
  ProFormDateTimeRangePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText
} from "@ant-design/pro-components";
import {Button, Table} from "antd";
import moment from "moment";
import ExcelJs from "exceljs";
import {NavLink} from "@/.umi/exports";
import {axiosgetSearchInterViewData, axiosSelectAllCustomer} from "@/networkReuest/Myaxios";


const UpdateInterView = () => {
  const [customerData, setcustomerData] = useState();
  const [InterViewData, setInterViewData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchAllCustomerData();
  }, []);

  const fetchAllCustomerData = async () => {
    const result = await axiosSelectAllCustomer();
    console.log(result.data);
    setcustomerData(result.data); //更新下拉選單顯示
    setIsLoading(false)

  }

  const formOnFinish = async (values) => {
    // console.log(values);
    let {review_location, review_method, review_subject, startTime, endTime} = values;
    let customer_name;
    try {
      customer_name = values.receive_people.customer_name;
    } catch (e) {
      // console.log(e);
    }
    // console.log(customer_name);

    if (customer_name === undefined) {
      customer_name = "";
    }
    if (startTime === undefined) {
      startTime = "";
    }
    if (endTime === undefined) {
      endTime = "";
    }
    console.log(customer_name, review_method, review_subject, startTime, endTime, review_location);
    const finalSendData = {
      customer_name: customer_name,
      Interview_method: review_method,
      Interview_subject: review_subject,
      interview_location: review_location,
      start_time: startTime,
      end_time: endTime
    };
    console.log(finalSendData);
    const result = await axiosgetSearchInterViewData(finalSendData);
    const {success, message} = result.data;
    console.log(success, message);
    setInterViewData(message);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const columns = [

    {
      title: '受訪者',
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
      title: '訪談方式',
      dataIndex: 'Interview_method',
      key: 'Interview_method',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: '訪談目的',
      dataIndex: 'Interview_subject',
      key: 'Interview_subject',
      render: (item) => {
        return (
          <div>
            {item}
          </div>
        )
      },
    },
    {
      title: '訪談時間',
      dataIndex: 'Interview_time',
      key: 'Interview_time',
      render: (item) => {
        return (
          <div>
            {moment(item).format("YYYY-MM-DD HH:mm:ss")}
          </div>
        )
      },
    },
    {
      title: '訪談地點',
      width: 400,
      dataIndex: 'interview_location',
      key: 'interview_location',
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
            <NavLink to={`/interview/updateInterview/${item.Interview_id}`}>修改</NavLink>
          </div>
        )
      },
    },

  ];
  return (
    <div>
      {
        isLoading ? <></> :
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
                <ProFormSelect
                  width="md"
                  colProps={{md: 12, xl: 8}}
                  fieldProps={{
                    labelInValue: true,

                  }}
                  // mode={"multiple"}

                  showSearch={true}
                  options={customerData}

                  initialValue={""}
                  name="receive_people"
                  label="受訪者"
                  // rules={[
                  //     {
                  //         required: true,
                  //         message: "未輸入",
                  //     },
                  // ]}
                />

                <ProFormRadio.Group
                  name="review_method"
                  width="md"
                  colProps={{md: 12, xl: 8}}
                  initialValue={""}
                  label="訪談方式"
                  fieldProps={{
                    // onChange: (key) => {
                    //
                    // }

                  }}
                  options={[
                    {
                      label: '不選擇',
                      value: "",
                    },
                    {
                      label: '親自到府',
                      value: '親自到府',
                    },
                    {
                      label: '電話',
                      value: '電話',
                    },
                    {
                      label: 'Line',
                      value: 'Line',
                    },
                    {
                      label: '臉書',
                      value: '臉書',
                    },

                  ]}
                />

                <ProFormRadio.Group
                  label={"訪談目的"}
                  colProps={{md: 12, xl: 8}}
                  initialValue={""}

                  width="md"
                  name="review_subject"
                  placeholder={"訪談目的"}

                  options={[
                    {
                      label: '不選擇',
                      value: "",
                    },
                    {
                      label: '虛寒問暖',
                      value: '虛寒問暖',
                    },
                    {
                      label: '業務接洽',
                      value: '業務接洽',
                    },
                    {
                      label: '客戶介紹',
                      value: '客戶介紹',
                    },


                  ]}
                />

                <ProFormDateTimeRangePicker
                  colProps={{md: 12, xl: 12}}

                  transform={(values) => {
                    return {
                      startTime: values ? values[0] : undefined,
                      endTime: values ? values[1] : undefined,
                    };
                  }}

                  name="createTimeRanger"
                  label="訪談時間"
                />

                <ProFormText
                  colProps={{md: 12, xl: 8}}

                  label={"訪談地點"}
                  initialValue={""}
                  width="md"
                  name="review_location"
                  placeholder={"訪談地點"}
                />
              </ProForm>
            </ProCard>


            <div style={{border: 'solid 1px grey', padding: '5px'}}>
              <div style={{
                borderBottom: "solid 1px grey",
                paddingTop: '10px',
                paddingBottom: '10px',
                textAlign: 'right'
              }}>
                <Button onClick={() => {
                  console.log(InterViewData);
                  let workbook = new ExcelJs.Workbook();
                  let sheet = workbook.addWorksheet('訪談資料');
                  sheet.columns = [
                    {header: '時間', key: 'Interview_time', width: 20},
                    {header: '生日', key: 'customer_birthday', width: 20},
                    {header: '姓名', key: 'customer_name', width: 20},
                    {header: '電話', key: 'customer_tel', width: 20},
                    {header: '手機', key: 'customer_cel', width: 20},
                    {header: "住址", key: "customer_address", width: 60},
                    {header: "訪談地址", key: "interview_location", width: 60},
                    {header: '訪談方式', key: 'Interview_method', width: 20},
                    {header: '訪談目的', key: "Interview_subject", width: 20}
                  ];

                  for (let i = 0; i < InterViewData.length; i++) {
                    console.log(InterViewData[i]);
                    // console.log(tableData[i].Interview_method)
                    sheet.addRow(
                      {
                        "Interview_time": moment(InterViewData[i].Interview_time).format("YYYY-MM-DD HH:mm:ss"),
                        "customer_birthday": moment(InterViewData[i].customer_birthday).format("YYYY-MM-DD"),
                        "customer_name": InterViewData[i].customer_name,
                        "customer_tel": InterViewData[i].customer_tel,
                        "customer_cel": InterViewData[i].customer_cel,
                        "customer_address": InterViewData[i].customer_address,
                        "interview_location": InterViewData[i].interview_location,
                        "Interview_method": InterViewData[i].Interview_method,
                        "Interview_subject": InterViewData[i].Interview_subject
                      }
                    );

                  }

                  workbook.xlsx.writeBuffer().then((content) => {
                    const link = document.createElement("a");
                    const blobData = new Blob([content], {
                      type: "application/vnd.ms-excel;charset=utf-8;"
                    });
                    link.download = "訪談資料.xlsx";
                    link.href = URL.createObjectURL(blobData);
                    link.click();
                  });

                }}>匯出</Button>
              </div>
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
                     }}

                     rowClassName={(record, index) => {

                     }}
              />
            </div>
          </div>
      }


    </div>
  );
};

export default UpdateInterView;

