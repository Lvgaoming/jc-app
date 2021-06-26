import { View } from '@tarojs/components';
import {
  useReady,
} from '@tarojs/taro';
import { Header } from './components/header';
import { Marker } from './components/marker';
import { List } from './components/list';
import './index.scss';

const markerList = [{
  text: '上证指数',
  total: '3519.02',
  changePercentage: '-106',
  changeAmount: '-37.54',
}, {
  text: '沪深300',
  total: '5081.21',
  changePercentage: '-165',
  changeAmount: '-85.35',
}, {
  text: '创业板指',
  total: '3125.70',
  changePercentage: '-418',
  changeAmount: '-136.49',
}];

const Index = () => {
  useReady(() => {
    console.log('useReady');
  });

  return (
    <View className="index-page">
      <Header income={-123} holdAmount={1234} holdPercentage={-10}/>
      <Marker markerList={markerList}/>
      <List/>
    </View>
  );
};

export default Index;
