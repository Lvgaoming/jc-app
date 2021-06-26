import { Text, View } from '@tarojs/components';
import { useState } from 'react';
import './index.scss';

enum ButtonType {
  default,
  ascent,
  decrease,
  length
}

interface SortButtonProps {
  text: string;
  onClick: (type: string) => void
}

export const SortButton = (props: SortButtonProps) => {
  const {text, onClick} = props;
  const [type, setType] = useState<ButtonType>(ButtonType.default);

  const handleSortButtonTypeChange = () => {
    const newTypeEnum = (type + 1) % ButtonType.length;
    setType(newTypeEnum);
    onClick(ButtonType[newTypeEnum]);
  };
  const ascentMark = ButtonType[type] === 'ascent' ? 'ascent' : '';
  const decreaseMark = ButtonType[type] === 'decrease' ? 'decrease' : '';
  return <View className="jc-sort-button at-row at-row__justify--center at-row__align-content"
               onClick={handleSortButtonTypeChange}>
    <View className="at-col at-col-1 at-col--auto left">{text}</View>
    <View className="at-col at-col-1 at-col--auto">
      <View className="at-row at-row__direction--column">
        <Text className={`triangle ${ascentMark}`}/>
        <Text className={`triangle triangle-bottom ${decreaseMark}`}/>
      </View>
    </View>
  </View>;
};
