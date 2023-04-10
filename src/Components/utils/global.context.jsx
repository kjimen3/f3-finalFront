import { createContext } from "react";
import { useState, useEffect } from "react";


export const ContextG = createContext(undefined);

export const DataProvider = ({ children }) => {

  const [dataApi, setDataApi] = useState([])


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((data)=> setDataApi(data))
  }, [])


  return (
    <ContextG.Provider value={dataApi}>
      {children}
    </ContextG.Provider>
  );
};
