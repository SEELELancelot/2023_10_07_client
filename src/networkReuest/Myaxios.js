import axios from "axios";

const mybaseUrl = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: mybaseUrl,

});
// Request interceptors for API calls
axiosInstance.interceptors.request.use(
  config => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const axiosLogin = async (account, password) => {

  const result = await axiosInstance.post("login", {account, password});
  return result;
}
const axiosfindLocation = async () => {
  const result = await axiosInstance.get("location");
  return result;
}

const axiosInsertUserData = async (json) => {
  console.log(json)
  const result = await axiosInstance.post("users", json);
  return result;
}
const get_default_users = async () => {
  const result = await axiosInstance.get("users/admin_get_default_users");
  return result;
}

const axiosupdateUserByAccount = async (json) => {
  console.log(json);
  const result = await axiosInstance.patch("users/updateUserByAccount", json);
  return result;
}
const axiosInsertcustomer = async (json) => {
  console.log(json);
  const result = await axiosInstance.post("customer", json);
  return result;
}
const axiosSelectcustomer = async () => {
  const result = await axiosInstance.get("customer");
  return result;
}
const axiosUpdatecustomer = async (updateJson) => {
  console.log(updateJson);
  const result = await axiosInstance.patch("customer", updateJson);
  return result;
}
const axiosDeletecustomer = async (deleteJson) => {
  console.log(deleteJson);
  const result = await axiosInstance.delete("customer", {
    data: deleteJson
  });
  return result;
}


const axiosSelectAllCustomer = async () => {
  const result = await axiosInstance.get("customer/allCustomer");
  return result;
}
const axiosInsertInterview = async (insertJson) => {
  console.log(insertJson);
  const result = await axiosInstance.post("interview", insertJson);
  return result;
}
const axiosgetallInterViewData = async () => {
  const result = await axiosInstance.get("interview/getallInterViewData");
  return result;
}

const axiosgetOneInterViewData = async (InterViewId) => {
  console.log(InterViewId);
  const result = await axiosInstance.get("interview", {
    params: InterViewId
  });
  return result;
}

const axiosupdateInterViewData = async (updateJson) => {
  // console.log(updateJson);
  const result = await axiosInstance.post("interview/updateInterViewData", updateJson);
  return result;
}
const axiosAllCustomerData = async () => {
  const result = await axiosInstance.get("customer/allCustomerData");
  return result;
}
const axiosgetUserData_by_id = async (id) => {
  // console.log(id);
  const result = await axiosInstance.get("users/getUserData_by_id", {
    params: {customerId: id}
  });
  return result;
}

const axiosgetCustomerLenderAccount_by_id = async (id) => {
  // console.log(id);
  const result = await axiosInstance.get("customer/customer_lender_account", {
    params: {customerId: id}
  });
  return result;
}

const axiosgetLenderData_by_account = async (customer_account) => {
  // console.log(id);
  const result = await axiosInstance.get("lender", {
    params: {account: customer_account}
  });
  return result;
}

const axiosgetSaveData_by_account = async (id) => {
  // console.log(id);
  const result = await axiosInstance.get("customer/customer_save_account", {
    params: {customerId: id}
  });
  return result;
}
const axiosInsertGift = async (formdata) => {
  const result = await axiosInstance.post("gift/insertGift", formdata)
  return result;
}

const axiosSelectGiftList = async () => {
  const result = await axiosInstance.get("gift/selectList");
  return result;
}
const axiosgetGiftImage = async (giftImage) => {
  const result = await axiosInstance.get(giftImage);
  return result;
}
const axiosgetSendGiftCustomer = async (sendValue) => {
  const result = await axiosInstance.get("gift/selectCustomer", {
    params: sendValue
  });
  return result;
}
const axiosInsertManyGiftData = async (sendobj) => {
  console.log(sendobj);
  const result = await axiosInstance.post("gift/newInsertGift", sendobj);
  return result;
}
const axiosSelectCustomerOrder = async (sendValue) => {
  console.log(sendValue);
  const result = await axiosInstance.get("gift/selectCustomerOrder", {
    params: sendValue
  });
  return result;
}
const axiosDeleteGiftOrderData = async (deleteObj) => {
  console.log(deleteObj);
  const result = await axiosInstance.post("gift/deleteMultiGiftOrderData", deleteObj);
  return result;
}

const axiosGetDefaultGiftData = async () => {
  const result = await axiosInstance.get("gift/getdefaultGiftData");
  return result;
}

const axiosGetDefaultBirthdayData = async () => {
  const result = await axiosInstance.get("gift/getDefaultBirthdayData");
  return result;
}
const axiosInsertMultiBirthdayData = async (send_array) => {
  const result = await axiosInstance.post("gift/sendBirthdayGiftData", send_array);
  return result;
}
const axiosinsertUnhandleData = async (finalSendObj) => {
  const result = await axiosInstance.post("gift/insertUnhandleData", finalSendObj);
  return result;
}
const axiosGetUnhandleData = async () => {
  const result = await axiosInstance.get("gift/getUnhandleData");
  return result;
}

const axiosupdateMultiState = async (updateObj) => {
  const result = await axiosInstance.post("gift/updatMultiBirthdayGiftState", updateObj);
  return result;
}
const axiosGetSendMailData = async () => {
  const result = await axiosInstance.get("gift/getWillSendMail");
  return result;
}
const axiosUpdateMailToSend = async (finalSendData) => {
  const result = await axiosInstance.patch("gift/updatMultiBirthdayGiftTOSEND", finalSendData);
  return result;
}
const axiosGetWillSendbyMyself = async () => {
  const result = await axiosInstance.get("gift/getWillSendbyMyself");
  return result;
}
const axiosSendEmailMyself = async (finalSendHtml) => {
  const result = await axiosInstance.post("mail/sendMailMyself", finalSendHtml);
  return result;
}
const axiosGetWillSendbyProxy = async () => {
  const result = await axiosInstance.get("gift/getWillSendbyProxy");
  return result;
}

const axiosInsertInterView = async (finalSendData) => {
  const result = await axiosInstance.post("interview/newMultiInterviewData", finalSendData);
  return result;
}
const axiosgetSearchInterViewData = async (finalSendData) => {
  const result = await axiosInstance.post("interview/getSearchInterViewData", finalSendData);
  return result;
}
const axiosFetchOneInterViewData = async (finalSendData) => {
  const result = await axiosInstance.get("interview/getOneInterViewData", {
    params: finalSendData
  });
  return result;
}
const axiosUpdateOneInterViewData = async (finalSendData) => {
  const result = await axiosInstance.post("interview/updateOneInterViewData", finalSendData);
  return result;
}
const axiosGetInterViewMethodRecord = async (finalSendData) => {
  const result = await axiosInstance.post("interview/getInterViewMethodRecord", finalSendData);
  return result;
}
const axiosGetInterViewPurposeRecord = async (finalSendData) => {
  const result = await axiosInstance.post("interview/getInterViewPurposeRecord", finalSendData);
  return result;
}
const axiosnewInsertUserData = async (finalSendData) => {
  const result = await axiosInstance.post("users/insertUserData", finalSendData);
  return result;
}
const axiosGetUpdateUserDataMyself = async (finalSendDta) => {
  const result = await axiosInstance.post("users/getUpdateUserDataMyself", finalSendDta);
  return result;
}

const newGetUserData_by_Myself_create = async (customerId) => {
  const result = await axiosInstance.get("users/newGetUserData_by_Myself_create", {
    params: {
      customerId: customerId
    }
  });
  return result;
}

const axiosUpdateBasicCustomerData = async (updata) => {
  const result = await axiosInstance.patch("users/updateCustomerBasicData", updata);
  return result;
}
const axiosUpdateCustomerAlldata = async (updata) => {
  const result = await axiosInstance.patch("users/updateCustomerAlldata", updata);
  return result;
}
const axiosGetLenderData = async (data) => {
  const result = await axiosInstance.post("users/getLenderRecord", data);
  return result;
}
const axiosGetSaveData = async (data) => {
  const result = await axiosInstance.post("users/selectSaveRecord", data);
  return result;
}
const axiosGetCurrentDetail = async (data) => {
  console.log(data);
  const result = await axiosInstance.post("users/getCurrentDetail", data);
  return result;
}
const axiosGetFixDetail = async (data) => {
  // console.log(data);
  const result = await axiosInstance.post("users/getFixDetail", data);
  return result;
}
const axiosGetCheckDetail = async (data) => {
  const result = await axiosInstance.post("users/getCheckDetail", data);
  return result;
}
const axiosGetCustomerData = async (data) => {
  const result = await axiosInstance.post("users/getCustomerData", data);
  return result;
}
const axiosGetLenderRecordDetail = async (data) => {
  const result = await axiosInstance.post("users/getLenderRecordDetail", data);
  return result;
}
const getInterViewTotalCount = async (data) => {
  const result = await axiosInstance.post("users/getInterViewTotalCount", data);
  return result;
}
const getInterViewDetailData = async (data) => {
  const result = await axiosInstance.post("users/getInterViewDetailData", data);
  return result;
}
const getSendProgressMail = async () => {
  const result = await axiosInstance.post("gift/getSendProgressMail");
  return result;
}

const getSendProgressMyself=async ()=>{
  const result = await axiosInstance.post("gift/getSendProgressMyself");
  return result;
}

export {
  axiosLogin,
  axiosfindLocation,
  axiosInsertUserData,
  get_default_users,
  axiosupdateUserByAccount,
  axiosInsertcustomer,
  axiosSelectcustomer,
  axiosUpdatecustomer,
  axiosDeletecustomer,
  axiosSelectAllCustomer,
  axiosInsertInterview,
  axiosgetallInterViewData,
  axiosgetOneInterViewData,
  axiosupdateInterViewData,
  axiosAllCustomerData,
  axiosgetUserData_by_id,
  axiosgetCustomerLenderAccount_by_id,
  axiosgetLenderData_by_account,
  axiosgetSaveData_by_account,
  axiosInsertGift,
  axiosSelectGiftList,
  axiosgetGiftImage,
  axiosgetSendGiftCustomer,
  axiosInsertManyGiftData,
  axiosSelectCustomerOrder,
  axiosDeleteGiftOrderData,
  axiosGetDefaultGiftData,
  axiosGetDefaultBirthdayData,
  axiosInsertMultiBirthdayData,
  axiosinsertUnhandleData,
  axiosGetUnhandleData,
  axiosupdateMultiState,
  axiosGetSendMailData,
  axiosUpdateMailToSend,
  axiosGetWillSendbyMyself,
  axiosSendEmailMyself,
  axiosGetWillSendbyProxy,
  axiosInsertInterView,
  axiosgetSearchInterViewData,
  axiosFetchOneInterViewData,
  axiosUpdateOneInterViewData,
  axiosGetInterViewMethodRecord,
  axiosGetInterViewPurposeRecord,
  axiosnewInsertUserData,
  axiosGetUpdateUserDataMyself,
  newGetUserData_by_Myself_create,
  axiosUpdateBasicCustomerData,
  axiosUpdateCustomerAlldata,
  axiosGetLenderData,
  axiosGetSaveData,
  axiosGetCurrentDetail,
  axiosGetFixDetail,
  axiosGetCheckDetail,
  axiosGetCustomerData,
  axiosGetLenderRecordDetail,
  getInterViewTotalCount,
  getInterViewDetailData,
  getSendProgressMail,
  getSendProgressMyself,
  mybaseUrl
}
