import { useState,useEffect } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';

function CrudApp() {

    const initialDB = 
      [
      
      ]

  const [dataBase, setDataBase] = useState(initialDB);

  const [isEditing, setIsEditing] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  let api = helpHttp();

  let url = 'http://localhost:3001/students';

  useEffect(() => {

    setLoading(true);

    api.get(url).then(res=>{
    

      if(!res.err){
        setDataBase(res);
        setError(null);
      }else{
        setError(res);
      }

      setLoading(false);

    });
  }, [])

  const createData = (data)=>{
    let options = {
      body:data,
      headers:{"content-type":"application/json"}};
      
    api.post(url,options)
    .then(res=>{
      if(!res.err){
        setDataBase([...dataBase,res]);
      }
      else{
        setError(res);
      }
    })
  } 
  const deleteData = (id)=>{
    let isDelete = window.confirm('Estas seguro de eliminarlo?')
    let delUrl = `${url}/${id}`;
    if(isDelete){
      api.del(delUrl)
      .then(res=>{
        if(!res.err){
          let newData = dataBase.filter(e=> e.id !== id);
          setDataBase(newData);
        }
        else{
          setError(res)
        }
      });     
    }
  } 
  const updateStudent = (data)=>{
    let options = {
      body:data,
      headers:{"content-type":"application/json"}
    }

    let putUrl = `${url}/${data.id}`;

    api.put(putUrl,options)
      .then(res=>{
        if(!res.err){
          let newData = dataBase.map(e=>(e.id === data.id ? data : e))
          setDataBase(newData);
        }
        else{
          setError(res)
        }
      })
  }

  return (
    <div className='crud-app'>
        <CrudForm 
        createData={createData} 
        updateStudent={updateStudent} 
        isEditing={isEditing} 
        setIsEditing={setIsEditing}
        >
          </CrudForm>        
        <CrudTable 
        dataBase={dataBase} 
        deleteData={deleteData} 
        setIsEditing={setIsEditing}
        loading={loading}
        error={error}>
          </CrudTable>  
    </div>
  )
}

export default CrudApp