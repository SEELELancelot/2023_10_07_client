import {Tabs} from "antd";
import InterViewMethodRecord from "@/pages/User/InterView/OutputRecord/InterViewMethodRecord";
import InterViewPurpose from "@/pages/User/InterView/OutputRecord/InterViewPurpose";


const OutputRecord=()=>{

  const onChange = (key) => {
    // console.log(key);
  };
  const items = [
    {
      key: '1',
      label: '訪談方式',
      children:  <InterViewMethodRecord/>,
    },
    {
      key: '2',
      label: '訪談目的',
      children: <InterViewPurpose/>,
    },

  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}  destroyInactiveTabPane={false}  />

    </div>
  )
}
export default OutputRecord;


