import { FETCHING_HARRY_POTTER_DATA, FETCHING_HARRY_POTTER_DATA_SUCCESS, FETCHING_HARRY_POTTER_DATA_FAILURE } from "../actions";


const initialState = {
    harryPotterHouses: [],
    isLoading: false, 
    error: ""
};

export const harryPotterReducer = (state = initialState, action) => {
    switch (action.type) {
case FETCHING_HARRY_POTTER_DATA: 
// returning loading state 
return {
    // always spread in state
    ...state, 
    isLoading: true, 
    error: ""

}
case FETCHING_HARRY_POTTER_DATA_SUCCESS:
    return {
        ...state, 
        isLoading: false,
        harryPotterHouses: action.payload,
        error: ""

    }
    case FETCHING_HARRY_POTTER_DATA_FAILURE:
    return{
        ...state,
        isLoading: false,
        webcams: action.payload,
        error: ""
    }
        default: 
        return state;
    }
}