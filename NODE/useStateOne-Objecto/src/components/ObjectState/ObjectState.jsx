/**
 * Haciemos el estado con el valor defindo del objecto 
 * Accendiemos las propriedade en h4 con el 
 * Haciemos un input para cada propriedad que queremos modificar 
 * Spread operators para recuperar todas las propiedades del objeto 
 * y modificar solamente la que deseamos
 */

import { useState } from "react"

export const ObjectState =()=> {

    const [avengerInfo, setAvengerInfo] = useState({
        name:"Angela ",
        lastname: "Mendes", 
        
    })
  return (
    <>
    <h4>{avengerInfo.name} | {avengerInfo.lastname}</h4>
    <input 
    type="text" 
    value={avengerInfo.name}
    onChange={(e)=> setAvengerInfo({...avengerInfo, name: e.target.value})
    } />
    <input
     type="text" 
     value={avengerInfo.lastname}
     onChange={(e)=> setAvengerInfo({...avengerInfo, lastname: e.target.value})
    }
     />
  </>
  )
}
