import { useContext } from "react";
import CompleteCalculation from "../../components/modalAnotherCalculation/CompleteCalculation";
import RegisterInputs from "../../components/registerInputs/RegisterInputs";
import ShowInputs from "../../components/showResults/ShowResults";
import { AuthContext } from "../../context/AuthContext";
import './MainPageSASS.sass';

const MainPage = () => {
  const { isTrue } = useContext(AuthContext);

  return (
    <div>
      {isTrue === false && <RegisterInputs />}
      {isTrue === true && <CompleteCalculation/>}
      <ShowInputs/>
      </div>
      );
};

export default MainPage;
