import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function ChallengePage() {
  const navigate = useNavigate()

  function navigation(to: "pix" | "pix-credit" | "credit-card") {
    navigate(`/${to}`)
  }

  return (
    <Container maxWidth='lg'>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='90vh'
      >
        <Box textAlign='center'>
          <Typography variant='h1' fontWeight={"600"} color={"secondary"}>
            Hi, I'am Tiago!
          </Typography>
          <Typography variant='h1' fontWeight={"600"} color={"secondary"}>
            Above you can access the code challenge by Woovi.
          </Typography>
        </Box>

        <Stack dir={"column"} gap={2} py={3}>
          <Button variant='contained' onClick={() => navigation("pix-credit")}>
            Component 1: Choose how you prefer to pay
          </Button>
          <Button variant='contained' onClick={() => navigation("pix")}>
            Component 2: Payment process
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}
