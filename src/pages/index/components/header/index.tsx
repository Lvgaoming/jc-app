import { Text, View } from '@tarojs/components';
import { AtAvatar, AtIcon } from 'taro-ui';
import { useState } from 'react';
import { formatCount } from '@/utils/index';

interface HeaderProps {
  income?: string | number;
  holdPercentage?: string | number;
  holdAmount?: string | number;
}

export const Header = ({income, holdPercentage, holdAmount}: HeaderProps) => {
  const [isShowTotal, setIsShowTotal] = useState(true);
  const handleShowTotal = () => {
    setIsShowTotal(!isShowTotal);
  };
  const holdAmountNum = formatCount({value: holdAmount, sign: false});

  return <View className="header at-row">
    <View className="at-col at-col-1 at-col--auto">
      <AtAvatar
        size="large"
        openData={{type: 'userAvatarUrl'}}
        className="avatar"
      />
    </View>
    <View className="at-col total">
      <View className="income-text">
        {isShowTotal ? formatCount({value: income}) : '****'}
      </View>
      <View className="income-desc at-row at-row__justify--end at-row__align--center">
        <AtIcon prefixClass="icon" value={isShowTotal ? 'eye' : 'hide'} size="16"
                className="icon"
                color="#Fefefe"
                onClick={handleShowTotal}/>
        实时盈亏估算(元)
      </View>
      <View className="hold-wrapper">
        {isShowTotal ? <>
          {
            holdAmountNum !== '-' &&
            <Text className="hold-percentage">{formatCount({value: holdPercentage, ratio: true})}</Text>
          }
          <Text className="hold-amount">{holdAmountNum}</Text></> : '****'}
      </View>
      <View className="hold-desc">持仓金额(元)</View>
    </View>
  </View>;
};
