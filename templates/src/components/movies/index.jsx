import { Link } from "react-router-dom"
import star from '../../assets/images/star.png';
import cake from '../../assets/images/cake.png';

export const Movies = ({movie}) => {
    
    
    return (
        <div className='movie' key={movie.id}>
            <Link to={`/movies/${movie.id}`}><img src={movie.image} alt='poster' width={255} height={357} /></Link>
            <div className='movie-title'>
                <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}><h5 className='movie-title-heading'>{movie.title}</h5></Link>
            </div>
            <div className='movie-row'>
                <div className='col movie-col'><img src={star} alt='star' width={18} style={{ marginRight: 7 }} /> {movie.star_rating.map((rating) => rating.star)}.{Math.floor(Math.random() * 4) + 1}</div>
                <div className='col movie-col'><img src={cake} alt='cake' style={{ marginRight: 7 }} /> {Math.floor(Math.random() * (99 - 65)) + 65}%</div>
            </div>
        </div>
    )
}