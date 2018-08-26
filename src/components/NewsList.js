import React from "react";
import News from "./News";

const styleForContainerOfNews = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  width: "100%",
  margin: "0 auto",
  overflow: "hidden"
};

class NewsList extends React.Component {
  static defaultProps = {
    newsList: [],
  };

  constructor(props){
    super(props);
    this.state = {
      newsList: this.props.news
    };
  }
    render() {
      let tabOfElementsToDisplay = [];
      const divideNewsBetweenTilts = arrayOfNewsObjects => {
        arrayOfNewsObjects.forEach((newsObject, idxOfNewsObject) => {
          const elementToDisplay = (
            <News key={idxOfNewsObject} news={newsObject} />
          );
          tabOfElementsToDisplay.push(elementToDisplay);
        });
      };
      if (this.state.newsList && this.state.newsList.length > 1) {
        divideNewsBetweenTilts(this.state.newsList);
      } else if (this.state.newsList.length === 0) {
        tabOfElementsToDisplay = [<div key="0">sorry, something went wrong</div>];
      }
      return <div style={styleForContainerOfNews}>{tabOfElementsToDisplay}</div>;
    }
  }
    

export default NewsList;