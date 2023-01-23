import { createContext, useState } from "react";
import { IAuthProvider } from "../interface/IAuthProvider";
import { IAuthContext } from "../interface/IAuthContext";
import { AxiosError } from "axios";
import { IError } from "../interface/IError";
import { ICalc } from "../interface/ICalc";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [isRate, setIsRating] = useState<ICalc>({} as ICalc);

  const [calc, setCalc] = useState({} as ICalc);

  const [isTrue, setIsTrue] = useState(false);

  const calculate = async (data: ICalc) => {
    try {
      await api.post<ICalc>(``, data).then((res) => {
        setIsRating({ ...isRate, ...res.data });
      
        toast.success("Sucesso !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
    } catch (error) {
      const err = error as AxiosError<IError>;
      toast.error("Houve algum erro!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isRate,
        setIsRating,
        calc,
        setCalc,
        calculate,
        isTrue,
        setIsTrue
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
