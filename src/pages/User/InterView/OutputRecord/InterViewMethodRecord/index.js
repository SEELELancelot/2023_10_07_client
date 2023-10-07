import {Pie} from '@ant-design/plots';
import {
  ProCard,
  ProForm,
  ProFormDateTimeRangePicker, ProFormSelect,
} from "@ant-design/pro-components";
import {Button, Col, Pagination, Row} from "antd";
import React, {useEffect, useState} from "react";
import ExcelJs from "exceljs";
import moment from "moment";
import {axiosGetInterViewMethodRecord, axiosSelectAllCustomer} from "@/networkReuest/Myaxios";

const InterViewMethodRecord = () => {
  const [customerData, setcustomerData] = useState();
  const [InterViewRecord, setInterViewRecord] = useState([]);
  const [tableData, setTableData] = useState([]);

  const [myshowPage, setmyShowPage] = useState(1);
  const [showMinSize, setShowMinSize] = useState(0);
  const [showMaxSize, setShowMaxSize] = useState(1);

  useEffect(() => {
    fetchAllCustomerData();
  }, []);
  const fetchAllCustomerData = async () => {
    const result = await axiosSelectAllCustomer();
    // console.log(result.data);
    setcustomerData(result.data); //更新下拉選單顯示
  }


  const formOnFinish = async (values) => {
    console.log(values);
    let customer_id;
    let startTime;
    let endTime;
    try {
      customer_id = values.receive_people.customer_id;
    } catch (e) {
      // console.log(e);
    }
    try {
      startTime = values.startTime;
    } catch (e) {
      // console.log(e);
    }
    try {
      endTime = values.endTime;
    } catch (e) {
      // console.log(e);
    }
    if (customer_id === undefined) {
      customer_id = "";
    }

    // console.log(startTime, endTime);
    const finalSendData = {customer_id: customer_id, start_time: startTime, end_time: endTime};
    // console.log(finalSendData);
    const result = await axiosGetInterViewMethodRecord(finalSendData);
    const {success, message, tableData} = result.data;
    // console.log(success);
    if (success === 1) {
      // console.log(message);

      setmyShowPage(1); //恢復成預設值
      setShowMinSize(0);
      setShowMaxSize(1);
      setInterViewRecord(message);
      setTableData(tableData);
    }

  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <ProCard hoverable={true}>
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
            options={customerData}

            showSearch={true}
            // options={customerData}

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

        </ProForm>
      </ProCard>


      {
        <div>{InterViewRecord.length}筆紀錄</div>

      }


      {
        InterViewRecord.length !== 0 && <Button onClick={async () => {


          // console.log(InterViewRecord);
          console.log(tableData);
          let workbook = new ExcelJs.Workbook();
          let sheet = workbook.addWorksheet('訪問方式');
          sheet.columns = [
            {header: '時間', key: 'Interview_time', width: 20},
            {header: '生日', key: 'customer_birthday', width: 20},
            {header: '姓名', key: 'customer_name', width: 20},
            {header: '電話', key: 'customer_tel', width: 20},
            {header: '手機', key: 'customer_cel', width: 20},
            {header: "住址", key: "customer_address",width:60},
            {header: "訪談地址", key: "interview_location",width:60},
            {header: '訪談方式', key: 'Interview_method', width: 20},
            {header: '訪談目的', key: "Interview_subject", width: 20}

          ];

          for (let i = 0; i < tableData.length; i++) {
            console.log(tableData[i]);
            // console.log(tableData[i].Interview_method)
            sheet.addRow(
              {
                "Interview_time": moment(tableData[i].Interview_time).format("YYYY-MM-DD HH:mm:ss"),
                "customer_birthday": moment(tableData[i].customer_birthday).format("YYYY-MM-DD"),
                "customer_name": tableData[i].customer_name,
                "customer_tel": tableData[i].customer_tel,
                "customer_cel": tableData[i].customer_cel,
                "customer_address":tableData[i].customer_address,
                "interview_location":tableData[i].interview_location,
                "Interview_method": tableData[i].Interview_method,
                "Interview_subject": tableData[i].Interview_subject
              }
            );

            // console.log(jsonAllData);
          }


          workbook.xlsx.writeBuffer().then((content) => {
            const link = document.createElement("a");
            const blobData = new Blob([content], {
              type: "application/vnd.ms-excel;charset=utf-8;"
            });
            link.download = "訪談方式.xlsx";
            link.href = URL.createObjectURL(blobData);
            link.click();
          });

        }}>匯出</Button>
      }

      {
        InterViewRecord.length === 0 ? <div></div> :
          (
            InterViewRecord.slice(showMinSize, showMaxSize).map((item, index) => {
              const method_num = JSON.parse(item.method_num);
              // console.log(method_num);
              let myself_num = method_num['親自到府'];
              let tel_num = method_num['電話'];
              let Line_num = method_num['Line'];
              let facebook_num = method_num['臉書'];

              // console.log(myself_num,tel_num,Line_num,facebook_num);
              let data = [
                {
                  type: '親自到府',
                  value: myself_num !== undefined ? myself_num : 0,
                },
                {
                  type: '電話',
                  value: tel_num !== undefined ? tel_num : 0,
                },
                {
                  type: 'Line',
                  value: Line_num !== undefined ? Line_num : 0,
                },
                {
                  type: '臉書',
                  value: facebook_num !== undefined ? facebook_num : 0,
                },

              ];
              let config = {
                appendPadding: 10,
                data: data,
                angleField: 'value',
                colorField: 'type',
                radius: 0.85,
                label: {
                  type: 'spider',
                  labelHeight: 100,
                  style: {
                    fontSize: 20
                  },
                  content: '{name}\n{percentage}',
                },
                interactions: [
                  {
                    type: 'element-selected',
                  },
                  {
                    type: 'element-active',
                  },
                ],
              };
              return (

                <div key={item.customer_id}>
                  <div style={{
                    border: 'solid 1px grey',
                    marginTop: '10px',
                    marginBottom: '10px',
                    padding: "24px"
                  }}>
                    <div style={{borderBottom: 'solid 1px grey'}}>
                      <h1 style={{paddingLeft: '10px'}}>{item.customer_name}</h1>
                    </div>

                    <Row gutter={24} style={{marginTop: '24px'}}>
                      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <ProCard
                          title="親自到府"
                          // extra="extra"
                          // tooltip="提示"
                          style={{marginBottom: '24px'}}
                          boxShadow
                        >
                          <div><span
                            style={{
                              color: 'rgba(0,0,0,0.85)',
                              fontSize: '30px',
                            }}>個人訪問次數 {myself_num !== undefined ? myself_num : 0}</span>
                          </div>

                        </ProCard>
                      </Col>
                      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <ProCard
                          title="電話"
                          // extra="extra"
                          // tooltip="提示"
                          style={{marginBottom: '24px'}}
                          boxShadow
                        >
                          <div><span
                            style={{
                              color: 'rgba(0,0,0,0.85)',
                              fontSize: '30px',
                            }}>個人訪問次數 {tel_num !== undefined ? tel_num : 0}</span>
                          </div>

                        </ProCard>
                      </Col>
                      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <ProCard
                          title="Line"
                          // extra="extra"
                          // tooltip="提示"
                          style={{marginBottom: '24px'}}
                          boxShadow
                        >

                          <div><span
                            style={{
                              color: 'rgba(0,0,0,0.85)',
                              fontSize: '30px',
                            }}>個人訪問次數 {Line_num !== undefined ? Line_num : 0}</span>
                          </div>
                        </ProCard>
                      </Col>
                      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
                        <ProCard
                          title="臉書"
                          // extra="extra"
                          // tooltip="提示"
                          style={{marginBottom: '24px'}}
                          boxShadow
                        >
                          <div><span
                            style={{
                              color: 'rgba(0,0,0,0.85)',
                              fontSize: '30px',
                            }}>個人訪問次數 {facebook_num !== undefined ? facebook_num : 0}</span>
                          </div>

                        </ProCard>
                      </Col>
                    </Row>


                    <Pie {...config} />


                  </div>
                </div>

              )
            })

          )

      }

      {console.log(showMinSize, showMaxSize)}
      <Pagination
        style={{marginBottom:"20px"}}
        defaultCurrent={1}
        current={myshowPage}
        pageSize={1}
        onChange={(page, pageSize) => {
          let min = (page - 1) * pageSize;
          let max = (page - 1) * pageSize + (pageSize);
          console.log(min, max);
          setmyShowPage(page);
          setShowMinSize(min);
          setShowMaxSize(max);
        }}
        total={InterViewRecord.length} //total number of card data available
      />


    </div>
  )
}
export default InterViewMethodRecord;


