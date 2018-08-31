import React, { Fragment } from 'react';
import { technologies, authorData } from './data';
import { 
        About, 
        TeamList, 
        Li, 
        Name,
        Description,
        GitHub,
        Label
        } from './style';

const showAuthors = authorData.map((element, index) => {
    return (
        <Fragment>
            <Li key={index}>
                <Name>{element.name}</Name>
                <Description>{element.description}</Description>
                <GitHub>{element.github}</GitHub>
            </Li>
        </Fragment>
        );
    });

const showTechnology = technologies.map((element, index) => {
    return (
        <div key={index}>{element}</div>
    );
})

export default class Footer extends React.Component {
    render(){
        return(
            <About>
            {showTechnology}
            <Label>Our Team</Label>
                    <TeamList>
                        {showAuthors}
                    </TeamList>
            </About>
        );
    }

    rollOutList(){

    }
}
