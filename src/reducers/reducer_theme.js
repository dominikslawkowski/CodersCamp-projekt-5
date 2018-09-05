import {CURRENT_THEME} from '../actions/index';

const theme = (state = null, action) => {
    switch(action.type) {
        case CURRENT_THEME:
            return action.payload;
        default:
            return state;
    }
};

export default theme;