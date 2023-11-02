/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-11-02 22:17:02
 * @Description:
 */
import { View, Text, Image, ScrollView } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <ScrollView className="index">
      <View className="index-banner">
        <Text>这里放一张图片</Text>
      </View>
      <View className="index-banner">
        <Text>这里放一张图片</Text>
      </View>
      <View className="index-text-box">
        <Text className="head-title">亲爱的家人朋友，你好呀！</Text>
        <Text className="head-des">收到这封邀请函的你们</Text>
        <Text className="head-des">都是我们人生中最重要的部分</Text>
        <Text className="head-des">在这特殊的一天</Text>
        <Text className="head-des">希望有你的见证</Text>
        <Text className="head-des">期待有你的参与</Text>
      </View>
      <View className="index-banner">
        <Text>这里放一张图片</Text>
      </View>
      <View className="index-text-box">
        <Text className="head-des">谢邀你和家人参加我们的婚礼</Text>
        <Text className="head-des">见证我们的幸福</Text>
      </View>
    </ScrollView>
  );
}
