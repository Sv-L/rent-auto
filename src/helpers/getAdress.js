export const getAdress = address => {
  const adressArr = address.split(' ');
  const cityAndComa = adressArr[adressArr.length - 2];
  const city = cityAndComa.slice(0, cityAndComa.length - 1);
  const cantry = adressArr[adressArr.length - 1];

  return { city, cantry };
};
