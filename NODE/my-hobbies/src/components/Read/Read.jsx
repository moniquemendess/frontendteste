
import { HOBBIES } from "../../Hobbies/Hobbies"

export const Read = () => {
    const {read}= HOBBIES
  return (
    <>
    <div>
        <h3>title:{read.title}</h3>
        <p>Author Name: {read.authorName}</p>
        <p>Author Surname: {read.authorSurname}</p>
        <p>Genre: {read.genre}</p>
        <p>Date Of Publication: {read.dateOfPublication}</p>
        <p>Author Birth Date: {read.authorBirthDate}</p>
        {read.bookImage && <image src={read.bookImage} alt="Portada del libro"/>}
 
    </div>
    <ul>
    {read.otherBooks.map((book, index)=>(
        <li key={index}>{book.info}</li>
    ))}
    </ul>

    </>
  )
}
