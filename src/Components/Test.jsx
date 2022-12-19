import React, { Component } from 'react'
import check from"../images/check.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import "./Popup.css"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
export default class Test extends Component {
  render() {
    return (
      <div className='popup opn'>
<FontAwesomeIcon icon={faXmark} className="xx" />
<img src={check} alt="image not found"/>

   <h2>Thank You!</h2>
<button>OK</button>

      </div>
    )
  }
}

