import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        action: {
            active: '#6B7280',
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)'
        },
        background: {
            default: '#E3E4E4',
            paper: '#FFFFFF'
        },
        divider: '#E4E4E4',
        primary: {
            main: '#1C3C6A',
        },
        secondary: {
            main: '#65d0a0'
        },
        text: {
            primary: '#4d4d4d',
            secondary: '#4d4d4d',
            disabled: 'rgba(55, 65, 81, 0.48)'
        }
    },
    shape: {
        borderRadius: 8
    },
    typography: {
        fontFamily: 'Nunito',
        h1: {
            fontWeight: 900,
            fontStyle: 'normal',
            fontSize: '2em',
            lineHeight: 1.375
        },
        h2: {
            fontWeight: 700,
            fontSize: '1.5em',
            lineHeight: 1.375
        },
        h3: {
            fontWeight: 700,
            fontSize: '1.2em',
            lineHeight: 1.375
        },
        h4: {
            fontWeight: 700,
            fontSize: '1em',
            lineHeight: 1.375
        },
        h5: {
            fontWeight: 600,
            fontSize: '.85em',
            lineHeight: 1.375
        },
        h6: {
            fontWeight: 600,
            fontSize: '.70em',
            lineHeight: 1.375
        },
        body1: {
            fontSize: '1.2em',
            fontWeight: 400,
            lineHeight: 1.5
        },
        body2: {
            fontSize: '.700em',
            fontWeight: 400,
            lineHeight: 1.57
        },
        subtitle1: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1.75
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.57
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.5px',
            lineHeight: 2.5,
            textTransform: 'uppercase'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                sx: {
                    borderRadius: '5px',
                    backgroundColor: "#fff",
                    color: '#003366',
                    fontWeight: '400',
                    ":hover": {
                        backgroundColor: "#f0f0f0",
                        color: "#003366",
                        opacity: 900
                    }
                }
            }
        },
        MuiTypography: {
            defaultProps: {
                color: 'primary'
            }
        },
    }
} as const)

export default theme