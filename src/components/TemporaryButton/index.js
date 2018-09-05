import React from 'react';
import {Temporary, Temporaryb} from './style.js';


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class TemporaryButton extends React.Component {
        
    render(){
        
        return(
            <div>
                <Temporary>
                    <Link to="/">
                        Home
                    </Link>
</Temporary> <Temporaryb>
                    <Link to="/prefer">
                       Prefer
                    </Link></Temporaryb>
                    </div>
                
       
        )
    }
}

export default TemporaryButton;
