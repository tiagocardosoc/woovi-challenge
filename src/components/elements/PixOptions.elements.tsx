import { Box, Typography } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle" // Importando o ícone de "correto"
import theme from "../../styles/theme"

export interface IPixOptions {
  numberInstallment: string
  valueInstallment: number
  totalPrice: number
  isSelected?: boolean
  onClick?: () => void
}

export default function PixOptions({
  numberInstallment,
  valueInstallment,
  totalPrice,
  isSelected,
  onClick
}: IPixOptions) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: isSelected
          ? `2px solid ${theme.palette.secondary.main} `
          : "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        cursor: "pointer",
        backgroundColor: isSelected ? "#f0fdf4" : "transparent" // Verde claro quando selecionado
      }}
    >
      <Box>
        <Typography variant='h5' fontWeight='600'>
          <b>{numberInstallment}</b> R${valueInstallment}
        </Typography>
        {numberInstallment === "1x" ? (
          <>
            <Typography variant='body2' fontWeight={900} color='secondary.main'>
              Ganhe 3% de Cashback
            </Typography>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                padding: "8px",
                borderRadius: "4px",
                marginTop: "8px"
              }}
            >
              <Typography fontSize={"10px"}>
                🤑 R$ 300,00 de volta no seu Pix na hora
              </Typography>
            </Box>
          </>
        ) : (
          <>
            <Typography variant='body2' fontWeight={900} sx={{ opacity: 0.7 }}>
              Total: R$ {totalPrice}
            </Typography>
            {numberInstallment === "4x" ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "#fff",
                  padding: "3px",
                  borderRadius: "4px",
                  marginTop: "8px"
                }}
              >
                <Typography fontSize={"10px"}>
                  <b>-3% de juros:</b> Melhor opção de parcelamento
                </Typography>
              </Box>
            ) : null}
          </>
        )}
      </Box>
      {isSelected && (
        <Box height={"100%"} display={"flex"} justifyContent={"start"}>
          <CheckCircleIcon
            sx={{ color: theme.palette.secondary.main, fontSize: "20px" }}
          />
        </Box>
      )}
    </Box>
  )
}
