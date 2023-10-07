import {Tabs} from "antd";
import SelectCustomerData from "@/pages/User/CustomerData/SelectCustomerDataTabs/SelectCustomerData";
import SelectSaveCustomerData from "@/pages/User/CustomerData/SelectCustomerDataTabs/SelectSaveCustomerData";


const Index=()=>{
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: '存款查詢',
      children: <SelectSaveCustomerData/>,
    },
    {
      key: '2',
      label: '貸款查詢',
      children: <SelectCustomerData/>,
    },
  ];
  return(
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}  destroyInactiveTabPane={false}  />
    </div>
  )
}
export default Index;
