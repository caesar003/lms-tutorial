export const formatPrice = (price: number) => {
  // const locale = "en-US";
  const locale = "id-ID";
  const options = {
    style: "currency",
    // currency: "USD",
    currency: "IDR",
  };

  return new Intl.NumberFormat(locale, options).format(price);
};
