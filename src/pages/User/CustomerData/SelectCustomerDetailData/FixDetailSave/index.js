import {useEffect} from "react";
import {useParams} from "@/.umi/exports";
import {axiosGetFixDetail} from "@/networkReuest/Myaxios";

const FixDetailSave=()=>{
  const params = useParams();
  useEffect(()=>{
    fetchFixData();
  },[]);

  const fetchFixData=()=>{
    const customer_id=params.id;
    console.log(customer_id);
    const result=axiosGetFixDetail();
  }
  return(
    <div>Fix</div>
  )
}
export default FixDetailSave;
