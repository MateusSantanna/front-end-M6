import * as yup from "yup";

export const dataSchema = yup.object().shape({
    amount: yup.number().required("obrigatório"),
    installments: yup.number().required("obrigatório"),
    mdr: yup.number().required("obrigatório"),
})