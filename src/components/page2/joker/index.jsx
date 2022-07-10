import './styles.css'; 
import React from 'react';

function Joker() {
    return ( 
        <div className="joker_body">
            <div className='text'>
                <h1>Watch Joker Now</h1>
                <p>Forever alone in a crowd, failed comedian Arthur Fleck seeks<br/>connection as he walks the streets of Gotham City.</p>
                <button>Play</button>
            </div>
        </div>
     );
}

export default React.memo(Joker);