import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Fade,
  Stack,
  Typography
} from "@mui/material"
import WooviLogo from "/src/assets/woovi_logo.png"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import QRCode from "/src/assets/QR_CODE.png"
import theme from "../styles/theme"
import { useState } from "react"
import { ExpandMore } from "@mui/icons-material"
import VerticalStepper from "./elements/VerticalStepper.elements"
import FooterPayment from "./elements/FooterPayment.elements"
import CreditCardForm from "./elements/CreditCardForm.elements"

export default function PixPayment() {
  const [activeStep, setActiveStep] = useState(0)
  const [fadeCheck, setFadeCheck] = useState(false)

  const steps = [
    { label: "1ª entrada no Pix", value: "R$ 15.300,00" },
    { label: "2ª entrada no Cartão", value: "R$ 15.300,00" }
  ]

  function handleActiveStep() {
    if (activeStep === 0) {
      setFadeCheck(true)
      setTimeout(() => {
        setActiveStep(1)
      }, 500)
    }
  }

  return (
    <Container maxWidth='lg'>
      <Box
        width='100%'
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box component='img' src={WooviLogo} sx={{ paddingY: 3 }} />
        <Typography
          variant='h3'
          textAlign={"center"}
          color={theme.palette.text.secondary}
        >
          João, pague a entrada de R$ 15.300,00 pelo Pix.
        </Typography>
        {activeStep === 0 ? (
          <Box component={"img"} src={QRCode} height={"260px"} sx={{ py: 2 }} />
        ) : (
          <Fade in={fadeCheck}>
            <Box>
              <CreditCardForm />
            </Box>
          </Fade>
        )}
        {activeStep === 0 ? (
          <Button
            size='small'
            variant='contained'
            onClick={handleActiveStep}
            endIcon={<FileCopyIcon fontSize='small' />}
          >
            Clique para copiar QR CODE
          </Button>
        ) : null}

        <Stack dir='column' paddingY={2}>
          <Typography variant='body2' sx={{ opacity: 0.5 }}>
            Prazo de pagamento:
          </Typography>
          <Typography variant='body2' fontWeight={"bold"}>
            15/12/2021 - 08:17
          </Typography>
        </Stack>
        <Stack gap={2}>
          <Box
            width={"100%"}
            border={"solid 1px #cccc"}
            borderRadius={"10px"}
            padding={1}
          >
            <VerticalStepper steps={steps} activeStep={activeStep} />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            border={"solid 1px #cccc"}
            borderRadius={"10px"}
            padding={1}
          >
            <Typography variant='caption'>CET: 0,5%</Typography>
            <Typography variant='caption'>Total: R$ 30,600.00</Typography>
          </Box>
          <Accordion
            sx={{
              boxShadow: 0,
              border: "solid 1px #cccc",
              borderRadius: "10px"
            }}
          >
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant='h5' color={"#000"}>
                Como funciona?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={"14px"} color={"#000"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
        <Stack dir='column' paddingY={2}>
          <Typography
            variant='body2'
            textAlign={"center"}
            sx={{ opacity: 0.5 }}
          >
            Identificador:
          </Typography>
          <Typography variant='body2' fontWeight={"bold"}>
            2c1b951f356c4680b13ba1c9fc889c47
          </Typography>
        </Stack>
        <FooterPayment />
      </Box>
    </Container>
  )
}
