import MailSend from "@/pages/User/GiftData/SendGiftFlow/AlreadySendGift/mailSend";
import SendMyself from "@/pages/User/GiftData/SendGiftFlow/AlreadySendGift/sendMyself";
import ProxySend from "@/pages/User/GiftData/SendGiftFlow/AlreadySendGift/ProxySend";
import {Tabs} from "antd";

const AlreadySendGift=()=>{

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: '郵寄',
      children:<MailSend/>
    },
    {
      key: '2',
      label: '親送',
      children:<SendMyself/>

    },
    {
      key: '3',
      label: '代為轉送',
      children:<ProxySend/>
    },
  ];
  return(
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}  destroyInactiveTabPane={true} />
    </div>
  )
}
export default AlreadySendGift;
