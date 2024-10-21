
// ## Bonus
// Como reto, te proponemos que modifiques el ejercicio anterior y en vez de tener que clicar en el nombre para cambiar su valor crees un formulario que cuando se envíe cambie el nombre: 
// 1. Modifica el componente `App`.
// 2. Implementa una función `changeName` que se encargue de actualizar el nombre del profesor:
//    - Verifica que `newName` no esté vacío antes de actualizar el nombre.
//    - Actualiza el estado `name` con el valor de `newName`.
//    - Restablece `newName` a una cadena vacía después de actualizar el nombre.
// 4. En el JSX del componente, renderiza un formulario `<form>` con los siguientes elementos:
//    - Un campo de entrada de texto `<input>` con el atributo `type` establecido en `"text"`, el atributo `value` vinculado a `newName`, el atributo `onChange` que actualiza `newName` cuando cambia el valor y el atributo `placeholder` con el texto "add a name".
//    - Un botón `<button>` con el tipo establecido en `"submit"` y el texto "Add".
// 5. Utiliza la función `changeName` para manejar el evento `onSubmit` del formulario. Esto asegurará que el nombre se actualice cuando el formulario se envíe.
// 6. Exporta el componente `App` al final del archivo.


import { useState } from 'react'
import './App.css'
import Form from './Form'

function App() {
    //useState es un hook para declarar estados,tiene un valor inicial y va a devolver un array con dos elementos
    
    const [name, setName] = useState('Sofia')//name se inicializa con el valor 'Sofia' y setName es la función que se utilizará para actualizar name más adelante.
    const [newName, setnewName] = useState('')//newName se inicializa como una cadena vacía '', y setNewName es la función para actualizar newName.
    
    const changeName = (event) => {
    event.preventDefault()
    newName ? setName(newName) : null//si newName trae algo => setName y se newName viene vacio da null
  
}

const changeInputValue = (event) => {
  setnewName(event.target.value) //Actualizamos estado de newName
  console.log(event.target.value)
  //setnewName(changeTitleName)
}

return (
  <div>
    <h2>Teacher Name: {name}</h2>
    <ul>
      
      <li onClick={ (event) => changeName(event) }>Data</li> {/*Cuando queremos obtener el valor de alguna etiqueta ejemple:(<p>,<img>,<h2>) html invocamos una funcion anonima pasando el evento luego a la funcion que realiza el resto de la operacion.  */}
      <li onClick={ (event) => changeName(event) } >Reyes</li>
      <li onClick={ (event) => changeName(event) }>Yolanda</li>
    </ul>
    <div>
            <form action="" onSubmit={changeName}>
                <input onChange={(event) => changeInputValue(event)} type="text" placeholder='Type a name' value={newName} />
                <button type="submit">Add a name</button>
            </form>
      </div>
    {/* <Form newNameValue={newName} changeNameFunction={changeName} formHandler={formHandler} /> */}
    
  </div>
)




}



export default App


