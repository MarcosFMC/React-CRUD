import React from 'react'

function CrudRow({e,deleteData,setIsEditing}) {
  return (
    <tr>
     <td>{e.name}</td>
     <td>{e.age}</td>
     <td>
        <button onClick={()=>{setIsEditing(e)}}>Edit</button>
        <button onClick={()=>{deleteData(e.id)}}>Delete</button>
     </td>

    </tr>
  )
}

export default CrudRow