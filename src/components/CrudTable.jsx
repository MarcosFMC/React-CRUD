import React from 'react'
import CrudRow from './CrudRow'

function CrudTable({dataBase,deleteStudent}) {
  return (
  <div>
     <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {dataBase.map(e=><CrudRow key={e.id} e={e} deleteStudent={deleteStudent}/>)}
            </tbody> 
     </table>
     </div>
  )
}
export default CrudTable