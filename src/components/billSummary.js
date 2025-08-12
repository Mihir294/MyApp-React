import React from 'react'
import './billSummary.css'


export default function billSummary(props) {
  return (
    <div className='billSummary'>
        <div className="billhead">
        <p>Billsummary:</p>
        </div>

        <div className="billcontent">
            <p>Name:{props.valueName}</p>
            </div>
    </div>
  )
}
