import React, {Component} from 'react';
import {
        Container, 
        CategoriesWrapper, 
        Inscription, 
        ListCategory,
        Span,
        SpanLeft,
        SpanRight,
        Category
       } from './style';


const categoryColors = ['rgb(252, 211, 30)','rgb(255, 0, 0)', 'rgb(61, 216, 255)', 'rgb(255, 255, 255)', 'rgb(174, 53, 255)',
                            'rgb(9, 255, 0)'];

const categoryDisplayDelay = ['1.05s', '1.15s', '1.25s', '1.15s', '1.25s', '1.35s'];

const wordDisplayDelay = ['.2s', '.4s', '.6s', '.8s', '1s'];

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
                <SpanRight delay={wordDisplayDelay[0]}>What</SpanRight> 
                <SpanLeft delay={wordDisplayDelay[1]}> news</SpanLeft>
                <Span delay={wordDisplayDelay[2]}> do</Span>
                <Span delay={wordDisplayDelay[3]}> You</Span> 
                <Span delay={wordDisplayDelay[4]}> prefer?</Span>
            </Inscription>
            <CategoriesWrapper>
                <ListCategory>
                 {this.state.categories.map((name, i)=>{
                    return <Category
                            key={i}
                            color={categoryColors[i]}
                            delay={categoryDisplayDelay[i]}
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