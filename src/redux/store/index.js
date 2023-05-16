import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer, Reducer} from "../Reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {BasketReducer} from "../Reducer/BasketReducer";
import {FavoriteReducer} from "../Reducer/FavoriteReducer";
import thunk from "redux-thunk";
export const store = createStore(combineReducers({
    main: MainReducer,
    basket: BasketReducer,
    favorite: FavoriteReducer
}), composeWithDevTools(applyMiddleware(thunk)))