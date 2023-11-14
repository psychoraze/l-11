import {FETCHING, SUCEED, FAILED, GET_MOBS} from ".../actionTypes";

const  initialState = {
    isLoading: false,
    statusMessage: "",
    mobs: [],
};

const minecraftReducers = (state = initialState, action) => {
    switch(action.type){
        case GET_MOBS+FETCHING:
            console.log(1);
            return state;
        case GET_MOBS + SUCCED:
            console.log(2);
            return state;
        case GET_MOBS + FAILED:
            console.log(3);
            return state;
        default:
            return state;
    }   
}

export default minecraftReducers;