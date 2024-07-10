import { TextField } from "@mui/material"
import InputMask from "react-input-mask"

const MaskedTextField = (props: any) => (
  <InputMask {...props}>
    {(inputProps: any) => (
      <TextField size='small' sx={{ fontSize: "12px" }} {...inputProps} />
    )}
  </InputMask>
)

export default MaskedTextField
