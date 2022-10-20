import React from 'react'
import CrudRow from './CrudRow'

function CrudTable({dataBase,deleteData,setIsEditing}) {
  return (
  <div>
    <h2 className='data-table'>Data Table</h2>
     <table>
            <thead>
                <tr>
                    <td> <b>Name</b> </td>
                    <td><b>Age</b> </td>
                    <td><b>Actions</b> </td>
                </tr>
            </thead>
            <tbody>
                {dataBase.map(e=><CrudRow key={e.id} e={e} deleteData={deleteData} setIsEditing={setIsEditing}/>)}
            </tbody> 
     </table>
     </div>
  )
}
export default CrudTable