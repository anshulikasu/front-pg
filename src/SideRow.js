import React from 'react';
import "./SideRow.css";
function SideRow({Icon, title}) {
  return (
    <div children="siderow">
      <div className="side_row">
        <Icon  />
        <h2 >{title}</h2>
        </div>
        

        
    </div>
  );
}

export default SideRow;