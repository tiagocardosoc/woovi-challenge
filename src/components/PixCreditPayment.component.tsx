import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery
} from "@mui/material"
import WooviLogo from "/src/assets/woovi_logo.png"
import theme from "../styles/theme"
import PixOptions, { IPixOptions } from "./elements/PixOptions.elements"
import { useState } from "react"
import FooterPayment from "./elements/FooterPayment.elements"

export default function PixCreditCPayment() {
  const smallScreen = useMediaQuery(theme.breakpoints.up("sm"))

  const [selectedOption, setSelectedOption] = useState(null)

  const installments: IPixOptions[] = [
    { numberInstallment: "1x", valueInstallment: 30500.0, totalPrice: 30500.0 },
    { numberInstallment: "2x", valueInstallment: 15300.0, totalPrice: 30600.0 },
    {
      numberInstallment: "3x",
      valueInstallment: 10166.66,
      totalPrice: 30620.0
    },
    { numberInstallment: "4x", valueInstallment: 7725.0, totalPrice: 30900.0 },
    { numberInstallment: "5x", valueInstallment: 6300.0, totalPrice: 31500.0 },
    {
      numberInstallment: "6x",
      valueInstallment: 5283.33,
      totalPrice: 31699.98
    },
    { numberInstallment: "7x", valueInstallment: 4524.85, totalPrice: 31800.0 }
  ]

  return (
    <Container maxWidth='lg'>
      <Box
        width='100%'
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box component='img' src={WooviLogo} sx={{ paddinY: 3 }} />
        <Typography variant='h3' color={theme.palette.text.secondary}>
          João, como você quer pagar?
        </Typography>
      </Box>
      <Grid
        container
        flexDirection={"column"}
        spacing={smallScreen ? undefined : 3}
      >
        <Grid item>
          <Box
            sx={{
              position: "relative",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "400px",
              my: 3
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-12px",
                left: "16px",
                backgroundColor: theme.palette.background.default,
                borderRadius: "10px",
                padding: "0 8px"
              }}
            >
              <Typography
                variant='body2'
                fontSize={"12px"}
                fontWeight='bold'
                color='text.secondary'
              >
                Pix
              </Typography>
            </Box>
            <PixOptions
              numberInstallment={installments[0].numberInstallment}
              valueInstallment={installments[0].valueInstallment}
              totalPrice={installments[0].totalPrice}
              isSelected={selectedOption === 0}
              onClick={() => setSelectedOption(0)}
            />
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              position: "relative",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "400px",
              my: 3
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: "-12px",
                left: "16px",
                backgroundColor: theme.palette.background.default,
                borderRadius: "10px",
                padding: "0 8px"
              }}
            >
              <Typography
                variant='body2'
                fontSize={"12px"}
                fontWeight='bold'
                color='text.secondary'
              >
                Pix Parcelado
              </Typography>
            </Box>
            <Stack gap={3}>
              {installments.map((item, key) => {
                if (key !== 0) {
                  return (
                    <PixOptions
                      key={key}
                      numberInstallment={item.numberInstallment}
                      totalPrice={item.totalPrice}
                      valueInstallment={item.valueInstallment}
                      isSelected={selectedOption === key}
                      onClick={() => setSelectedOption(key)}
                    />
                  )
                }
                return null
              })}
            </Stack>
          </Box>
        </Grid>
      </Grid>

      <FooterPayment />
    </Container>
  )
}
