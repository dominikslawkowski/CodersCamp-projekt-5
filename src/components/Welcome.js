import React, {Component} from 'react';
import '../style/Welcome.css';

class Welcome extends Component {
   
    constructor(props){
        super(props)

        this.state = {
            term : '',
            categories : ['Business', 'Sports', 'Technology', 'General', 'Science', 'Health']};
    }

    handleSubmit(txt){
        this.props.onClickChooseNews(txt, '');
        this.props.changeState();
    }
    
    chooseCattegory(e){
        var value = e.target.innerHTML;
        this.setState({term: e.currentTarget.innerHTML}, this.handleSubmit(value));
    }

    render(){
        return (
           <div className="welcome-container"> 
           <p className="welcome-inscription">
                <span className="word1">What</span> 
                <span className="word2"> news</span>
                <span className="word3"> do</span>
                <span className="word4"> You</span> 
                <span className="word5"> prefer?</span>
            </p>
            <div className="welcome-categories-wrapper">
                <ul className="welcome">
                 {this.state.categories.map((name, i)=>{
                    return <li 
                            className="welcome-category"
                            key={i}
                            onClick = {e => this.chooseCattegory(e)}
                            myvalue={name}>{name}</li>
                 })}
                </ul>
            </div>
           </div>     
        )
    }
}

export default Welcome;