import React from "react";
import VisitedList from './VisitedList/index';
import {LinkButton} from './style';
import {Link} from 'react-router-dom';
import Footer from './../MainPage/Footer/index';

class Prefer extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            cookies: [],
        }
    }

    componentDidMount(){
        let cookiesArr = JSON.parse(localStorage.getItem('visited'));
        this.setState({
            cookies: cookiesArr
        })
    }
    
    render(){
        return (
            <div>
                <Link to="/">
                    <LinkButton>Back</LinkButton>
                </Link>

                <VisitedList news={this.state.cookies}/>
                <Footer/>
                </div>
        );
    }
}

export default Prefer;