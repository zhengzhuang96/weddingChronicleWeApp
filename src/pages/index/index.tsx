/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-12-09 16:37:46
 * @Description:
 */
import { View, Text, Image, ScrollView, Map } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import tracking from "@base/tracking-miniprogram";
import meLogo from "@/assets/me_logo.png";
import Banner1 from "@/assets/banner-1.png";
import ta from "@/assets/ta.png";
import wo from "@/assets/wo.png";
import hua01 from "@/assets/hua01.png";
import Banner2 from "@/assets/banner-2.png";
import Banner3 from "@/assets/banner-3.png";
import Banner4 from "@/assets/banner-4.png";
import "./index.less";

export default function Index() {
  return (
    <ScrollView className='index'>
      <View className='index-header'>
        <View className='header-left'>
          <View className='header-top' />
          <Text className='header-left-zh'>我们结婚啦</Text>
          <Text className='header-left-en'>We Are Married</Text>
        </View>
        <View>
          <Image src={meLogo} className='meLogo' />
        </View>
      </View>
      <View className='index-banner-1'>
        <Image src={Banner1} mode='widthFix'  className='index-banner-1-me' />
      </View>
      <View className='index-text-box'>
        <Text className='head-title'>亲爱的家人朋友，你好呀！</Text>
        <Text className='head-des'>收到这封邀请函的你们</Text>
        <Text className='head-des'>都是我们人生中最重要的部分</Text>
        <Text className='head-des'>在这特殊的一天</Text>
        <Text className='head-des'>希望有你的见证</Text>
        <Text className='head-des'>期待有你的参与</Text>
      </View>
      <View className='index-banner-2'>
        <View className='index-banner-box'>
          <Image src={ta} mode='widthFix'  className='index-banner-2-me' />
          <Text className='index-banner-2-title'>杨柳</Text>
        </View>
        <View className='index-banner-box'>
          <Image src={wo} mode='widthFix'  className='index-banner-2-me' />
          <Text className='index-banner-2-title'>郑壮</Text>
        </View>
      </View>
      <View className='index-text-box'>
        <Text className='head-des-2'>诚邀你和家人参加我们的婚礼</Text>
        <Text className='head-des-2'>见证我们的幸福</Text>
      </View>
      <View className='index-text-box'>
        <Text className='head-des-title'>【婚宴·城市】</Text>
        <Text className='head-des-2'>2023年12月30号 中午12:00</Text>
        <Text className='head-des-2'>农历十月十六 星期六</Text>
      </View>
      <View className='index-text-box'>
        <Text className='head-des-title'>/婚宴地址/Address</Text>
        <Text className='head-des-2'>2023年12月30号 中午12:00</Text>
        <Text className='head-des-2'>万家福大酒店</Text>
        <Map latitude={35.1916661} longitude={116.720093} maxScale={20}
          markers={[
            {
              iconPath: '',
              title: '婚礼地方',
              latitude: 35.1916661,
              longitude: 116.720093,
            }
          ]}
          className='map'
        />
      </View>
      <View className='index-showtime'>
        <Image src={hua01} mode='widthFix'  className='index-showtime-head' />
        <Text className='head-des-title'>ShowTime</Text>
        <Image src={Banner2} mode='widthFix'  className='index-showtime-img' />
        <Image src={Banner3} mode='widthFix'  className='index-showtime-img' />
        <Image src={Banner4} mode='widthFix'  className='index-showtime-img' />
      </View>
    </ScrollView>
  );
}
