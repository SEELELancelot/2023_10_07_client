import jwt_decode from "jwt-decode";

const handleToken = () => {
  let myUser_type = -1;
  let token = localStorage.getItem("token");
  try {
    const decode_data = jwt_decode(token);
    const {user_type} = decode_data;
    // console.log(decode_data);
    myUser_type = user_type;
    // console.log(myUser_type); //如有改成0或1
  } catch (e) {
    console.log(e);
  }
  return myUser_type;
}

const GetmyUserData = () => {
  let myUserData = {};
  let token = localStorage.getItem("token");
  try {
    const decode_data = jwt_decode(token);
    myUserData = decode_data;
    // console.log(myUserData);
  } catch (e) {
    console.log(e);
  }
  return myUserData;
}
const deleteToken=()=>{
  localStorage.removeItem("token");
}

export {handleToken, GetmyUserData,deleteToken};
