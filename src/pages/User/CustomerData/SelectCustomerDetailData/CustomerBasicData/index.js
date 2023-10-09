import {ProCard} from "@ant-design/pro-components";
import React, {useEffect, useState} from "react";
import {Col, Row} from "antd";
import {axiosGetCustomerData, getInterViewTotalCount} from "@/networkReuest/Myaxios";
import {useParams} from "@/.umi/exports";
import dayjs from "dayjs";

const CustomerBasicData = () => {
  const params = useParams();
  const [customerData,setCustomerData]=useState([]);
  const [InterViewCount,setInterViewCount]=useState([]);

  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async ()=>{
    const customer_id=params.id;
    const result=await axiosGetCustomerData({customer_id});
    const InterViewCountResult=await getInterViewTotalCount({customer_id});
    const {success,message}=result.data;
    console.log(success,message);
    if(success===1){
      setCustomerData(message);
      // console.log(InterViewCountResult.data.success,InterViewCountResult.data.message);
      setInterViewCount(InterViewCountResult.data.message)
    }

  }
  return (
    <div>
      <ProCard>
        <Row style={{marginBottom:'10px'}}>
          {
            customerData.map((value, index) => {
              console.log(value);
              if((value?.customer_tel?.replace(/\s*/g,"")==="")){
                value.customer_tel=null;
              }
              if((value?.customer_cel?.replace(/\s*/g,"")==="")){
                value.customer_cel=null;
              }
              return(
                <>
                  <Col md={12} xs={24}>
                    <Col>{value.customer_type==="0"?"身分證":"統一編號"}</Col>
                    <Col style={{marginLeft:'5px'}}>{value.customer_id}</Col>
                  </Col>
                  <Col md={12}  xs={24}>
                    <Col>{value.customer_type==="0"?"客戶名稱":"客戶名稱"}</Col>
                    <Col style={{marginLeft:'5px'}}>{value.customer_name}</Col>

                  </Col>
                  {

                    value.customer_tel!==null?
                      <Col md={12}  xs={24}>
                        <Col>電話</Col>
                        <Col style={{marginLeft:'5px'}}>{value.customer_tel}</Col>
                      </Col>:
                      <></>
                  }

                  {
                    value.customer_cel!==null?
                      <Col md={12}  xs={24}>
                        <Col>手機</Col>
                        <Col style={{marginLeft:'5px'}}>{value.customer_cel}</Col>
                      </Col>:
                      <></>
                  }


                  {
                    value.customer_birthday!==null?
                      <Col md={12}  xs={24}>
                        <Col>生日</Col>
                        <Col style={{marginLeft:'5px'}}>{dayjs(value.customer_birthday).format("YYYY-MM-DD")}</Col>
                      </Col>: <></>
                  }

                  {
                    value.customer_address!==null?
                      <Col md={12}  xs={24}>
                        <Col>地址</Col>
                        <Col style={{marginLeft:'5px'}}>{value.customer_address}</Col>
                      </Col>: <></>
                  }

                  {
                    value.customer_address!==null?
                      <Col md={12}  xs={24}>
                        <Col>訪談次數</Col>
                        <Col style={{marginLeft:'5px'}}>{InterViewCount[0].interViewCount}</Col>
                      </Col>: <></>
                  }

                </>
              )
            })
          }



        </Row>




      </ProCard>
    </div>
  )
}
export default CustomerBasicData;
