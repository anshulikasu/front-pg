import React from 'react';
import "./Sidebar.css";
import SideRow from './SideRow';

import Avatar from '@material-ui/core/Avatar';
import HomeIcon from "@material-ui/icons/Home";
import BarChartIcon from '@material-ui/icons/BarChart';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Footer from "./Footer";



function Sidebar() {
  return (
    <div className="sidebar">
       
      <div className="sidebar1">
     <Avatar  />
     <h3 className="avtar_name">Name</h3>
     </div>
     <div className="sidebar2" >
    <SideRow  Icon={HomeIcon} title="Home"/>
    <SideRow Icon={BarChartIcon} title="Section 1"/>
    <SideRow  Icon={MonetizationOnOutlinedIcon} title="Section 2"/>
    <SideRow Icon={BarChartIcon} title="Section 1"/>
    <SideRow  Icon={MonetizationOnOutlinedIcon} title="Section 2"/>
    <Footer />
   
    

    </div>
    
   </div>
       
  );
}

export default Sidebar