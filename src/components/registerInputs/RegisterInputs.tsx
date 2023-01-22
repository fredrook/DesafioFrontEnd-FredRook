import { AuthContext } from "../../context/AuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { FcPlanner } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { ICalc } from "../../interface/ICalc";
import * as yup from "yup";
import "./RegisterInputsSASS.sass";

const schema = yup.object({
  amount: yup
    .number()
    .min(1000, "Valor minimo de 1.000")
    .required("O valor da venda é obrigatório"),
  installments: yup
    .number()
    .min(1)
    .max(12, "Maximo de 12 parcelas")
    .required("A quantidade de parcelas é obrigatória"),
  mdr: yup.number().min(1).required("O percentual do MDR é obrigatório"),
});

const RegisterInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICalc>({ resolver: yupResolver(schema) });

  const { calculate, setIsTrue } = useContext(AuthContext);

  return (
    <form className="tagForm" onSubmit={handleSubmit(calculate)}>
      <h1> Simule sua Antecipação</h1>
      <label className="labelAmount">
        Informe o valor da venda *
        <input type="number" id="amount" {...register("amount")} />
        <span className="error1">{errors.amount?.message}</span>
      </label>
      <label className="labelInstallments">
        Em quantas parcelas *
        <input type="number" id="installments" {...register("installments")} />
        <span className="error2">{errors.installments?.message}</span>
      </label>
      <label className="labelMDR">
        Informe o percentual do MDR *
        <input type="number" id="mdr" {...register("mdr")} />
        <span className="error3">{errors.mdr?.message}</span>
      </label>
      <button type="submit" className="btnOmit">
        CALCULAR
      </button>
      <button type="button" onClick={() => setIsTrue(true)} className="btnCalc">
        Simule os Meses
        <FcPlanner className="calendry" />
      </button>
    </form>
  );
};

export default RegisterInputs;
