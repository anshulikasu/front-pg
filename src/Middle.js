import React from 'react'
import "./Middle.css";
import Reword from './Reword';
import Table from "./Table";
function Middle() {
  return (
    <div className="middle">
    <div className="text">
      <h3 className="text_heading">Section</h3>
      <text className="text_txt"> 0.2 $XYZ<button className="button_styl">Tier1</button></text>
      
    </div>
    <div>
    <img className="banner__image" src="https://placeholder.com/wp-content/uploads/2019/06/lorem-ipsum.webp" />
    </div>
    <div className="one__div">
      <h4 className="one" >Your rewords</h4>
      <h2 className="two" > $ 0.26231428</h2>
      <button>$ AVAX</button>
      <button>$doller</button>
      <button>$210 BTC</button>
    </div>
    <div className="middle_reword">
    <Reword  />
    <Reword />
    </div>
    
    <Table />
    </div>
  )
}

export default Middle