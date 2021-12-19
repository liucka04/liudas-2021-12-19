export const formatPrice = ({price}: {price: number}) => {
  return price.toFixed(2).toLocaleString();
};
