import React from 'react';
import Joker from './joker';
import HeaderPages from '../haeder/hader-pages/index'
import Footer from '../footer';
import GetMovie from './movies/getMovie';
import { requests } from '../../movieApi';


function Page2Com() {
    return ( 
        <React.Fragment>
            <HeaderPages/>
            <Joker/>
            <GetMovie title="Trending" api={requests.fetchTrending} />
            <GetMovie title="TopRated" api={requests.fetchTopRated} />
            <GetMovie title="RomanceMovies" api={requests.fetchRomanceMovies} />
            <GetMovie title="NetflixOriginals" api={requests.fetchNetflixOriginals} />
            <GetMovie title="HorrorMovies" api={requests.fetchHorrorMovies} />
            <GetMovie title="Documentaries" api={requests.fetchDocumentaries} />
            <GetMovie title="ComedyMovies" api={requests.fetchComedyMovies} />
            <GetMovie title="ActionMovies" api={requests.fetchActionMovies} />
            <Footer/>
        </React.Fragment>
     );
}

export default React.memo(Page2Com);