import React, {useEffect, useRef} from "react";
import {
  ProCard,
  ProFormDatePicker,
  ProFormGroup,
  ProFormRadio, ProFormSelect, ProFormSlider,
  ProFormText, ProFormTreeSelect,
  StepsForm
} from "@ant-design/pro-components";
import {Button, message} from "antd";

import {
  axiosUpdateBasicCustomerData, axiosUpdateCustomerAlldata,
  newGetUserData_by_Myself_create
} from "@/networkReuest/Myaxios";

import dayjs from "dayjs";
import swal from "sweetalert2";
import {useParams} from "../../../../.umi/exports";
import {useNavigate} from "react-router-dom";

const UpdateCustomerDetail = () => {
  const params = useParams();
  const navigate = useNavigate();


  const formRef = useRef();
  const formBasic = useRef();
  const formAdvance = useRef();
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    fetchExistData();
  }, []);

  const fetchExistData = async () => {
    console.log(params.id);
    const customerId = params.id;
    const result = await newGetUserData_by_Myself_create(customerId);
    // console.log(result);
    let {success, message} = result.data;
    console.log(success, message);
    if (success === 1) {
      console.log(message[0]);
      // 還原成array

      message[0].language = message[0]?.language?.split(",");
      message[0].interest = message[0]?.interest?.split(",");
      message[0].social = message[0]?.social?.split(",");
      message[0].religion = message[0]?.religion?.split(",");
      message[0].talk_interest = message[0]?.talk_interest?.split(",");

      formBasic.current.setFieldsValue(message[0]);
      formAdvance.current.setFieldsValue(message[0]);
      // console.log(formRef)
    } else if (success === -3) {
      // console.log("沒有權限修改");
      navigate("/user/customerData");

      await swal.fire({
        title: '沒有權限修改',
        // text: 'Swal injected',
        icon: 'warning',
      });
    }
  }


  const basicOnFinish = async (values) => {

    if (values.customer_birthday === undefined) {
      values.customer_birthday = null;
    }

    if (values.customer_birthday !== null) {
      values.customer_birthday = dayjs(values.customer_birthday).format("YYYY-MM-DD"); //改變日期格式
    }

    console.log(values);
    const result = await axiosUpdateBasicCustomerData(values);
    console.log(result);
    //     基本資料修改
    const {success, message} = result.data;
    if (success === 1) {
      console.log("修改成功");
      messageApi.open({
        type: 'success',
        content: '修改成功',
        duration: 1
      });
    } else if (success === -1) {
      console.log("修改失敗");
      messageApi.open({
        type: 'error',
        content: '修改失敗',
        duration: 1
      });

    } else if (success === -3) {
      messageApi.open({
        type: 'error',
        content: '要修改的email已存在',
        duration: 1
      });
    }

  }

  const onFininsh = async (values) => {
    // console.log(values);
    // let {language}=values;

    console.log(values.customer_birthday);
    if (values.customer_birthday === undefined) {
      values.customer_birthday = null;
    }
    if (values.customer_birthday !== null) {
      values.customer_birthday = dayjs(values.customer_birthday).format("YYYY-MM-DD"); //改變日期格式
    }

    values.language = values.language?.join(); //如果value.language 不null undefined 才join(",")
    values.interest = values.interest?.join();
    values.social = values.social?.join();
    values.religion = values.religion?.join();
    values.talk_interest = values.talk_interest?.join();

    console.log(values);
    const result = await axiosUpdateCustomerAlldata(values);
    const {success, message} = result.data;
    console.log(success, message);

    if (success === 1) {
      console.log("修改成功");
      messageApi.open({
        type: 'success',
        content: '修改成功',
        duration: 1
      });
    } else if (success === -1) {
      console.log("修改失敗");
      messageApi.open({
        type: 'error',
        content: '修改失敗',
        duration: 1
      });

    } else if (success === -3) {
      messageApi.open({
        type: 'error',
        content: '要修改的email已存在',
        duration: 1
      });
    }
  }

  return (
    <div>

      {contextHolder}
      <StepsForm style={{width: '1000px'}} formRef={formRef} onFinish={onFininsh}

                 submitter={{
                   render: (props, dom) => {
                     console.log(props.step);
                     if (props.step === 0) {
                       return (
                         <div style={{marginTop: '10px'}}>

                           <Button style={{marginRight: '20px'}} onClick={() => props.onSubmit?.()}>
                             客戶進階資料
                           </Button>
                           <Button type={"primary"} onClick={async () => {

                             formRef.current.validateFields().then(async () => {
                               await basicOnFinish(formRef.current?.getFieldsValue());

                             }).catch((error) => {
                               console.log(error);
                             })
                           }}>
                             基本資料修改
                           </Button>

                         </div>

                       )
                     }

                     if (props.step === 1) {
                       return (
                         <div style={{marginTop: "10px"}}>
                           <Button style={{marginRight: '20px'}} key="pre"
                                   onClick={() => props.onPre?.()}>
                             {`< 返回基本資料`}
                           </Button>
                           <Button
                             type="primary"
                             key="goToTree"
                             onClick={() => props.onSubmit?.()}
                           >
                             全部資料修改
                           </Button>
                         </div>
                       )
                     }
                   }
                 }}
      >
        <StepsForm.StepForm
          // layout={"horizontal"}
          name="base"
          formRef={formBasic}
          title="客戶基本資料"
          stepProps={{
            description: '',
          }}

          onFinish={async () => {
            console.log(formRef.current?.getFieldsValue());
            return true;
          }}
          grid={true}


        >
          <ProCard hoverable bordered style={{marginBottom: '10px'}}>

            <ProFormGroup>
              <ProFormText
                label={"身分證字號"}
                disabled={true}
                width={"lg"}

                initialValue={""}
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                name="customer_id"
                placeholder={"身分證字號"}
                rules={[
                  {
                    required: true,
                    message: "未輸入",
                  },
                ]}
              />

              <ProFormText
                label={"姓名"}
                width={"lg"}
                rules={[
                  {
                    required: true,
                    message: "未輸入",
                  },
                ]}
                initialValue={""}
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                name="customer_name"
                placeholder={"姓名"}
              />
              <ProFormRadio.Group
                name="gender"
                width={"lg"}

                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                // initialValue={"男"}
                label="性別"
                fieldProps={{
                  // onChange: (key) => {
                  //
                  // }

                }}
                options={[
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

              <ProFormDatePicker
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                width={"sm"}

                name="customer_birthday"
                label="出生日期"

              />

              <ProFormRadio.Group
                name="education"

                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                initialValue={""}
                label="教育程度"
                fieldProps={{
                  // onChange: (key) => {
                  //
                  // }

                }}
                options={[
                  {
                    label: '國小',
                    value: '國小',
                  },
                  {
                    label: '國中',
                    value: '國中',
                  },
                  {
                    label: '高中',
                    value: '高中',
                  },
                  {
                    label: '大學',
                    value: '大學',
                  },
                  {
                    label: '碩士',
                    value: '碩士',
                  },
                  {
                    label: '博士',
                    value: '博士',
                  },

                ]}
              />

              <ProFormText
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                width="lg"

                label={"電話"}
                initialValue={""}
                name="customer_tel"
                placeholder={"電話"}
              />
              <ProFormText
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                width="lg"

                label={"手機"}
                initialValue={""}

                name="customer_cel"
                placeholder={"手機"}
              />
              <ProFormText
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                width="lg"
                label={"email"}
                initialValue={""}

                name="email"
                placeholder={"email"}
              />
              <ProFormText
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                width="lg"
                label={"公司名稱"}

                initialValue={""}
                name="company_name"
                placeholder={"公司名稱"}
              />


              <ProFormText
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                width="lg"

                label={"通訊地址"}
                initialValue={""}
                name="customer_address"
                placeholder={"通訊地址"}
              />
              <ProFormText
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                // width="md"
                label={"戶籍地址"}
                initialValue={""}
                name="customer_live_address"
                placeholder={"戶籍地址"}
              />


            </ProFormGroup>


          </ProCard>


        </StepsForm.StepForm>


        <StepsForm.StepForm
          name="checkbox"
          title="客戶進階資料"
          formRef={formAdvance}
          stepProps={{
            description: '',
          }}
          onFinish={async () => {
            // console.log(formRef.current?.getFieldsValue());
            return true;
          }}
          grid={true}
        >

          <ProCard hoverable bordered style={{marginBottom: '10px'}}>

            <ProFormGroup>


              <ProFormTreeSelect
                width={"lg"}
                label={"客戶使用語言"}

                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                request={async () => {
                  return [
                    {
                      title: "國語",
                      value: "國語"
                    },
                    {
                      title: "台語",
                      value: "台語",
                    },
                    {
                      title: "客語",
                      value: "客語"
                    },

                  ]
                }}
                name="language"
                placeholder="客戶使用語言"
                allowClear
                // width={150}
                fieldProps={{
                  showArrow: false,
                  filterTreeNode: true,
                  showSearch: true,
                  popupMatchSelectWidth: false,
                  labelInValue: false,
                  autoClearSearchValue: true,
                  multiple: true,
                  treeNodeFilterProp: 'title',
                }}
              />


              <ProFormTreeSelect
                width={"lg"}
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                label={"行業"}
                request={async () => {
                  return [
                    {
                      title: "管理職業",
                      value: "管理職業"
                    },
                    {
                      title: "農林漁牧業",
                      value: "農林漁牧業"
                    },
                    {
                      title: "建造業",
                      value: "建造業"
                    },
                    {
                      title: "製造業",
                      value: "製造業"
                    },
                    {
                      title: "零售運輸業",
                      value: "零售運輸業"
                    },

                    {
                      title: "餐飲業",
                      value: "餐飲業"
                    },
                    {
                      title: "金融保險業",
                      value: "金融保險業"
                    },

                  ]
                }}
                name="work"
                placeholder="行業"
                allowClear
                // width={150}
                fieldProps={{
                  showArrow: false,
                  filterTreeNode: true,
                  showSearch: true,
                  popupMatchSelectWidth: false,
                  labelInValue: false,
                  autoClearSearchValue: true,
                  multiple: false,
                  treeNodeFilterProp: 'title',
                  // fieldNames: {
                  //     label: 'title',
                  // },
                }}
              />

              <ProFormSelect
                name="personality"
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                label="個性"
                placeholder={"個性"}
                fieldProps={{
                  // onChange: (key) => {
                  //
                  // }

                }}
                options={[
                  {
                    label: '感性型',
                    value: '感性型',
                  },
                  {
                    label: '理性型',
                    value: '理性型',
                  },
                  {
                    label: '衝動型',
                    value: '衝動型',
                  },
                  {
                    label: '謹慎型',
                    value: '謹慎型',
                  },
                  {
                    label: '社交型',
                    value: '社交型',
                  },
                  {
                    label: '忠誠型',
                    value: '忠誠型',
                  },
                  {
                    label: '環保型',
                    value: '環保型',
                  },
                ]}
              />


              <ProFormTreeSelect
                width={"lg"}
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                label={"客戶興趣"}

                request={async () => {
                  return [
                    {
                      title: "體育",
                      value: "體育"
                    },
                    {
                      title: "藝術文化",
                      value: "藝術文化"
                    },
                    {
                      title: "旅遊",
                      value: "旅遊"
                    },
                    {
                      title: "飲食",
                      value: "飲食"
                    },
                    {
                      title: "科技創新",
                      value: "科技創新"
                    },
                    {
                      title: "時尚美容",
                      value: "時尚美容"
                    },
                    {
                      title: "戶外冒險",
                      value: "戶外冒險"
                    },

                    {
                      title: "環保",
                      value: "環保"
                    },
                    {
                      title: "寵物",
                      value: "寵物"
                    },
                    {
                      title: "學習",
                      value: "學習"
                    },
                    {
                      title: "運動",
                      value: "運動"
                    },
                    {
                      title: "社會公益",
                      value: "社會公益"
                    },
                    {
                      title: "家庭親子",
                      value: "家庭親子"
                    },

                  ]
                }}
                name="interest"
                placeholder="客戶興趣"
                allowClear
                // width={150}
                fieldProps={{
                  showArrow: false,
                  filterTreeNode: true,
                  showSearch: true,
                  popupMatchSelectWidth: false,
                  labelInValue: false,
                  autoClearSearchValue: true,
                  multiple: true,
                  treeNodeFilterProp: 'title',
                  // fieldNames: {
                  //     label: 'title',
                  // },
                }}
              />


              <ProFormTreeSelect
                width={"lg"}
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                label={"社交媒體"}
                request={async () => {
                  return [
                    {
                      title: "Line",
                      value: "Line"
                    },
                    {
                      title: "FaceBook",
                      value: "FaceBook"
                    },
                    {
                      title: "IG",
                      value: "IG",
                    },
                    {
                      title: "Dcard",
                      value: "Dcard"
                    },
                    {
                      title: "Telegram",
                      value: "Telegram"
                    },
                    {
                      title: "小紅書",
                      value: "小紅書"
                    },

                  ]
                }}
                name="social"
                placeholder="社交媒體"
                allowClear
                // width={150}
                fieldProps={{
                  showArrow: false,
                  filterTreeNode: true,
                  showSearch: true,
                  popupMatchSelectWidth: false,
                  labelInValue: false,
                  autoClearSearchValue: true,
                  multiple: true,
                  treeNodeFilterProp: 'title',
                }}
              />


              <ProFormTreeSelect
                width={"lg"}
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}

                label={"信仰宗教"}
                request={async () => {
                  return [
                    {
                      title: "佛教",
                      value: "佛教"
                    },
                    {
                      title: "道教",
                      value: "道教",
                    },
                    {
                      title: "基督教",
                      value: "基督教"
                    },
                    {
                      title: "伊斯蘭教",
                      value: "伊斯蘭教"
                    },
                    {
                      title: "民間信仰",
                      value: "民間信仰"
                    },


                  ]
                }}
                name="religion"
                placeholder="信仰宗教"
                allowClear
                // width={150}
                fieldProps={{
                  showArrow: false,
                  filterTreeNode: true,
                  showSearch: true,
                  popupMatchSelectWidth: false,
                  labelInValue: false,
                  autoClearSearchValue: true,
                  multiple: true,
                  treeNodeFilterProp: 'title',
                }}
              />

              <ProFormTreeSelect
                width={"lg"}
                label={"溝通偏好"}
                request={async () => {
                  return [
                    {
                      title: "喝酒",
                      value: "喝酒"
                    },
                    {
                      title: "泡茶",
                      value: "泡茶",
                    },
                    {
                      title: "下棋",
                      value: "下棋",
                    },
                    {
                      title: "玩牌",
                      value: "玩牌",
                    },


                  ]
                }}
                name="talk_interest"
                placeholder="溝通偏好"
                allowClear
                // width={150}
                fieldProps={{
                  showArrow: false,
                  filterTreeNode: true,
                  showSearch: true,
                  popupMatchSelectWidth: false,
                  labelInValue: false,
                  autoClearSearchValue: true,
                  multiple: true,
                  treeNodeFilterProp: 'title',
                }}
              />


              <ProFormSlider
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                initialValue={0}
                name="power"
                label="客戶潛力 (1-10，越高越佳)"
                min={1}
                max={10}
                fieldProps={{}}

              />

              <ProFormSlider
                colProps={{xs: 24, sm: 12, md: 12, lg: 12, xl: 8}}
                initialValue={0}
                name="emotion"
                label="客戶情商 (1-10，越高越佳)"
                min={1}
                max={10}
                fieldProps={{}}

              />

            </ProFormGroup>


          </ProCard>


        </StepsForm.StepForm>

      </StepsForm>
    </div>

  )
}
export default UpdateCustomerDetail;



//UpdateCustomerDetail
