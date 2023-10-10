import SendMailProgress from "@/pages/User/GiftData/SendGiftFlow/SendProgress/SendMailProgress";
import SendMyselfProgress from "@/pages/User/GiftData/SendGiftFlow/SendProgress/SendMyselfProgress";
import SendProxyProgress from "@/pages/User/GiftData/SendGiftFlow/SendProgress/SendProxyProgress";
import {Tabs} from "antd";


const SendProgress=()=>{
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: '郵寄',
      children: <SendMailProgress/>,
    },
    {
      key: '2',
      label: '親送',
      children: <SendMyselfProgress/>,
    },
    {
      key: '3',
      label: '代為轉送',
      children: <SendProxyProgress/>,
    },

  ];
  return(
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}  destroyInactiveTabPane={true} />

    </div>
  )
}
export default SendProgress;
