import react,{useState,useEffect} from 'react';
import axios from './axios'
import axios1 from 'axios'
import './Row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'


function Row({title,fetchURL,isLargeRow}){
	
	const[movies , setMovies]= useState([]);
	const [trailerURL,setTrailerURL] = useState('');
	async function handleClick(movie){
		if(trailerURL){
			setTrailerURL('');
		}else{

				movieTrailer(movie?.name || '').then(url =>{
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerURL(urlParams.get('v'));
				}).catch((err) => console.log(err));
           		
            
        }
		
	}

	
	   const opts = {
      height: '360',
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
 
	useEffect(() => {

		async function fetchData(){
				const request= await axios.get(fetchURL);
				console.log(request);
				setMovies(request.data.results)
				return request;
		}
		fetchData();

	},[fetchURL])
	const baseURL='https://image.tmdb.org/t/p/original/'


	return (
			<div className='row' >
			
			<h2>{title}</h2>
			
			{/*container -> postors*/}
			<div className='row__posters'>
				{movies.map((movie)=>(<img onClick={()=>{handleClick(movie)}} key={movie.id} className={`row__poster ${isLargeRow && "row_poster_large"}`} src={baseURL+(isLargeRow?movie.poster_path:movie.backdrop_path)} alt={movie.name}/>))}
			</div>


		 {trailerURL && <YouTube videoId={trailerURL} opts={opts}/>}
			</div>

		)
	
}


export default Row;