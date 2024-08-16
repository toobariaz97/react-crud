import { createStore } from 'redux';
import rootReducer from './slices'

const store = createStore(
    rootReducer,
)

export default store;