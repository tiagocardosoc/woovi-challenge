import * as yup from "yup"

export const creditCardFormSchema = yup.object({
  fullName: yup.string().required("Nome completo é obrigatório"),
  creditCardNumber: yup
    .string()
    .required("Número do cartão de crédito é obrigatório"),
  expiryDate: yup.string().required("Data de vencimento é obrigatória"),
  cvv: yup.string().required("CVV é obrigatório")
})
