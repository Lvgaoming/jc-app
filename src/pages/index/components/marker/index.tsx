import { View } from '@tarojs/components';
import { formatCount } from '@/utils/index';

interface MarkerItem {
  text: string;
  total: string | number;
  changePercentage: string | number;
  changeAmount: string | number;
}

interface MarkerProps {
  markerList: MarkerItem[]
}

export const Marker = ({markerList}: MarkerProps) => {
  return <View className="marker at-row at-row__justify--center">
    {
      markerList.map(item => {
        const markerColor = item.changeAmount > 0 ? 'red' : 'green';
        return <View className={`markerItem at-col ${markerColor}`} key={item.text}>
          <View className="markerItem-text">{item.text}</View>
          <View className="markerItem-total">{formatCount({value: item.total, sign: false})}</View>
          <View className="markerItem-change at-row">
            <View className="at-col">{formatCount({value: item.changeAmount})}</View>
            <View className="at-col">{formatCount({value: item.changePercentage, ratio: true})}</View>
          </View>
        </View>;
      })
    }
  </View>;
};
