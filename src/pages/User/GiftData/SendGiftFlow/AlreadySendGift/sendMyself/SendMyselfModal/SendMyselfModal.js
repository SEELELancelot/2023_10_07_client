import {Button} from "antd";
import {axiosUpdateMailToSend} from "@/networkReuest/Myaxios";

const SendMyselfModal=(props)=>{
    return(
        <div>
            {/*<p>已備妥生日賀卡</p>*/}
            <div style={{textAlign:'center'}}>
                <Button type={"primary"} onClick={async () => {
                  let sendData = props.checkData;
                  let parseSendData = [];
                  // console.log(sendData);
                  for (let i = 0; i < sendData.length; i++) {
                    let tempArray = [];
                    tempArray.push(sendData[i].birthday_gift_state_id);
                    parseSendData.push(tempArray);
                  }
                  const finalSendData = {"updateGift": parseSendData};
                  console.log(finalSendData);

                  const result = await axiosUpdateMailToSend(finalSendData);
                  const {success, message} = result.data;
                  console.log(success, message);
                  if (success === 1) {
                    console.log("更新成功");
                    props.fetchData(); //重新獲取資料
                    props.setCheckData([]); //清空選中資料
                    props.setmyselfModal(false);
                  }

                }}>送禮</Button>
            </div>
        </div>
    )
}
export default SendMyselfModal;
