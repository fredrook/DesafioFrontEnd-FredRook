import { Dispatch, SetStateAction } from "react";
import { ICalc } from "./ICalc";

export interface IAuthContext {
  isRate: ICalc;
  setIsRating: (value: ICalc) => void;
  calculate: (data: ICalc) => void;
  completeCalculate: (data: ICalc) => void;
  calc: ICalc;
  setCalc: Dispatch<SetStateAction<ICalc>>;
  isTrue: boolean;
  setIsTrue:Dispatch<SetStateAction<boolean>>;
};