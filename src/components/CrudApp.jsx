import { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


function CrudApp() {
  
    const initialDB = 
      [
        {
          id: 1,
          name: "Marcos",
          age: 21
        },
        {
          id: 2,
          name: "Alonso",
          age: 31
        },
        {
          id: 3,
          name: "Rivaldo",
          age: 22
        },
        {
          id: 4,
          name: "Lucas",
          age: 8
        }
      ]

  const [dataBase, setDataBase] = useState(initialDB);

  const [isEditing, setIsEditing] = useState(null);

  const createData = (data)=>{
    data.id = new Date().getMilliseconds();
    setDataBase([...dataBase,data]);

  } 
  const deleteData = (id)=>{
    let isDelete = window.confirm('Estas seguro de eliminarlo?')

    if(isDelete){
      let newData = dataBase.filter(e=> e.id !== id);
      setDataBase(newData);
    }    
  } 
  const updateStudent = (data)=>{
    let newData = dataBase.map(e=>(e.id === data.id ? data : e))
    setDataBase(newData);
  }

  return (
    <div className='crud-app'>
        <CrudForm createData={createData} updateStudent={updateStudent} isEditing={isEditing} setIsEditing={setIsEditing}></CrudForm>        
        <CrudTable dataBase={dataBase} deleteData={deleteData} setIsEditing={setIsEditing}></CrudTable>  
    </div>
  )
}

export default CrudApp