import './styles.css'
import React from 'react';
import HeaderMoviePage from '../haeder/header-page-movie';
import Joker from './joker';
import Movies from './movies';


function Page2Com() {
    return ( 
        <React.Fragment>
            <HeaderMoviePage/>
            <Joker/>
            <Movies/>
        </React.Fragment>
     );
}

export default React.memo(Page2Com);