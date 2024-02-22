import { HOBBIES } from "../../Hobbies/Hobbies"

export const Movies = () =>{

const {movies}= HOBBIES;

  return (
    <div>
        <h2>My favorite movies</h2>
        <ul>

        {movies.map((movie, index)=>(
            <li key= {index}>
       <strong>{movie.name}</strong> ({movie.type}): {movie.genre} - Voto: {movie.vote}

            </li>
        ))}
        </ul>
          
    </div>
  )
}
