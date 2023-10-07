import {useEffect, useState} from "react";

import {
  ProForm,
  ProFormDateTimePicker,
  ProFormText,
  ProFormSelect,
  ProFormRadio,
  ProFormTextArea,
  ProFormList, ProFormGroup, ProCard,

} from "@ant-design/pro-components";
import {Button} from "antd";
import moment from "moment";
import {useNavigate} from "@/.umi/exports";
import {axiosInsertInterView, axiosSelectAllCustomer} from "@/networkReuest/Myaxios";


const InsertView = () => {
  const navigate = useNavigate();
  const [customerData, setcustomerData] = useState()
  const [formObj] = ProForm.useForm();
  useEffect(() => {
    fetchAllCustomerData();
  }, []);

  const fetchAllCustomerData = async () => {
    const result = await axiosSelectAllCustomer();
    console.log(result.data);
    setcustomerData(result.data); //更新下拉選單顯示
  }


  const formOnFinish = async (values) => {
    console.log(values);

    let allData = [];

    for (const index in values.user) {
      let data = [];
      console.log(values.user[index]);
      data.push(
        values.user[index].review_method,
        values.user[index].review_subject,
        values.user[index].review_content,
        values.user[index].date,
        values.user[index].review_location,
        values.user[index].receive_people.customer_id,
      );
      allData.push(data);
    }
    const finalSendData = {interViewArray: allData};
    // console.log(finalSendData);
    const result = await axiosInsertInterView(finalSendData);
    const {success, message} = result.data;
    console.log(success);
    if (success === 1) {
      //    清空表單
      formObj.resetFields();

    }
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (

    <div>

      <ProForm form={formObj} grid={true} onFinish={formOnFinish} onFinishFailed={onFinishFailed} submitter={{
        searchConfig: {
          submitText: '送出',
        },
        resetButtonProps: {
          style: {
            // 隐藏重置按钮
            display: 'none',
          },
        },

        render: (props, doms) => {
          return [

            <div style={{textAlign: 'center'}}>
              <Button
                type={"primary"}
                key="submit"
                onClick={() => props.form?.submit?.()}
              >
                新增
              </Button>
            </div>

          ];
        }
      }}>
        <ProFormList name="user" creatorButtonProps={{
          position: 'bottom',
          creatorButtonText: '新增訪談表',
          type: "primary",
          style: {width: '150px'},

        }}
                     copyIconProps={false}
                     deleteIconProps={false}
                     initialValue={[
                       {
                         useMode: 'chapter',
                       },
                     ]}
                     alwaysShowItemLabel={true}
                     max={3}

        > {(
          meta,
          index,
          action,
          count,
        ) => {
          return (
            <ProCard hoverable bordered style={{marginBottom: '10px'}}>

              <ProFormGroup>
                <ProFormSelect
                  width="md"
                  colProps={{md: 12, xl: 8}}
                  fieldProps={{
                    labelInValue: true,

                  }}
                  // mode={"multiple"}

                  showSearch={true}
                  onChange={(value, option) => {
                    console.log(option)

                    action.setCurrentRowData({review_location: option?.customer_address ?? ""})
                  }}

                  options={customerData}

                  name="receive_people"
                  label="受訪者(可輸入姓名，電話或地址)"
                  rules={[
                    {
                      required: true,
                      message: "未輸入",
                    },
                  ]}
                />

                <ProFormRadio.Group
                  name="review_method"
                  width="md"
                  colProps={{md: 12, xl: 8}}
                  initialValue={"親自到府"}
                  label="訪談方式"
                  fieldProps={{
                    // onChange: (key) => {
                    //
                    // }

                  }}
                  options={[
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
                  initialValue={"虛寒問暖"}

                  width="md"
                  name="review_subject"
                  placeholder={"訪談目的"}

                  options={[
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


                {/*<ProFormTextArea*/}
                {/*    colProps={{span: 24}}*/}
                {/*    name="address"*/}
                {/*    label="訪談內容"*/}
                {/*/>*/}

                <ProFormTextArea
                  label={"訪談內容"}
                  initialValue={""}
                  name="review_content"
                  placeholder={""}
                />
              </ProFormGroup>


              <ProFormDateTimePicker
                colProps={{md: 12, xl: 8}}
                initialValue={moment()}
                name="date"
                label={"訪談時間"}
                rules={[
                  {
                    required: true,
                    message: "未輸入",
                  },
                ]}
              />

              <ProFormText
                label={"訪談地點"}
                initialValue={""}
                width="xl"
                name="review_location"
                placeholder={"訪談地點"}
              />
              {
                count > 1 &&
                <div style={{textAlign: 'right'}}>
                  <Button type={"primary"} danger onClick={() => {
                    // console.log(action);
                    action.remove(index);
                  }}>
                    刪除
                  </Button>
                </div>
              }


            </ProCard>
          )
        }}


        </ProFormList>
      </ProForm>


    </div>
  )
}

export default InsertView;

