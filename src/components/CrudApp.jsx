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

  const [isEditing, setIsEditing] = useState(false);

  function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele !== value; 
    });
  }

  const createData = (data)=>{
    data.id = dataBase.length + 1
    setDataBase([...dataBase,data]);

  } 
  const deleteStudent = (id)=>{
    let clone = [...dataBase];
    arrayRemove(clone,id);
    setDataBase(clone);
  } 
  const updateStudent = (data)=>{

  }

  return (
    <div>
       <article>
        <h2>Add Student</h2>
        <CrudForm createData={createData}></CrudForm>
       </article>

       <article>
        <h2>Students</h2>
        <CrudTable dataBase={dataBase} deleteStudent={deleteStudent}></CrudTable>
       </article>
    </div>
  )
}

export default CrudApp