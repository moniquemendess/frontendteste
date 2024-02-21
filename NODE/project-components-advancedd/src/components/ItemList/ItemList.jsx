
/**
 *  Metodo map para recoger cada elemento del arreglo y devuelvo un nuevo arreglo
 */
export const ItemList = ({itens}) => {
  return (
    <ul>{itens.map((item, index)=>
        <li key={index}>{item}</li>)}</ul>
  )
}
