import { createContext, useContext, useEffect, useState } from 'react';
import data from './data';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

export const Context = ({ children }) => {
  const [purchases, setPurchases] = useState(data);
  const increaseAmount = (id) => {
    const new_purchases = purchases.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setPurchases(new_purchases);
  };

  const reduceAmount = (id) => {
    const new_purchases = purchases.map((item) => {
      if (item.id === id) {
        const new_amount = item.amount > 1 ? item.amount - 1 : 0;
        return { ...item, amount: new_amount };
      } else {
        return item;
      }
    });
    setPurchases(new_purchases);
  };

  return (
    <AppContext.Provider value={{ purchases, increaseAmount, reduceAmount }}>
      {children}
    </AppContext.Provider>
  );
};
