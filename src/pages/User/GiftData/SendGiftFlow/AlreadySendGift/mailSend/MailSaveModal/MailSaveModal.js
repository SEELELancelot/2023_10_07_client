import {Button} from "antd";
import {axiosUpdateMailToSend} from "@/networkReuest/Myaxios";

const MailSaveModal = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <Button type={"primary"} onClick={async () => {
                let sendData = props.checkData;

                let parseSendData = [];

                for (let i = 0; i < sendData.length; i++) {
                    let tempArray = [];
                    tempArray.push(sendData[i].birthday_gift_state_id);
                    parseSendData.push(tempArray);
                }
                // console.log(sendData);
                // console.log(parseSendData);
                const finalSendData={"updateGift":parseSendData};
                console.log(finalSendData);
                const result=await axiosUpdateMailToSend(finalSendData);
                const {success,message}=result.data;
                console.log(success,message);
                if(success===1) {
                    console.log("更新成功");
                    props.fetchData(); //重新獲取資料
                    props.setcheckData([]); //清空選中資料
                    props.setmailSaveModal(false);
                }

            }}>確定郵寄</Button>
        </div>
    )
}

export default MailSaveModal;
