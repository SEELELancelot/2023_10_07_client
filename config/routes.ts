export default [
  {
    path: '/login',
    name: "login",
    layout: false,
    component: './Login',
  },


  {
    path: "/user",
    name: "客戶資料",
    access: "isUser",
    layout: true,

    routes: [
      {
        path: '/user',
        redirect: '/user/insertAccount',
      },

      {
        path: "/user/insertAccount",

        name: "新增客戶資料",
        component: './User/CustomerData/InsertCustomerData/InsertCustomerData',
      },
      {
        path: "/user/UpdateCustomerData",
        name: "修改客戶資料",
        // exact:true,
        component: './User/CustomerData/UpdateCustomerData/UpdateCustomerData',
      },
      {
        path: "/user/selectCustomerData",
        name: "查詢客戶資料",
        component: "./User/CustomerData/SelectCustomerDataTabs/index"
      },
      {
        path: "/user/selectCustomerData/:id",
        component: "./User/CustomerData/SelectCustomerDetailData/index"
      },

      {
        path: "/user/UpdateCustomerData/:id",
        // exact:true,
        component: './User/CustomerData/UpdateCustomerDetail/index',
      },

    ],
  },



  {
    path: "/interview",
    name: "客戶訪談",
    access: "isUser",
    layout: true,
    routes: [
      {
        path: "/interview/inserInterview",
        name: "新增訪談資料",
        // exact:true,
        component: './User/InterView/InsertView/index',
      },
      {
        path: "/interview/updateInterview",
        name: "修改訪談資料",
        // exact:true,
        component: './User/InterView/UpdateInterView/index',
      },
      {
        path: "/interview/updateInterview/:id",
        // exact:true,
        component: './User/InterView/UpdateInterviewDetail/index',
      },
      {
        path: "/interview/outPutRecord",
        name: "統計",
        component: './User/InterView/OutputRecord/index',
      }
    ]
  },

  {
    path: "/gift",
    name: "客戶送禮",
    access: "isUser",
    layout: true,
    routes: [
      {
        path: "/gift/SelectGiftData",
        name: "查詢送禮",
        component: './User/GiftData/SelectGiftData/index',
      },
      {
        path: "/gift/SendGiftFlow",
        name: "送禮流程",
        component: './User/GiftData/SendGiftFlow/index',
      }
    ]
  },



  {
    path: "/admin",
    access: "isAdmin",
    name: "管理者",
    layout: true,

  },

  {
    path: '/',
    layout: false,
    component: "./Index"
    // redirect: '/login',
  },
  {
    path: '*',
    layout: false,
    component: './404',
  },
];
