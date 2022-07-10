import React from 'react';
import './styles.css';

function Subscribe() {
    return ( 
        <div className="sub_body">
                <div className='sub_content'>
                    <h2>Unlimited films, Tv<br/> programmes and more.</h2>
                    <span>Watch anywhere. Cancel at any time.</span>
                    <div className='sub_input_body'>
                        <input type='text'/>
                        <button>
                            TRY IT NOW
                        </button>
                    </div>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
        </div>
     );
}

export default React.memo(Subscribe);