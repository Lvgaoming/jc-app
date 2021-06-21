import { View } from '@tarojs/components';
import {
  useReady,
} from '@tarojs/taro';
import { Header } from './components/header';
import './index.scss';

const Index = () => {
  useReady(() => {
    console.log('useReady');
  });

  return (
    <View className="index-page">
      <Header income={123} holdAmount={1234} holdPercentage={10}/>
    </View>
  );
};

export default Index;
