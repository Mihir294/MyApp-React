import React from 'react'
import './menu.css'
import Google from './Google.jpg'   


export default function menu(props) {
  return (
    <div>
    <div id="template-news-card flexs">
        <div className="card">
            <div className="card-head">
                <img src={props.src} width="300px" alt="" id="card-img"/>
            </div>
            <div className="card-line">
                <h3 id="news-title">{props.name}</h3>
                <p className="news-desc" id="news-desc">{props.description}</p>
                <label for="qty">Qty : </label>
                <select name="qty" value="1" id="qty">
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                    <option value="1">4</option>
                    <option value="1">5</option>
                </select>
                <br />
                <div className='flexs'>
                <button type="button" class="btn btn-outline-primary order">Add</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
