import {
 
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Category  from "./components/categories";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { Box, IconButton, Popover, Typography, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkMode";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
function App() {
 

   

 

  const [theme, colorMode] = useMode();
  return (  <ColorModeContext.Provider value={colorMode}>   
    <ThemeProvider theme={theme}>
      <CssBaseline/>
       
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
         
    <div className="App">
 
   <Routes>    <Route path="/" element={<Home></Home>} ></Route>
            <Route path="/category" element={<Category ></Category>}></Route>
             
            
              
                    </Routes>
                    
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
