/*
 * @Author: {zhengzhuang}
 * @Date: 2023-11-01 23:28:38
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2023-12-10 21:40:42
 * @Description:
 */
import { useEffect, useImperativeHandle, useRef, useState, forwardRef  } from "react";
import { showShareMenu, createInnerAudioContext, createAnimation } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import symbolphonetic from "@/assets/symbolphonetic.svg";
import "./index.less";

// let rotationState = false
let rotateIndex = 1
function Index(props:any ,ref:any) {

  const [rotationState, setRotationState] = useState<any>(false)
  const [rotationAnim, setRotationAnim] = useState<any>({})
  let animation = useRef<any>()
  let timeInterval = useRef<any>()
  let innerAudioContext = useRef<any>()

  // 打开弹窗
  useImperativeHandle(ref, () => ({
    stopRotateImage: (newVal: boolean) => {
      console.log(ref,newVal)
      // setVisible(true);
      stopRotateImage()
    }
  }));


  showShareMenu({
    withShareTicket: true,
    showShareItems: ['wechatFriends', 'wechatMoment']
  })

  useEffect(() => {
    innerAudioContext.current = createInnerAudioContext()
    innerAudioContext.current.src = 'https://zaowu.bj.bcebos.com/resource/geren/theluckiest.mp3'
    // innerAudioContext.current.autoplay = true
    innerAudioContext.current.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.current.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
    animation.current = createAnimation({
      duration: 3000,  // 动画持续时间，单位ms
      timingFunction: 'linear'  // 线性动画
    });
    rotateImage()
  }, [])

  const rotateImage = () => {
    props.onChange(true)
    setRotationState(true)
    innerAudioContext.current.pause()
    innerAudioContext.current.play()
    clearInterval(timeInterval.current)
    timeInterval.current = setInterval(function () {
      rotateIndex = rotateIndex + 1
      animation.current.rotate(180 * (rotateIndex)).step()
      setRotationAnim(animation.current.export())
    }, 1000)
  }

  const stopRotateImage = () => {
    console.log('暂停')
    // rotationState = false
    setRotationState(false)
    clearInterval(timeInterval.current)
    if (timeInterval.current > 0) {
      innerAudioContext.current.play()
      innerAudioContext.current.pause()
      timeInterval.current = 0
    }
  }

  return (
    <View className='symbolphonetic-box' onClick={rotationState ? stopRotateImage : rotateImage} animation={rotationAnim}>
      <Image src={symbolphonetic} className='symbolphonetic-svg' />
    </View>
  );
}
export default  forwardRef(Index)
