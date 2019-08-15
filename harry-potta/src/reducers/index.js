import { FETCHING_HARRY_POTTER_DATA } from "../actions";


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
    ...state, 
    isLoading: true, 
    error: ""

}
        default: 
        return state;
    }
}