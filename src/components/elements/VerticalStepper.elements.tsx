import React from "react"
import {
  Stepper,
  Step,
  StepLabel,
  Typography,
  Stack,
  styled
} from "@mui/material"
import { StepIconProps } from "@mui/material/StepIcon"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

interface IStepsItems {
  label: string
  value: string
}

interface IVerticalStepperProps {
  steps: IStepsItems[]
  activeStep: number
}

const CustomStepIconRoot = styled("div")<{
  ownerState: { active?: boolean; completed?: boolean }
}>(({ theme, ownerState }) => ({
  backgroundColor:
    ownerState.active || ownerState.completed
      ? theme.palette.primary.main
      : theme.palette.primary.main,
  opacity: ownerState.active || ownerState.completed ? 1 : 0.4,
  color: theme.palette.secondary.main,
  width: 20,
  height: 20,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 3,
  fontSize: "12px"
}))

const CustomStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props

  return (
    <CustomStepIconRoot
      ownerState={{ active, completed }}
      className={className}
    >
      {completed ? (
        <CheckCircleIcon
          color='secondary'
          sx={{
            fontSize: "27px",
            paddingBottom: "4px",
            paddingRight: "2px"
          }}
        />
      ) : (
        props.icon
      )}
    </CustomStepIconRoot>
  )
}

const VerticalStepper = (props: IVerticalStepperProps) => {
  console.log(props.activeStep)

  return (
    <Stepper orientation='vertical' activeStep={props.activeStep}>
      {props.steps.map((step, key) => (
        <Step key={key}>
          <StepLabel StepIconComponent={CustomStepIcon}>
            <Stack
              direction={"row"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant='body1' fontWeight={600} color='primary'>
                {step.label}
              </Typography>
              <Typography variant='body1' fontWeight={600} color='primary'>
                {step.value}
              </Typography>
            </Stack>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default VerticalStepper
