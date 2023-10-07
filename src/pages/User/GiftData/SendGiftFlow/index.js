import {Tabs} from "antd";
import UnHandleGift from "@/pages/User/GiftData/SendGiftFlow/UnHandleGift";
import AlreadySendGift from "@/pages/User/GiftData/SendGiftFlow/AlreadySendGift";
import SendProgress from "@/pages/User/GiftData/SendGiftFlow/SendProgress";
import UnSendGift from "@/pages/User/GiftData/SendGiftFlow/UnSendGift";


const SendGiftFlow=()=>{

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: '準備送禮',
      children: <UnHandleGift/>,
    },
    {
      key: '2',
      label: '送禮方式',
      children: <AlreadySendGift/>,
    },
    {
      key: '3',
      label: '送禮中',
      children: <SendProgress/>,
    },
    {
      key: '4',
      label: '無法送禮',
      children: <UnSendGift/>,
    },
  ];

  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}  destroyInactiveTabPane={true}  />
    </div>
  )
}
export default SendGiftFlow;


