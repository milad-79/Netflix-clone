import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import ReactPlayer from "react-player/lazy";
import movieTrailer from 'movie-trailer';

function  GetMovie({ title, api }) {
  const [data, setData] = useState();
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(api).then((res) => {
      setData(res.data);
    });
  }, [api]);


  const setNameMovieHandler = async (movieName) =>{
    console.log(movieName)
    const Url = await movieTrailer(movieName);
    setMovie(Url)
  }

  // back arrow func
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          color: "#fff",
          width: "30px",
          height: "100%",
          alignItems: "center",
          position: "absolute",
          left: "15px",
          zIndex: "100",
          top: "49.8%",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="back_icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  };

  // next arrow func
  const NextArrow = (props) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          width: "30px",
          height: "100%",
          alignItems: "center",
          position: "absolute",
          right: "15px",
          top: "49.8%",
          justifyContent: "center",
        }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "30px" }}
          className="next_icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };

  // setting for silder
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="show_movie_container">
      <div className="movie_body">
        <h3>{title}</h3>

        <Slider {...settings}>
          {data &&
            data.results.map((item) => (
              <div className="movie" key={item.id} onClick={()=>setNameMovieHandler(item.title || item.original_title)}>
                <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.original_title} />
              </div>
            )) 
            }
        </Slider>
      </div>

      {
        movie ?

        <div className="video_body">
          <ReactPlayer url={movie} width="100%" height="100%" playing controls={true}/>
        {/* close btn for close module triler */}
          <div className="close_body" onClick={()=> setMovie('')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="close_icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>

        :

        null
      }
    </div>
  );
}

export default React.memo(GetMovie);
