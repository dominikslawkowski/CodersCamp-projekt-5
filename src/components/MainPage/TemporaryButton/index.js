import React from 'react';
import {Temporary, Temporaryb, Temporaryc} from './style.js';


import {
    Link
} from 'react-router-dom';

class TemporaryButton extends React.Component {
        
    render(){
        
        return(
            <div>
            <Temporary>
                <Link to="/">Welcome</Link>     
            </Temporary>
            <Temporaryb>
                <Link to="/newslist">news</Link>     
            </Temporaryb>
            <Temporaryc>
                <Link to="/preference">like</Link>     
            </Temporaryc>
            </div>
        )
    }
}


export default TemporaryButton;
