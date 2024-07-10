import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Stack, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"
import { creditCardFormSchema } from "../../validation/CreditCardFormValidation"
import MaskedTextField from "./MaskedTextField.elements"

export default function CreditCardForm() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(creditCardFormSchema)
  })

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <Box component='form' onSubmit={handleSubmit(onSubmit)}>
      <Stack
        width={"100%"}
        py={3}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <Controller
          name='fullName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              size='small'
              fullWidth
              label='Nome Completo'
              error={Boolean(errors.fullName)}
              helperText={errors.fullName ? errors.fullName.message : ""}
              sx={{ fontSize: "12px" }}
            />
          )}
        />
        <Controller
          name='creditCardNumber'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <MaskedTextField
              {...field}
              mask='9999 9999 9999 9999'
              fullWidth
              label='Número do Cartão de Crédito'
              error={Boolean(errors.creditCardNumber)}
              helperText={
                errors.creditCardNumber ? errors.creditCardNumber.message : ""
              }
            />
          )}
        />
        <Controller
          name='expiryDate'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <MaskedTextField
              {...field}
              mask='99/99'
              fullWidth
              label='Data de Vencimento'
              error={Boolean(errors.expiryDate)}
              helperText={errors.expiryDate ? errors.expiryDate.message : ""}
            />
          )}
        />
        <Controller
          name='cvv'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <MaskedTextField
              {...field}
              mask='999'
              fullWidth
              label='CVV'
              error={Boolean(errors.cvv)}
              helperText={errors.cvv ? errors.cvv.message : ""}
            />
          )}
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Enviar
        </Button>
      </Stack>
    </Box>
  )
}
