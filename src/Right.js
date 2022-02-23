import React from 'react';
import "./Right.css";

function Right() {
  return (
    <div className="right">
      <div className="right_div">
        <button className="button_ava">Avalanche</button>
        <button className="button_ox">OXF6....1353</button>
      </div>
      <div className="right_div2">
        <h3 className="right_heading">Custom link</h3>
      </div>
    
      <div className="right_input">
      <text >https//testnet.xyz.xyz/trade?ref=</text>
      </div>
      <div className="right_right">
      <input className="right_input0" placeholder="Enter" />
      </div>
      
      <div className="right_div3"> 
        <button className="button1">Custom link</button>
        <button className="button2">cancel</button>
      </div>
    </div>
  );
}

export default Right;