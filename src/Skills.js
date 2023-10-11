import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import { Sidebar, Menu, MenuItem,SubMenu } from "react-pro-sidebar";
import { Routes, Route, Link } from "react-router-dom";
import House from './House';
import Dashboard from './Dashboard';
import Transaction from './Transaction';

 import './main.css';
 import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
 import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import TimelineRoundedIcon from "@mui/icons-material/TimelineRounded";
import BubbleChartRoundedIcon from "@mui/icons-material/BubbleChartRounded";
import WalletRoundedIcon from "@mui/icons-material/WalletRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import SavingsRoundedIcon from "@mui/icons-material/SavingsRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import SettingsApplicationsRoundedIcon from "@mui/icons-material/SettingsApplicationsRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import UpdateRoundedIcon from '@mui/icons-material/UpdateRounded';
import SelfImprovementRoundedIcon from '@mui/icons-material/SelfImprovementRounded';

const Skills = () => {
    return (
        <div style={{ display: "flex", height: "100vh" }}>
        <div className="app">
          <Menu>
            <MenuItem
              component={<Link to="/" className="link" />}
              className="menu1"
              icon={<MenuRoundedIcon />}
            >
              <h2>Skills</h2>
            </MenuItem>
          
          
            <SubMenu label="MS OFFICE" icon={<BarChartRoundedIcon />}>
              <MenuItem 
              component={<Link to="dashboard" className="link" />}
               icon={<TimelineRoundedIcon />}> MS EXCEL </MenuItem>
              <MenuItem 
              component={<Link to="dashboard" className="link" />}
              icon={<BubbleChartRoundedIcon />}>MS WORD</MenuItem>
              <MenuItem 
              component={<Link to="dashboard" className="link" />}
              icon={<BubbleChartRoundedIcon />}>MS EXCESS</MenuItem>
              <MenuItem icon={<BubbleChartRoundedIcon />}>MS POWERPOINT</MenuItem>
            </SubMenu>
            <SubMenu label="JAVASCRIPT" icon={<WalletRoundedIcon />}>
              <MenuItem 
              component={<Link to="dashboard" className="link" />}
              icon={<SelfImprovementRoundedIcon />}>Node JS
              </MenuItem>
              <MenuItem 
              component={<Link to="dashboard" className="link" />}
              icon={<SelfImprovementRoundedIcon />}>Express JS
              </MenuItem>
              <MenuItem 
              component={<Link to="dashboard" className="link" />}
              icon={<SelfImprovementRoundedIcon />}>React JS
              </MenuItem>
              <MenuItem 
              component={<Link to="dashboard" className="link" />}
              icon={<SelfImprovementRoundedIcon />}>Next JS
              </MenuItem>
               </SubMenu>
              
            <MenuItem
              component={<Link to="transaction" className="link" />}
              icon={<UpdateRoundedIcon />}
            >HTML
               
            </MenuItem>
            <SubMenu label="CSS" icon={<SettingsApplicationsRoundedIcon />}>
              <MenuItem icon={<AccountCircleRoundedIcon />}> SCSS</MenuItem>
              <MenuItem icon={<ShieldRoundedIcon />}> SaaS</MenuItem>
              <MenuItem icon={<NotificationsRoundedIcon />}>
                Less
              </MenuItem>
            </SubMenu>
            <MenuItem icon={<LogoutRoundedIcon />}> BOOTSTRAP</MenuItem>
            <MenuItem icon={<LogoutRoundedIcon />}> Material</MenuItem>
            
            <SubMenu label="Testing" icon={<SettingsApplicationsRoundedIcon />}>
              <MenuItem icon={<AccountCircleRoundedIcon />}> Jest</MenuItem>
              <MenuItem icon={<ShieldRoundedIcon />}> Mocha</MenuItem>
              <MenuItem icon={<NotificationsRoundedIcon />}>
                Chai
              </MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <section>
          <Routes>
           
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transaction" element={<Transaction />} />
          </Routes>
        </section>
      </div>
    );
  };
  export default Skills;

