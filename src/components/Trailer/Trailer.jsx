import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieTrailer } from "../../Service/api";
import ReactPlayer from "react-player";
import Container from '../Container/Container';


import s from "./Trailer.module.css";

export default function Trailer() {
  const { movieId } = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fetchMovieTrailer(movieId).then((data) => {
      setVideo(data.results);
    });
  }, [movieId]);

  const BASE_VIDEO = "https://www.youtube.com/watch?v=";

  return <div className={s.containt}> {
    video.length > 0 ? (<div className={s.contentVide}>
      {video.slice(0, 5).map(({ key, id, name }) => {
        return <div className={s.videocont} key={id}>
        <h1>{name}</h1>
        <ReactPlayer url={`${BASE_VIDEO}${key}`} width="100%" height="600px"  className={s.video} controls  />
        </div>
      })}
      </div>
    )
    : <p className={s.contentR}>no items found</p>
    }
  </div>

  
}
