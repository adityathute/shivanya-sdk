export function getLinearScale(value: number | string, maxValue: number, chartWidth: number, minWidth = 16) {
  const numericValue = Number(value) || 0;
  const numericMax = Number(maxValue) || 0;
  const numericWidth = Number(chartWidth) || 0;
  if (numericMax <= 0) return 0;
  return Math.max((numericValue / numericMax) * numericWidth, numericValue > 0 ? minWidth : 0);
}
export function getLogScale(value: number, maxValue: number, chartWidth: number, minWidth = 16) {
  if (value <= 0 || maxValue <= 0) return 0;
  return Math.max((Math.log10(value + 1) / Math.log10(maxValue + 1)) * chartWidth, minWidth);
}
