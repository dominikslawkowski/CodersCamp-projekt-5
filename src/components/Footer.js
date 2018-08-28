import React from 'react';
import './../style/Footer.css';
const footerStyle = {
    background: 'black',
    padding: '10vh 0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#9eb3ff'
}
const teamList = {
    width: '40vw',
    listStyle: 'none',
}
const personalListItem = {
    borderBottom: 'solid 1px white',
    borderLeft: 'solid 1px white',
    marginBottom: '20px',
    paddingBottom: '6px',
    paddingLeft: '6px',
    width: '40vw',
    borderBottomLeftRadius: '6px'
}
const personalButton = {
    border: 'solid 1px white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
    height: '30px',
    textTransform: 'uppercase',
    letterSpacing: '0.1rem',
    cursor: 'pointer',
    borderBottomLeftRadius: '7px'
}

export default class Footer extends React.Component {
    render(){
        return(
            <footer style={footerStyle}>
                <p className='footerDescription'>CodersCamp 2018, 5th excercise: coding in team under conditions of time pressure.
                    Technologies and skills: React, React advanced,
                    Reduct - basics, obiect oriented JavaScript, GIT, Source Tree, bash&amp;cmd panels,
                    API, AJAX, promises, webpack-advanced, yarn and more.
                </p>
                <p>Coded by team:</p>
                <ul style={teamList}>
                    <li style={personalListItem}>
                        <p>Dominik Sławkowski</p>
                        <p>responsibility:</p>
                        <p>Team Mentor, project configuration, API, project management</p>
                        <div style={personalButton}><a target="_blank" className='personalLink' href='www.github.com/dominikslawkowski'>See my repo</a></div>
                    </li>
                    <li style={personalListItem}>
                        <p>Arkadiusz Klusa</p>
                        <p>responsibility:</p>
                        <p>Welcome component, data flow</p>
                        <div style={personalButton}><a target="_blank" className='personalLink' href='https://github.com/Aklusa'>Do You like it?</a></div>
                    </li>
                    <li style={personalListItem}>
                        <p>Imię nazwisko</p>
                        <p>responsibility:</p>
                        <p>SearchBar component, API data flow, searching terms handling, serching terms validation</p>
                        <div style={personalButton}><a target="_blank" className='personalLink' href='#'>I can do more</a></div>
                    </li>
                    <li style={personalListItem}>
                        <p>Imię nazwisko</p>
                        <p>responsibility:</p>
                        <p>Category buttons component, category data flow, category data providing</p>
                        <div style={personalButton}><a target="_blank" className='personalLink' href='#'>Check this out</a></div>
                    </li>
                    <li style={personalListItem}>
                        <p>Maciej Bartyński</p>
                        <p>responsibility:</p>
                        <p>NewsList component, footer component, vertical data flow, invalid searching results managing, user flow</p>
                        <div style={personalButton}><a target="_blank" className='personalLink' href='https://github.com/maciej-bartynski'>How about this</a></div>
                    </li>
                    <li style={personalListItem}>
                        <p>Imię nazwisko</p>
                        <p>responsibility:</p>
                        <p>News tilt component, API data displaying, cutting JSON to pieces, user experience</p>
                        <div style={personalButton}><a className='personalLink' href='#' target="_blank">It is clickable, you know</a></div>
                    </li>
                </ul>
            </footer>
        );
    }
}