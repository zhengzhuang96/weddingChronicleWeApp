/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-12-10 19:46:00
 * @Description:
 */
import { PropsWithChildren } from "react";
import { useLaunch, showShareMenu, getCurrentInstance } from "@tarojs/taro";
import Banner1 from "@/assets/banner-1.png";
import "./app.less";

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    showShareMenu({
      withShareTicket: true,
      // @ts-ignore
      menus: ["shareAppMessage", "shareTimeline"],
      showShareItems: ["shareAppMessage", "shareTimeline"],
    });

    const page = getCurrentInstance().page;
    if (page && !page.onShareAppMessage) {
      page.onShareAppMessage = () => {
        return {
          title: "我们结婚啦",
          path: `pages/index/index`,
          imageUrl: Banner1,
        };
      };
    }
  });

  // children 是将要会渲染的页面
  return children;
}

export default App;
