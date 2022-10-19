import React from 'react'
import { useState } from 'react';

function CrudForm({createData}) {

const initialForm = {
    name:'',
    age:'',
    id:null
}

let [form, setForm] = useState(initialForm);

const HandleSubmit = (e)=>{
    e.preventDefault();
    createData(form);
    HandleReset(e);
}

const HandleFormChange = (e) => {
setForm({...form,[e.target.name]: e.target.value})
}

const HandleReset= (e) =>
{
    setForm(initialForm);
    e.target.name.value='';
    e.target.age.value='';
}
  return (
    <form onSubmit={HandleSubmit}>
         <input placeholder='Name' name='name' type="text" onChange={HandleFormChange} required/>
         <input placeholder='Age' name='age' type="number" onChange={HandleFormChange} required/>
         <input type="hidden" />
         <input type="submit" value='Send'/>
    </form>      
      
  )
}

export default CrudForm