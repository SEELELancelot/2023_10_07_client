import {useEffect} from "react";
import {Button} from "antd";
import {axiosinsertUnhandleData} from "@/networkReuest/Myaxios";

const SaveUserModal=(props)=>{
    useEffect(()=>{
        // console.log(props.checkData);
    },)
    return(
        <div>
            <div style={{textAlign:'center'}}>
                <Button type={"primary"} onClick={async () => {
                    console.log(props.checkData);

                    let finalSendArray=[];
                    props.checkData.map((item,index)=>{
                       const {customer_id}=item;
                       const {id}=item.giftContent;
                       // console.log(customer_id,id);
                       finalSendArray.push([customer_id,id]);
                    });


                    console.log(finalSendArray);
                    const result=await axiosinsertUnhandleData({gift:finalSendArray});
                    const {success,message,addArray,notAddArray}=result.data;
                    console.log(success,message);
                    console.log("addArray",addArray);
                    console.log("notAddArray",notAddArray);

                }}>送出</Button>
            </div>
        </div>
    )
}
export default SaveUserModal;
