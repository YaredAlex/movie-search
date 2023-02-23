import React, { useState } from "react";

export const UserContext = React.createContext();
const reducer = (state, action) => {};
const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);
  return (
    <UserContext.Provider
      value={{ data, setData, search, setSearch, list, setList }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;
