import { createContext, useContext } from 'react';
import data from '../data/data.json';

// Context will hold the array from data.json
const ListContext = createContext([]);

export const ContextProvider = ({ children }) => {
  return (
    <ListContext.Provider value={data.data}>
      {children}
    </ListContext.Provider>
  );
};

export const useContextData = () => useContext(ListContext);