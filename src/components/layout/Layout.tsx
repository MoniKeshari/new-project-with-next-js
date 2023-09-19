
import { ReactNode } from "react";
import NavBar from "../navbar/NavBar";
type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <div className="my-layout"> 
        {children}
      </div>
      
    </>
  );
};

export default Layout;






