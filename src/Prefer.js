import React from "react";
import TemporaryButton from './components/TemporaryButton/index';
import {
    withRouter
} from 'react-router-dom';

class Prefer extends React.Component {
    
    render(){
        return (
        <div>
            <TemporaryButton/>
            <h1 style={{color: 'red'}}>hello, there are my preferences</h1>
        </div>)
    }
}


const PreferR = withRouter(Prefer);
export default PreferR