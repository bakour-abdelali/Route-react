import { ReactNode } from "react";
import { Navigate } from "react-router-dom";


interface IProps {
  isLogin: boolean;
  rout: string;
  children: ReactNode;
  data: unknown;
}

const ProtuctedRout = ({ isLogin, rout, children, data }: IProps) => {
    console.log("Navigating with data:", data); // Check data before navigating
  if (!isLogin) {

    
    return <Navigate to={rout} replace state={data} />;
  }

  return children;
};

export default ProtuctedRout;
