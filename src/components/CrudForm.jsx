import React, { useEffect } from 'react'
import { useState } from 'react';

function CrudForm({createData,updateStudent,isEditing,setIsEditing}) {

const initialForm = {
    name:'',
    age:'',
    id:null
}

let [form, setForm] = useState(initialForm);

useEffect(() => {
    if(isEditing !== null){
        setForm(isEditing)
    }
    else{
        HandleReset();
    }
}, [isEditing])

const HandleSubmit = (e)=>{

    if(isEditing === null){
        e.preventDefault();
        createData(form);
         HandleReset(e);
    }
    else{
        e.preventDefault();
        updateStudent(form);
        HandleReset(e);
    }
}

const HandleFormChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
}

const HandleReset= (e) =>
{
    setForm(initialForm); 
    setIsEditing(null);
}
  return (
    <form onSubmit={HandleSubmit}>
        {isEditing !== null ? <h3>Edit Student</h3> : <h3>Add Student</h3>}
         <input placeholder='Name' name='name' type="text" value={form.name} onChange={HandleFormChange} required/>
         <input placeholder='Age' name='age' type="number" value={form.age} onChange={HandleFormChange} required/>
         <input type="hidden" />
         <input type="submit" value='Send'/>
    </form>      
      
  )
}

export default CrudForm