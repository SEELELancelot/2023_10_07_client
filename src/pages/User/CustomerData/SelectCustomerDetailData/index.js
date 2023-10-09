import {Tabs} from "antd";
import CurrentDetailSave from "@/pages/User/CustomerData/SelectCustomerDetailData/CurrentDetailSave";
import CustomerBasicData from "@/pages/User/CustomerData/SelectCustomerDetailData/CustomerBasicData";
import FixDetailSave from "@/pages/User/CustomerData/SelectCustomerDetailData/FixDetailSave";
import CheckDetailSave from "@/pages/User/CustomerData/SelectCustomerDetailData/CheckDetailSave";
import LenderDetailData from "@/pages/User/CustomerData/SelectCustomerDetailData/LenderDetailData";
import InterViewDetailRecord from "@/pages/User/CustomerData/SelectCustomerDetailData/InterViewDetailRecord";

const SelectCustomerDetailData=()=>{

  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: '基本資料',
      children: <CustomerBasicData/>
    },
    {
      key: '2',
      label: '活期存款',
      children: <CurrentDetailSave/>
    },
    {
      key: '3',
      label: '定期存款',
      children: <FixDetailSave/>
    },
    {
      key: '4',
      label: '支票存款',
      children: <CheckDetailSave/>
    },
    {
      key: '5',
      label: '放款',
      children: <LenderDetailData/>
    },
    {
      key: '6',
      label: '訪談紀錄',
      children: <InterViewDetailRecord/>
    },

  ];

  return(
    <Tabs defaultActiveKey="1" items={items} onChange={onChange}  destroyInactiveTabPane={true}  />

  )
}
export default SelectCustomerDetailData;
