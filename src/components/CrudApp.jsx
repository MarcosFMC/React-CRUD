import { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';


function CrudApp() {
    // useEffect(() => {
    //   console.log('Fase de montaje de CRUD');
    //   fetch('http://localhost:3000/students')
    //   .then(res =>res.ok ? res.json() : Promise.reject(res))
    //   .then(json =>{
    //     json.forEach(element => {
    //         // let $templateClone = studentTemplate.cloneNode();
    //         // console.log($templateClone);
    //         // $fragment.appendChild($templateClone);
    //     });
    //     // $table.querySelector('tbody').appendChild($fragment);
    //   })
    //   .catch(err =>{
    //     console.log(err);
    //   })
    // }, []) 
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
    <div>
       <article>
        {isEditing !== null ? <h2>Edit Student</h2> : <h2>Add Student</h2>}
        <CrudForm createData={createData} updateStudent={updateStudent} isEditing={isEditing} setIsEditing={setIsEditing}></CrudForm>
       </article>

       <article>
        <h2>Students</h2>
        <CrudTable dataBase={dataBase} deleteData={deleteData} setIsEditing={setIsEditing}></CrudTable>
       </article>
    </div>
  )
}

export default CrudApp