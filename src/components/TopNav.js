import React from "react";
import './Nav.css'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../theme";
import { Box, IconButton, Popover, Typography, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
export default  function TopNav(){
    const [theme, colorMode] = useMode();
    
    return(<>
<div id='nav' >
<h5 id=""> </h5>
<h5 id="Logo">Think Tank Tribe</h5>
<div> 
<IconButton  sx={{ ml: 2, flex: 1 }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        </div>
       
</div>

</>
    );
}