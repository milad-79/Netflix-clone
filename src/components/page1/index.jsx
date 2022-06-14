import React from 'react';
import HeaderLogPage from '../haeder/hader-page-login';
import Subscribe from '../susbscribe';
import MainPage1 from './main';
import CustomizedAccordions from './according';
import './styles.css';
import Footer from '../footer';

function Page1() {
    return ( 
        <div>
            <HeaderLogPage/>
            <Subscribe/>
            <MainPage1/>
            <CustomizedAccordions/>
            <Footer/>
        </div>
     );
}

export default React.memo(Page1);