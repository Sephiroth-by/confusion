import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Promotions } from './promotions';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { Leaders } from './leaders';
import { Dishes } from './dishes';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
        dishes: Dishes,
        promotions: Promotions,
        leaders: Leaders,
        comments: Comments,
        ...createForms({
            feedback: InitialFeedback
        })
    }), applyMiddleware(thunk, logger)
    );

    return store;
}