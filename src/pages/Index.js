import {useEffect} from "react";
import {history, Link} from '@umijs/max';
import {useModel} from "@/.umi/exports";

const Index = () => {
  const {initialState} = useModel('@@initialState');

  useEffect(() => {
    console.log(initialState);
    const {user_type} = initialState.user;
    console.log(user_type);
    if (user_type === "0") {

      history.push("/user");
    } else if (user_type === "1") {
      history.push("/admin");
    } else {
      history.push("/login");
    }

  }, [])
  return (
    <div></div>
  )
}
export default Index;
