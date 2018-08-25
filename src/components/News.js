import React from 'react';
export class News extends React.Component {
    render(){
        return(
            <div>
                <h3>
                    {this.props.article['title']}
                </h3>
                <p> 
                    {
                        this.props.article['author']
                    }
                </p>
                < p > {
                        this.props.article['description']
                    } 
                    </p>
            </div>
        )
    }
}