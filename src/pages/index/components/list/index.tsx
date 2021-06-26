import { View } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import { SortButton } from '@/components/sort-button';

export const List = () => {
  return <View className="list">
    <View className="list-header at-row">
      <View className="at-col">
        <View className="at-row at-row__align--center at-row__justify--center">
          基金名称
          <AtIcon prefixClass="icon" value={'add-circle'} size="18"
                  className="add-fund"
                  color="#868685"/>
        </View>
      </View>
      <View className="at-col">显示持仓</View>
      <View className="at-col">
        <SortButton text={'净值估算'} onClick={(type) => {
          console.log('1', type);
        }}/>
      </View>
      <View className="at-col">
        <SortButton text={'盈亏估算'} onClick={(type) => {
          console.log('2', type);
        }}/>
      </View>
    </View>
  </View>;
};
