import {GetmyUserData, handleToken} from "../utils/handleToken";

export default {
  namespace: 'products',
  state: {
    myUser_type_redux: handleToken(),
    myUserData: GetmyUserData(),

  },
  reducers: {
    change_myUser_type(state, {payload: id}) {
      console.log(state.changeData); //0 或1
      // state.myUser_type_redux = action.changeData; //傳過來得 userType
      return state;
    },
    update_myUser_data(state, {payload: id}) {
      console.log("update");
      state.myUserData=GetmyUserData();
      return state;
    },
    delete_myUser_type(state, {payload: id}) {
      console.log("delete userType");
      state.myUser_type_redux=-1; //改為沒有權限 是-1
      state.myUserData={};
      localStorage.removeItem("token");
      return state;
    },
  },

};
