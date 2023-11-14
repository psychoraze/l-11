import {createState, combineReducers} from "redux";
import minecraftReducers from "./minecraftReducer"; 

const rootReducer = combineReducers({
    minecraftReducers,
})

const store =  createStore(rootReducer);

export default store;