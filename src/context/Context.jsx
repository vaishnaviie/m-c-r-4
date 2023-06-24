import React from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import ReducerFunc from "../reducer/ReducerFunc";
import { initialState } from "../reducer/ReducerFunc";

const ContextProvider = createContext();
export const useData = () => useContext(ContextProvider);

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFunc, initialState);
  return (
    <div>
      <ContextProvider.Provider value={{ state, dispatch }}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};

export default Context;
