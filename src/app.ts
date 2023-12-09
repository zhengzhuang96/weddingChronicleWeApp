/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-11-08 19:04:53
 * @Description:
 */
import { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";
import tracking from "@base/tracking-miniprogram";
import "./app.less";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    console.log("App launched.");
    // 初始化埋点
    tracking.init({
      app_id: "wx_123123",
      log: true,
    });
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
