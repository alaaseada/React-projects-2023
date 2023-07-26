export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
};

export const getUniqueValues = (products, field) => {
  const uniqueValues = new Set(
    products
      .map((product) => {
        return product[field];
      })
      .flat(1)
  );
  return ['all', ...uniqueValues];
};

export const getMaxPrice = (products) => {
  return Math.max(...products.map((p) => p.price));
};
