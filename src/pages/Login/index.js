import React, {useEffect, useState} from 'react';
import {useModel} from "@umijs/max";

import {Button, Form, Input} from "antd";
import './Login.css'
import {axiosLogin} from "@/networkReuest/Myaxios";
import jwt_decode from "jwt-decode";
import { flushSync } from 'react-dom';
import {useNavigate} from "@/.umi/exports";


const Login = () => {
  const {initialState, loading, refresh, setInitialState} = useModel('@@initialState');

  const navigate = useNavigate();
  const [success, setSuccess] = useState(1);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    console.log(initialState);
  }, []);

  const onFinish = async (values) => {
    const {account, password} = values;


    const result = await axiosLogin(account, password);
    const {success, message} = result.data;
    console.log(success);
    if (success === -1) {
      setSuccess(success);
      setErrorMessage(message);
    } else {
      //    成功 獲取token 設定token
      const {token} = result.data;
      console.log("登入成功");
      console.log(token);
      await localStorage.setItem("token", token);
      const decode_data = jwt_decode(token);
      console.log(decode_data);
      const {user_type} = decode_data;
      console.log(user_type); //要更改的 userType


      flushSync(() => {

        setInitialState((s) => ({
          ...s,
          user: decode_data,
        }));
      }) //https://github.com/ant-design/ant-design-pro/issues/10222 解決第二次登入




      if (user_type === "0") {
        console.log("跳轉 一般使用者");
        navigate("/user");
      } else if (user_type === "1") {
        console.log("跳轉 高級使用者");
        navigate("/admin");

      }
    }

  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <div className={"MyPage"}>

      <div className={"wrap_content"}>


        <div className={"LoginContent"}>
          <h1 style={{marginBottom: '30px', textAlign: 'center'}}>客戶關係管理系統</h1>
          {/*<h2 className={"login_text"}>登入</h2>*/}
          {/*如登入有錯誤訊息*/}
          {success !== 1 &&
            <div style={{textAlign: 'center', marginBottom: '10px'}}><span style={{color: "red"}}>{errorMessage}</span>
            </div>}
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}

            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="帳號"
              wrapperCol={{
                offset: 2
              }}
              name="account"
              rules={[
                {
                  required: true,
                  message: '請輸入你的帳號',
                },
              ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="密碼"
              name="password"
              wrapperCol={{
                offset: 2
              }}
              rules={[
                {
                  required: true,
                  message: '請輸入你的密碼',
                },
              ]}
            >
              <Input.Password/>
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 8,

              }}
            >
              <Button type="primary" htmlType="submit" className={"submit_button"}>
                登入
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>


    </div>
  );
};

export default (Login);
