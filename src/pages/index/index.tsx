/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-11-01 23:39:33
 * @Description:
 */
import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="index">
      <Text>Hello world!</Text>
      <Text>郑先生!</Text>
      <Text>郑先生!</Text>
      <Text>郑先生!</Text>
    </View>
  );
}
