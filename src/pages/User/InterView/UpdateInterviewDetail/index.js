import {
  ProCard,
  ProForm, ProFormDateTimePicker,
  ProFormGroup,
  ProFormRadio,
  ProFormSelect, ProFormText,
  ProFormTextArea
} from "@ant-design/pro-components";
import {Button, message} from "antd";
import {useEffect, useState} from "react";
import swal from "sweetalert2";
import {axiosFetchOneInterViewData, axiosUpdateOneInterViewData} from "@/networkReuest/Myaxios";
import {useNavigate, useParams} from "@/.umi/exports";
import dayjs from "dayjs";


const UpdateInterviewDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [formObj] = ProForm.useForm();
  const [getOneData, setGetOneData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    fetchOneData();
  }, []);

  const fetchOneData = async () => {
    const finalSendData = {Interview_id: params.id}
    const result = await axiosFetchOneInterViewData(finalSendData);
    console.log(result);
    const {success, message} = result.data;
    console.log(success, message);
    if (success === 1) {
      setGetOneData(message);
      setIsLoading(false);
    } else {
      // navigate("/user/selectInterview");

      // await swal.fire({
      //   title: '沒有權限',
      //   // text: 'Swal injected',
      //   icon: 'warning',
      // });

      //     跳轉沒有權限
    }
  }


  console.log(params.id)
  const formOnFinish = async (values) => {
    // console.log(values);
    const finalSendData={
      "Interview_method":values.review_method,
      "Interview_subject":values.review_subject,
      "Interview_content":values.review_content,
      "Interview_time":values.date,
      "interview_location":values.review_location,
      "Interview_id":params.id
    }
    // console.log(finalSendData);

    const result=await  axiosUpdateOneInterViewData(finalSendData);
    const {success,message}=result.data;
    console.log(success,message);

    if(success===1){
      //     重新獲取value 渲染
      //     fetchOneData();
      messageApi.open({
        type: 'success',
        content: '修改成功 ',
        duration:1
      });


    }

  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      {contextHolder}

      {
        isLoading?<></>:
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
                    修改
                  </Button>
                </div>

              ];
            }
          }}>

            {
              getOneData.map((item,index)=>{
                console.log(item)
                return(
                  <ProCard key={params.id} hoverable bordered style={{marginBottom: '10px'}}>

                    <ProFormGroup>
                      <ProFormSelect
                        width="md"
                        colProps={{md: 12, xl: 8}}
                        fieldProps={{
                          labelInValue: true,
                        }}
                        // mode={"multiple"}

                        // options={customerData}

                        name="receive_people"
                        label="受訪者"
                        initialValue={item.customer_name}
                        disabled={true}
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
                        initialValue={item.Interview_method}
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
                        label={"訪談主題"}
                        colProps={{md: 12, xl: 8}}
                        initialValue={item.Interview_subject}


                        width="md"
                        name="review_subject"
                        placeholder={"訪談主題"}

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
                        initialValue={item.Interview_content}

                        name="review_content"
                        placeholder={""}
                      />
                    </ProFormGroup>


                    <ProFormDateTimePicker
                      colProps={{md: 12, xl: 8}}
                      name="date"
                      initialValue={dayjs(item.Interview_time).format("YYYY-MM-DD HH:mm:ss")}
                      rules={[
                        {
                          required: true,
                          message: "未輸入",
                        },
                      ]}
                      label={"訪談時間"}
                    />

                    <ProFormText
                      label={"訪談地點"}
                      initialValue={item.interview_location}

                      width="xl"
                      name="review_location"
                      placeholder={"訪談地點"}
                    />


                  </ProCard>
                )
              })
            }


          </ProForm>
      }


    </div>
  )
}
export default UpdateInterviewDetail;

