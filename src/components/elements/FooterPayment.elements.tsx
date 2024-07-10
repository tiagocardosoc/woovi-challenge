import { Box, Typography } from "@mui/material"
import VectorShield from "/src/assets/Vectorshield.png"
import WooviGrey from "/src/assets/Logowoovi.png"

export default function FooterPayment() {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={1}
      paddingTop={3}
    >
      <Box
        component={"img"}
        src={VectorShield}
        height={"10px"}
        width={"10px"}
      />
      <Typography variant='body2' sx={{ opacity: 0.4 }}>
        Pagamento 100% seguro via
      </Typography>
      <Box component={"img"} src={WooviGrey} />
    </Box>
  )
}
