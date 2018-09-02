import axios from 'axios';

export const API_KEY = 'aabf6ff51a5c42ffaec96e55c6af6297';
export const GET_ARTICLES = 'GET_ARTICLES';

export const newsSearch = (term, search, country) => {
    const request = axios.get(
        `https://newsapi.org/v2/everything?pageSize=30&language=${country}&q=${term}&apiKey=${API_KEY}`
    );
    return dispatch => {
        request
            .then(({data}) => {
                dispatch({
                  type: GET_ARTICLES,
                  payload: data.articles
                });
            });
        };
            
        

}


