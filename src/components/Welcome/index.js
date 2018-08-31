import React, {Component} from 'react';
import '../../style/Welcome.css';
import {
        Container, 
        CategoriesWrapper, 
        Inscription, 
        ListCategory,
        Span,
        Category
       } from './style';
import '../../style/Welcome.css';

class Welcome extends Component {
   
    constructor(props){
        super(props)

        this.state = {
            term : '',
            categories : ['Business', 'Sports', 'Technology', 'General', 'Science', 'Health']};
    }

    handleSubmit(txt){
        this.props.onClickChooseNews(txt, '', this.props.country);
        this.props.changeState();
    }
    
    chooseCattegory(e){
        var value = e.target.innerHTML;
        this.setState({term: e.currentTarget.innerHTML}, this.handleSubmit(value));
    }

    render(){
        return (
           <Container> 
           <Inscription>
                <Span className="word1">What</Span> 
                <Span className="word2"> news</Span>
                <Span className="word3"> do</Span>
                <Span className="word4"> You</Span> 
                <Span className="word5"> prefer?</Span>
            </Inscription>
            <CategoriesWrapper>
                <ListCategory>
                 {this.state.categories.map((name, i)=>{
                    return <Category
                            id={`element-${i}`}
                            key={i}
                            onClick = {e => this.chooseCattegory(e)}
                            myvalue={name}>{name}
                           </Category>
                 })}
                </ListCategory>
            </CategoriesWrapper>
           </Container>     
        )
    }
}

export default Welcome;