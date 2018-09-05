import React from "react";
import TemporaryButton from './../MainPage/TemporaryButton/index';
import VisitedList from './VisitedList/index'

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
                <TemporaryButton/>
                <VisitedList news={this.state.cookies}/>
            </div>
        );
    }
}

export default Prefer;