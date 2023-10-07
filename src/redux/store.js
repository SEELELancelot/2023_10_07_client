import {GetmyUserData, handleToken} from "../utils/handleToken";


const initaltodayDate=new Date();
const today_month=String((initaltodayDate.getMonth()+1)).padStart(2,"0"); //"0-11" 要加1
const today_day=String(initaltodayDate.getDate()).padStart(2,"0");

const today=today_month+"/"+today_day;
console.log("inital",today);
const initial={
    myUser_type_redux:handleToken(),
    myUserData:GetmyUserData(),
    myNotifacationCustomerData:[],
    myselectGiftDataRecord:{
        "GiftData":[],
        "start_date":today,
        "end_date":today,
        "department":{label:"全部",value:""},

    }, //紀錄客戶查詢的資料
    selectGiftDataPage:{
        "nowPage":1,
        "defaultPageSize":10
    },
    selectGiftDataPageRowColor:{
        clickId:""
    }
}

const reducer=(state=initial,action)=>{
    state={...state};
    console.log(state);
    switch (action.type){
        case "change_myUser_type":
            console.log(action.changeData); //0 或1
            state.myUser_type_redux=action.changeData; //傳過來得 userType
            break;
        case "update_myUser_data":
            console.log("update");
            state.myUserData=GetmyUserData();
            // 重新取目前token的data
            break;
        case "delete_myUser_type":
            console.log("delete userType");
            state.myUser_type_redux=-1; //改為沒有權限 是-1
            state.myUserData={};
            localStorage.removeItem("token");
            break;

        case "updateGiftDataRecord":
            console.log("update store 送禮資料");
            console.log(action.data);
            state.myselectGiftDataRecord=action.data;  //改變gift紀錄資料
            break;
        case "updatePageData":
            console.log(action.data);
            state.selectGiftDataPage=action.data;
            break;
        case "updateCustomerColor":
            // console.log("更改顏色");
            console.log(action.data);
            state.selectGiftDataPageRowColor.clickId=action.data;
            break;
        default:
    }
    return state;
}
const store=legacy_createStore(reducer);
export default store;
