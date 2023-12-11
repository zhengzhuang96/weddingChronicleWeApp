/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-12-11 22:47:35
 * @Description:
 */
import { memo, useEffect, useMemo, useRef, useState } from "react";
import {
  showShareMenu,
  openLocation,
  previewImage,
  createVideoContext,
  useShareAppMessage,
  useShareTimeline,
} from "@tarojs/taro";
import { View, Text, Image, ScrollView, Map, Video } from "@tarojs/components";
import meLogo from "@/assets/me_logo.png";
import Banner1 from "@/assets/banner-1.png";
import ta from "@/assets/ta.png";
import wo from "@/assets/wo.png";
import hua01 from "@/assets/hua01.png";
import Banner5 from "@/assets/banner-5.png";
import Banner5Left from "@/assets/banner-5-left.png";
import Banner5Right from "@/assets/banner-5-right.png";
import Img01 from "@/assets/01.png";
import Symbolphone from "../../components/Symbolphone";
import "./index.less";

export default function Index() {
  let mp3Ref = useRef<any>();
  let mp4Ref = useRef<any>();
  const [showVideo, setShowVieo] = useState(false)

  // 定义分享数据
  const shareData = {
    title: "我们结婚啦",
    path: `pages/index/index`,
    imageUrl: Banner1,
  };

  // 定义发送给朋友的分享内容
  useShareAppMessage(() => {
    return shareData;
  });

  // 定义发送到朋友圈的分享内容
  useShareTimeline(() => {
    return shareData;
  });

  useEffect(() => {
    showShareMenu({
      withShareTicket: true,
      showShareItems: ["wechatFriends", "wechatMoment"],
    });

    mp4Ref.current = createVideoContext("video");

    const timestampNew = new Date().getTime();

    const timestampOld = new Date('2023/12/12 11:30:00').getTime();
    if (timestampNew > timestampOld) {
      setShowVieo(true)
    }
  }, []);

  const openImg = (url: any) => {
    previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url], // 需要预览的图片http链接列表
    });
  };

  const ViewPage = () => {
    return (
      <Symbolphone
        ref={mp3Ref}
        onChange={() => {
          // mp4Ref?.current && mp4Ref?.current?.onPlay();
          mp4Ref.current && mp4Ref.current.pause();
        }}
      />
    );
  };

  const MemoIndex = memo(ViewPage);

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
      <View className='index-text-box'>
        <Text className='head-title-two'>婚礼邀请函</Text>
        <Text className='head-title-two-en'>Welcome to our wedding</Text>
        <Text className='head-des'>人生本是一场旅行</Text>
        <Text className='head-des'>今日所邀</Text>
        <Text className='head-des'>皆是这场旅行中遇见的最重要的人</Text>
        <Text className='head-des'>亦如一年前我们从未涉足过彼此的生命</Text>
        <Text className='head-xi'>囍</Text>
      </View>
      <View className='index-banner-1' onClick={() => openImg(Banner1)}>
        <Image src={Banner1} mode='widthFix' className='index-banner-1-me' />
      </View>
      <View className='components-page'>
        {showVideo && <Video
          id='video'
          src='https://zaowu.bj.bcebos.com/resource/geren/%E6%AC%A2%E5%96%9C%E6%98%AF%E4%BD%A0.mp4'
          poster={Banner1}
          initialTime={0}
          controls
          autoplay={false}
          loop={false}
          muted={false}
          style={{
            width: '100%'
          }}
          onPlay={() => {
            if (mp3Ref.current.rotationState) {
              mp3Ref.current.stopRotateImage();
            }
          }}
          onPause={() => {
            if (!mp3Ref.current.rotationState) {
              mp3Ref.current.rotateImage();
            }
          }}
        />}
      </View>
      <View className='index-text-box'>
        {/* <Text className='head-title'>亲爱的家人朋友，你好呀！</Text> */}
        <Text className='head-des'>收到这封邀请函的你们</Text>
        <Text className='head-des'>都是我们人生中最重要的部分</Text>
        <Text className='head-des'>在这特殊的一天</Text>
        <Text className='head-des'>携同我们的父母</Text>
        <Text className='head-des'>
          真诚的邀请陪伴我们走过许多岁月的亲人 朋友
        </Text>
        <Text className='head-des'>见证分享我们的美好时刻</Text>
      </View>
      <View className='index-banner-2'>
        <View className='index-banner-box' onClick={() => openImg(Img01)}>
          <Text className='index-banner-2-title'>新娘: 杨柳</Text>
          <Image src={ta} mode='widthFix' className='index-banner-2-me' />
          <Text className='index-banner-2-des'>美图秀秀特约造型师</Text>
          <Text className='index-banner-2-des'>中国驰名窝里横艺术家</Text>
          <Text className='index-banner-2-des'>第57个民族月光族</Text>
          <Text className='index-banner-2-des'>丢三落四委员会主席</Text>
        </View>
        <View className='index-banner-box' onClick={() => openImg(Img01)}>
          <Text className='index-banner-2-title'>新郎: 郑壮</Text>
          <Image src={wo} mode='widthFix' className='index-banner-2-me' />
          <Text className='index-banner-2-des'>计算机终生合作伙伴</Text>
          <Text className='index-banner-2-des'>慢条斯理荣誉获得者</Text>
          <Text className='index-banner-2-des'>夫妻辩论大赛冠军</Text>
          <Text className='index-banner-2-des'>小张国荣</Text>
        </View>
      </View>
      <View className='index-text-box' style={{ marginTop: "30px" }}>
        <Text className='head-des'>诚邀你和家人参加我们的婚礼</Text>
        <Text className='head-des'>见证我们的幸福</Text>
      </View>
      <View className='index-banner-5'>
        <Image
          src={Banner5Left}
          mode='widthFix'
          className='index-banner-5-me'
          onClick={() => openImg(Banner5Left)}
        />
        <Image
          src={Banner5Right}
          mode='widthFix'
          className='index-banner-5-2-me'
          onClick={() => openImg(Banner5Right)}
        />
        <Image
          src={Banner5}
          mode='widthFix'
          className='index-banner-5-1-me'
          onClick={() => openImg(Banner5)}
        />
      </View>
      <View className='index-text-box'>
        {/* <Text className='head-title'>亲爱的家人朋友，你好呀！</Text> */}
        <Text className='head-xi'>囍</Text>
        <Text className='head-des'>以前觉得婚礼是一则官方通告</Text>
        <Text className='head-des'>知道现在才明白</Text>
        <Text className='head-des'>这是一场为数不多的相聚</Text>
        <Text className='head-des'>是千里迢迢的奔赴</Text>
        <Text className='head-des'>是不计得失的支持</Text>
        <Text className='head-des'>很开心在这一天</Text>
        <Text className='head-des'>你专程为我们而来</Text>
      </View>
      <View className='index-ye-box'>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/yewan-01.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/yewan-01.png")
            }
          />
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/yewan-02.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/yewan-02.png")
            }
          />
        </View>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/yewan-03.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/yewan-03.png")
            }
          />
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/yewan-04.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/yewan-04.png")
            }
          />
        </View>
      </View>
      <View className='index-right-box'>
        {/* <Text className='head-title'>亲爱的家人朋友，你好呀！</Text> */}
        <Text className='head-des'>当喜欢与合适撞个满怀</Text>
        <Text className='head-des'>从此一屋、两人、三餐、四季</Text>
        <Text className='head-des'>音乐有分享 共度岁月长</Text>
      </View>
      <View className='index-zhu-box'>
        <Image
          src='https://zaowu.bj.bcebos.com/resource/geren/zhu01.png'
          mode='widthFix'
          className='index-zhu-img'
          onClick={() =>
            openImg("https://zaowu.bj.bcebos.com/resource/geren/zhu01.png")
          }
        />
      </View>
      <View className='index-left-box'>
        <Text className='head-des'>如今我们决定往后的日子</Text>
        <Text className='head-des'>携手并肩 共同探索位置的世界</Text>
        <Text className='head-des'>奔赴美好的生活</Text>
      </View>
      <View className='index-ye-box'>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/3-1.png'
            mode='widthFix'
            className='index-left-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/3-1.png")
            }
          />
        </View>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/3-2.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/3-2.png")
            }
          />
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/3-3.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/3-3.png")
            }
          />
        </View>
      </View>
      <View className='index-text-box' style={{ marginTop: "60px" }}>
        {/* <Text className='head-xi'>囍</Text> */}
        <Text className='head-des'>我们终其一生，过着极为平凡的生活</Text>
        <Text className='head-des'>而你我之间的真心</Text>
        <Text className='head-des'>就是这平凡之中难得的不平凡</Text>
      </View>
      <View className='index-ye-box'>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/shu2-1.png'
            mode='widthFix'
            className='index-left-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/shu2-1.png")
            }
          />
        </View>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/shu2-2.png'
            mode='widthFix'
            className='index-left-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/shu2-2.png")
            }
          />
        </View>
      </View>
      <View className='index-text-box' style={{ marginTop: "60px" }}>
        <Text className='head-des-en'>
          It looks like you already know deep in my heart.
        </Text>
      </View>
      <View className='index-heng'>
        <Image
          src='https://zaowu.bj.bcebos.com/resource/geren/heng-01.png'
          mode='heightFix'
          className='index-heng-me'
          onClick={() =>
            openImg("https://zaowu.bj.bcebos.com/resource/geren/heng-01.png")
          }
        />
        <Image
          src='https://zaowu.bj.bcebos.com/resource/geren/heng-02.png'
          mode='heightFix'
          className='index-heng-me'
          onClick={() =>
            openImg("https://zaowu.bj.bcebos.com/resource/geren/heng-02.png")
          }
        />
      </View>
      <View className='index-right-box'>
        <Text className='head-des-en'>Think of you every day.</Text>
        <Text className='head-des-en'>
          your commpany, happiness is so natural
        </Text>
      </View>
      <View className='index-ye-box'>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/heng-11.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/heng-11.png")
            }
          />
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/heng-12.png'
            mode='widthFix'
            className='index-ye-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/heng-12.png")
            }
          />
        </View>
        <View className='index-ye'>
          <Image
            src='https://zaowu.bj.bcebos.com/resource/geren/heng-13.png'
            mode='widthFix'
            className='index-left-img'
            onClick={() =>
              openImg("https://zaowu.bj.bcebos.com/resource/geren/heng-13.png")
            }
          />
        </View>
      </View>
      <View className='index-left-box'>
        {/* <Text className='head-xi'>囍</Text> */}
        <Text className='head-des'>我们将拥有一个很长很长的未来</Text>
        <Text className='head-des'>得到所有人的祝福</Text>
        <Text className='head-des'>陪伴彼此度过一生</Text>
        <Text className='head-des'>同享受每天清晨的阳光，黄昏的微风</Text>
      </View>
      <View className='index-shu'>
        <Image
          src='https://zaowu.bj.bcebos.com/resource/geren/shu-12.png'
          mode='widthFix'
          className='index-shu-me'
          onClick={() =>
            openImg("https://zaowu.bj.bcebos.com/resource/geren/shu-12.png")
          }
        />
        <Image
          src='https://zaowu.bj.bcebos.com/resource/geren/shu-13.png'
          mode='heightFix'
          className='index-shu-me'
          onClick={() =>
            openImg("https://zaowu.bj.bcebos.com/resource/geren/shu-13.png")
          }
        />
        <Image
          src='https://zaowu.bj.bcebos.com/resource/geren/shu-11.png'
          mode='widthFix'
          className='index-shu-me'
          onClick={() =>
            openImg("https://zaowu.bj.bcebos.com/resource/geren/shu-11.png")
          }
        />
      </View>
      <View className='index-text-box' style={{ margin: '30px 0 80px' }}>
        <Text className='head-xi'>囍</Text>
      </View>
      <View className='index-zhu-box'>
        <Image
          src='https://zaowu.bj.bcebos.com/resource/geren/welcome.png'
          mode='widthFix'
          className='index-zhu-img'
          onClick={() =>
            openImg("https://zaowu.bj.bcebos.com/resource/geren/welcome.png")
          }
        />
      </View>
      <View className='index-text-box' style={{ marginTop: '50px' }}>
        <Text className='head-des-title'>【婚宴·时间】</Text>
        <Text className='head-des-2'>2023年12月30号 中午11:00</Text>
        <Text className='head-des-2'>农历冬月十八 星期六</Text>
      </View>
      <View className='index-text-box'>
        <Text className='head-des-title'>/婚宴地址/Address</Text>
        <Text className='head-des-2'>济宁·微山·鲁村三村</Text>
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <Text className='head-des-tip'>
            (想做同款小程序的联系新郎哦)
          </Text>
          <Text className='head-des-tip'>
            (点击下面地图可导航至这个位置，不迷路)
          </Text>
        </View>
        <Map
          latitude={35.1916661}
          longitude={116.720093}
          maxScale={20}
          markers={[
            {
              iconPath: "",
              title: "婚礼地方",
              latitude: 35.1916661,
              longitude: 116.720093,
            },
          ]}
          className='map'
          onClick={() => {
            openLocation({
              latitude: 35.1916661,
              longitude: 116.720093,
              scale: 18,
            });
          }}
        />
        <Text className='head-des-location'>酒店位置</Text>
        <Map
          latitude={35.182654}
          longitude={116.735474}
          maxScale={20}
          markers={[
            {
              iconPath: "",
              title: "婚礼地方",
              latitude: 35.182654,
              longitude: 116.735474,
            },
          ]}
          className='map'
          onClick={() => {
            openLocation({
              latitude: 35.182654,
              longitude: 116.735474,
              scale: 18,
            });
          }}
          style={{
            marginTop: "30px",
          }}
        />
        <Text className='head-des-location'>老家位置</Text>
      </View>
      <View className='index-showtime'>
        <Image
          src={hua01}
          mode='widthFix'
          className='index-showtime-head'
          onClick={() => openImg(hua01)}
        />
        <Text className='head-des-title'>End</Text>
      </View>
      {/* <Symbolphone
        ref={mp3Ref}
        onChange={() => {
          // mp4Ref?.current && mp4Ref?.current?.onPlay();
          mp4Ref.current && mp4Ref.current.pause();
        }}
      /> */}
      <MemoIndex />
    </ScrollView>
  );
}
