/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-12-11 21:53:53
 * @Description:
 */
import { PropsWithChildren } from "react";
import { useLaunch, showShareMenu } from "@tarojs/taro";
import "./app.less";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    showShareMenu({
      withShareTicket: true,
      // @ts-ignore
      menus: ["shareAppMessage", "shareTimeline"],
      showShareItems: ["shareAppMessage", "shareTimeline"],
    });
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
