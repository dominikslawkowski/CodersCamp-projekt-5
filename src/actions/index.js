import axios from 'axios';

export const API_KEY = '155e14eaccb64412a527de0b3a5ad3aa';
export const GET_ARTICLES = 'GET_ARTICLES';
export const CURRENT_THEME = 'CURRENT_THEME';

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

export const setCurrentTheme = theme => {
    return dispatch => {dispatch({
        type: CURRENT_THEME,
        payload: theme
    });
    };
}


