import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [popshow, setpopshow] = useState(false);
  const [status, setstatus] = useState(200);

  return (
    <AuthContext.Provider value={{popshow, setpopshow ,status , setstatus }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
