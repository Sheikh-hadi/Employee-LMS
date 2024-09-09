import React, { createContext, useContext, useState } from "react";

const DepartmentContext = createContext();

export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  return (
    <DepartmentContext.Provider value={{ departments, setDepartments }}>
      {children}
    </DepartmentContext.Provider>
  );
};

export const useDepartmentContext = () => {
  return useContext(DepartmentContext);
};
