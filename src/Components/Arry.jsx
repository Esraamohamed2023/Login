import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faUser } from '@fortawesome/free-solid-svg-icons'
import check from"../images/check.png"
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import"./Login.css"
import Test from"./Test"
import "./Popup.css"


export default function Arry() {

  const [count, setCount] = useState(false);

 const [tab, settab] = useState(false);

  return (
<div>
<div className='login col-sm-12 col-md-6 col-lg-8'>
<div className='container col-sm-12 '>
<div className='big col-sm-12 '>
<div className='divicon '>
<FontAwesomeIcon icon={faUser} className="icon" />
</div>
</div>
<h3>Login</h3>
<form className='col-sm-12'>
<input type={"text"} placeholder="Enter Email"/>
<input type={"password"} placeholder="Enter Password"/>
</form>
<button className='col-sm-12 frs' onClick={()=>setCount(!count)}>Login</button>
<button className='create col-sm-12 frs' onClick={()=>settab(!tab)}>Create Your Account</button>
   </div> 
</div>
{
count &&<div><div className='popup col-sm-12 col-md-6 col-lg-6  '>
<FontAwesomeIcon icon={faXmark} className="xx"  onClick={()=>setCount(!count)}/>
<img src={check} alt="image not found"/>
<h2>Thank You!</h2>
<button onClick={()=>setCount(!count)}>OK</button>
</div>
</div>
}

    
{tab&&
<div className='formapp col-sm-12 col-md-6 col-lg-6'>
<input type={"text"} placeholder="Enter  Name" />
<input type={"text"} placeholder="Enter  Email" />
<input type={"text"} placeholder="Enter  Password" />
<input type={"text"} placeholder="Password Confirmation" />

<button  onClick={()=>settab(!tab)}><input type={"submit"}  value="Submit"/></button></div>}
</div>

  )
}

