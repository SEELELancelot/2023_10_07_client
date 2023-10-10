import {Footer} from '@/components';
import type {RunTimeLayoutConfig} from '@umijs/max';
import {history} from '@umijs/max';
import {errorConfig} from './requestErrorConfig';
import React from 'react';
import {GetmyUserData, deleteToken} from './utils/handleToken';
import defaultSettings from '../config/defaultSettings';
import {Button} from "antd";

const loginPath = '/login';




export async function getInitialState(): Promise<{}> {
  const getUserData = GetmyUserData();

  // console.log(getUserData);
  // console.log(getUserData?.user_type);
  // history.push('/');  // 只要打開分頁 由首頁的狀態決定是否跳轉

  if (getUserData.user_type === "0") {
    history.push("/user");
  } else if (getUserData.user_type === "1") {
    history.push("/admin");
  } else {
    history.push("/login");
  }
  //初始沒有token 就跳轉
  // if (Object.keys(getUserData).length === 0) {
  //   console.log("沒有狀態data");
  //   history.replace(loginPath)
  // }
  return Promise.resolve({user: getUserData, settings: defaultSettings});
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({initialState, setInitialState}) => {
  const getUserData = GetmyUserData(); //當切換頁面時檢查token的value有無更新

  setInitialState((s) => ({
    ...s,
    user: getUserData,
  }));

  // console.log(initialState.user);

  if (Object.keys(initialState.user).length === 0) {
    console.log("沒有data");
    history.replace(loginPath)
  }


  return {
    actionsRender: () => [],

    headerContentRender: () => {
      console.log(initialState.user)
      const {employee_name, location_name} = initialState?.user;
      console.log(employee_name, location_name);
      return (
        <div style={{display: 'flex', justifyContent: 'end'}}>
          <span style={{marginRight: '20px'}}>{`${employee_name}`}</span>
          <Button style={{marginTop: '10px'}} type={"primary"} onClick={() => {
            //刪除 token 重新獲得狀態
            deleteToken();
            history.push(loginPath);
          }}>登出</Button>
        </div>

      )
    },
    // avatarProps: {
    //   // title: "設置",
    //   render: () => {
    //     return <div onClick={()=>{
    //     alert("123")}
    //     }>登出</div>;
    //   },
    // },
    // waterMarkProps: {
    // headerRender:()=>{
    //   return(
    //     <div>242424</div>
    //   )
    // },
    //   menuHeaderRender:()=>{
    //     return (
    //       <div>414</div>
    //     )
    // },
    //   content: initialState?.currentUser?.name,
    // },
    // onMenuHeaderClick: () => {
    //   // console.log("test");
    //   // history.push("/test");
    // },
    footerRender: () => <Footer/>,
    onPageChange: () => {
      console.log(location.pathname);

      // console.log(getUserData);

    },

    // menuHeaderRender:()=>undefined,
    // 自定义 403 页面
    unAccessible: <div>無權限</div>,


    ...initialState?.settings,

  };
};


export const request = {
  ...errorConfig,
};
