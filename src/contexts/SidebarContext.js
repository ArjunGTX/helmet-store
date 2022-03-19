import { useState } from "react";
import { useContext, createContext } from "react";

const SidebarContext = createContext(null);

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  return (
    <SidebarContext.Provider
    value={{ isSidebarActive, toggleSidebar: (state) => setIsSidebarActive(state) }}
  >
    {children}
  </SidebarContext.Provider>
  );
};
