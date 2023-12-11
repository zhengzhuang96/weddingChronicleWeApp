/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-12-11 22:01:09
 * @Description:
 */
import {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef,
} from "react";
import {
  showShareMenu,
  createInnerAudioContext,
  createAnimation,
  useDidHide,
  useDidShow,
} from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import symbolphonetic from "@/assets/symbolphonetic.svg";
import "./index.less";

let rotationShow = false;
let rotateIndex = 1;
function Index(props: any, ref: any) {
  const [rotationState, setRotationState] = useState<any>(false);
  const [rotationAnim, setRotationAnim] = useState<any>({});
  let animation = useRef<any>();
  let timeInterval = useRef<any>();
  let innerAudioContext = useRef<any>();

  useImperativeHandle(ref, () => ({
    rotationState,
    stopRotateImage: () => {
      stopRotateImage();
    },
    rotateImage: () => {
      rotateImage();
    },
  }));

  showShareMenu({
    withShareTicket: true,
    showShareItems: ["wechatFriends", "wechatMoment"],
  });

  useEffect(() => {
    innerAudioContext.current = createInnerAudioContext();
    innerAudioContext.current.src =
      "https://zaowu.bj.bcebos.com/resource/geren/theluckiest.mp3";
    // innerAudioContext.current.autoplay = true
    innerAudioContext.current.onPlay(() => {
      console.log("开始播放");
    });
    innerAudioContext.current.onError((res) => {
      console.log(res.errMsg);
      console.log(res.errCode);
    });
    animation.current = createAnimation({
      duration: 3000, // 动画持续时间，单位ms
      timingFunction: "linear", // 线性动画
    });

    console.log("123123");

    rotateImage();

    return () => {
      console.log("==>清除订阅");
      // 清除订阅
      stopRotateImage();
      innerAudioContext.current.stop();
      innerAudioContext.current = null;
      animation.current = null;
      console.log("==>清除订阅-->");
    };
  }, []);

  // useDidShow(() => {
  //   console.log("componentDidShow");
  //   innerAudioContext.current.play();
  //   rotateImage();
  // });

  // useDidHide(() => {
  //   console.log("componentDidHide");
  //   stopRotateImage();
  // });

  const rotateImage = () => {
    props.onChange(true);
    setRotationState(true);
    innerAudioContext.current.pause();
    innerAudioContext.current.play();
    clearInterval(timeInterval.current);
    console.log("timeInterval.current", timeInterval.current);
    timeInterval.current = setInterval(function () {
      rotateIndex = rotateIndex + 1;
      animation.current.rotate(180 * rotateIndex).step();
      setRotationAnim(animation.current.export());
    }, 1000);
  };

  const stopRotateImage = () => {
    console.log("暂停");
    // rotationState = false
    setRotationState(false);
    clearInterval(timeInterval.current);
    if (timeInterval.current > 0) {
      innerAudioContext.current.play();
      innerAudioContext.current.pause();
      rotateIndex = 0;
      timeInterval.current = 0;
    }
  };

  return (
    <View
      className='symbolphonetic-box'
      onClick={rotationState ? stopRotateImage : rotateImage}
      animation={rotationAnim}
    >
      <Image src={symbolphonetic} className='symbolphonetic-svg' />
    </View>
  );
}
export default forwardRef(Index);
