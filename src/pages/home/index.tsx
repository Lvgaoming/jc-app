import { useEffect } from 'react';
import { View, Text } from '@tarojs/components';
import {
  useReady,
  useDidShow,
} from '@tarojs/taro';
import './index.scss';

const Home = () => {
  useEffect(() => {
    console.log('useEffect');
  });

  // 对应 onReady
  useReady(() => {
    console.log('useReady');
  });

  // 对应 onShow
  useDidShow(() => {
    console.log('onShow');
  });


  return (
    <View className="home">
      <Text>home</Text>
    </View>
  );
};

export default Home;
