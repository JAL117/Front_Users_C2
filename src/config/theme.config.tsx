import { createTheme , CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";

type ThemeProp ={
    children : JSX.Element;
}


export enum themePalette{
    BG = "#BE9CDA ",
    LIME = "#A02DFF",
    FONT_GLOBAL = "JetBrains Mono , monospace",
}


const theme = createTheme({
    palette :{
        mode:"dark",
        background:{
            default:themePalette.BG,
        },
        primary:{
            main:themePalette.LIME
        },

    },
    typography:{
        fontFamily:themePalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform: "none",
                    boxShadow:"none",
                    borderRadius:"15px"
                }
            }
        }
    }
})



export const ThemeConfig : React.FC<ThemeProp>=({children})=>{
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    )
}