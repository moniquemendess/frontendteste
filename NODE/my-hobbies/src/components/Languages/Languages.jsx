/**Passos:
 * Destruturing del Hobbies para extrair el objecto languages
 * acendiendo a los obj con . + propriedad
 */

import { HOBBIES } from "../../Hobbies/Hobbies"

export const Languages = () => {
    const {languages} = HOBBIES;

  return (
    <div>   
                <h2>My Language </h2>
               <p>Language: {languages.language}</p>
              <p> Wr level: {languages.wrlevel}</p>
              <p> Sp level: {languages.splevel}</p>
    </div>
  )
}
