import React from 'react'
import CrudRow from './CrudRow'
import Loader from './Loader'
import Message from './Message'

function CrudTable({dataBase,deleteData,setIsEditing,loading,error}) {
  return (
  <div>
    <h3 className='data-table'>Data Table</h3>
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
     {loading && <Loader></Loader>}
     {error && <Message error={error}></Message>}
     </div>
  )
}
export default CrudTable