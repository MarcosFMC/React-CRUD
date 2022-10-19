import React from 'react'

function CrudRow({e,deleteStudent}) {
  return (
    <tr>

     <td className='name'>{e.name}</td>
     <td className='age'>{e.age}</td>
     <td>
        <button className='edit-btn'>Edit</button>
        <button className='delete-btn'>Delete</button>
     </td>

    </tr>
  )
}

export default CrudRow