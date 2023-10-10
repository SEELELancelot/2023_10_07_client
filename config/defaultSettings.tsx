import { ProLayoutProps } from '@ant-design/pro-components';
import Logo from '../public/assets/Logo.png';
/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
} = {
  navTheme: 'light',
  // 拂晓蓝
  colorPrimary: '#0068cc',
  menu:{
    locale:false,

  },

  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: false,
  // colorWeak: false,
  title: '客戶關係管理系統',
  onMenuHeaderClick:()=>{
    return null;
  },
  logo:()=>{
    return <img src={require("../public/logo.jpg")} width={50}  alt=""/>
  },
  pwa: true,

  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    header:{

    },
    sider:{
      // colorTextMenu:"grey",
      colorTextMenuTitle:'black',
      colorBgMenuItemHover:'#dbe1ef',
      colorBgMenuItemSelected:'#dbe1ef'
    }
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
