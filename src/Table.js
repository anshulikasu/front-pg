import React from 'react'
import "./Table.css";

function Table() {
  return (
    <div className="table">
      <div className="table2">
      <table >
        <th id="ddd">Frist Tab</th>
        <th > Second Tab</th>
      </table>
      </div>
        <table className="table1">
          <tr className="table_header">
            
            <th>ASSET</th>
            <th>AMOUNT</th>
            <th>USER ACCOUNT</th>
            <th>REFERRAL EARNING</th>
          
          </tr>
          <tr className="table_row">
            <td className="table_data">Bitcoi
            <p className="table_para">put</p>
            </td>
            <td className="table_data">0.0000BNB
              <p className="table_para">Expired</p>
            </td>
            <td className="table_data">OxFbE..Of58A7D</td>
            <td className="table_data">0.000.BNB
              <p className="table_para">View on BSC scan</p>
            </td>
          </tr>
          <tr className="table_row">
            <td className="table_data">Bitcoi
            <p className="table_para">put</p>
            </td>
            <td className="table_data">0.0000BNB
              <p className="table_para">Expired</p>
            </td>
            <td className="table_data">OxFbE..Of58A7D</td>
            <td className="table_data">0.000.BNB
              <p className="table_para">View on BSC scan</p>
            </td>
          </tr>
          <tr className="table_row">
            <td className="table_data">Bitcoi
            <p className="table_para">put</p>
            </td>
            <td className="table_data">0.0000BNB
              <p className="table_para">Expired</p>
            </td>
            <td className="table_data">OxFbE..Of58A7D</td>
            <td className="table_data">0.000.BNB
              <p className="table_para">View on BSC scan</p>
            </td>
          </tr>
         
          
        </table> 
    </div>
  )
}

export default Table;