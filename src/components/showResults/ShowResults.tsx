import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./ShowResultsSASS.sass";

const ShowInputs = () => {
  const { isRate } = useContext(AuthContext);

  return (
    <>
      {!isRate.days ? (
        <div className="divContainer">
          <h1>VOCÊ RECEBERÁ</h1>
          <div className="separacao"></div>
          <p className="p1">Amanhã: R$ {isRate["1"]}</p>
          <p className="p2">Em 15 dias: R$ {isRate["15"]}</p>
          <p className="p3">Em 30 dias: R$ {isRate["30"]}</p>
          <p className="p4">Em 90 dias: R$ {isRate["90"]}</p>
        </div>
      ) : (
        <div className="divContainer">
          <h1>VOCÊ RECEBERÁ</h1>
          <div className="separacao"></div>
          <p className="p1">Amanhã: R$ {isRate[0]}</p>
          <p className="p2">Em 15 dias: R$ {isRate[1]}</p>
          <p className="p3">Em 30 dias: R$ {isRate[2]}</p>
          <p className="p4">Em 90 dias: R$ {isRate[3]}</p>
        </div>
      )}
    </>
  );
};

export default ShowInputs;