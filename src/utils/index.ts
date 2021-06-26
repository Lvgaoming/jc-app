/**
 * 格式化计数操作
 * @param value 需要格式化的值，空值返回'-'
 * @param sign 是否需要正负号，默认为true
 * @param ratio 是否需要百分号，默认为false
 * @param fixed 保留小数位数，默认为2位
 */
export const formatCount = ({value = null, sign = true, ratio = false, fixed = 2}: {
  value?: string | number | null,
  sign?: boolean,
  ratio?: boolean,
  fixed?: number,
}) => {
  if (value === null || value === undefined) return '-';
  let vNum = (ratio && Number(value) !== 0) ? Number(value) / 100 : Number(value);
  let signStr = (sign && vNum >= 0) ? '+' : '';
  let ratioStr = ratio ? '%' : '';
  return `${signStr}${vNum.toFixed(fixed)}${ratioStr}`;
};
