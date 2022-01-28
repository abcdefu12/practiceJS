import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movies({coverImg, title, summary, genres}){
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <h2>
              <Link to="/movie">{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
              {genres.hasOwnProperty("genres") ? 
                <ul>
                  {genres.map(g => 
                    <li key={g}>{g}</li> 
                  )}
                </ul>
              : null}
            </ul>
        </div>
    );
}

Movies.propTypes ={
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;




// <div key={movie.id}>
//     <img src={movie.medium_cover_image} />
//     <h2>{movie.title}</h2>
//     <p>{movie.summary}</p>
//     <ul>
//         {movies.hasOwnProperty("genres") ? 
//         <ul>
//             {movie.genres.map(g => 
//             <li key={g}>{g}</li> 
//             )}
//         </ul>
//         : null}
//     </ul>
// </div>