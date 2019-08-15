
import axios from "axios";
// create variable for string you want to use in case you mispell (can now get error message b/c not string)
// need to import this action type in reducer 

// action types transition us from one state to a completely new state 
export const FETCHING_HARRY_POTTER_DATA = "FETCHING_HARRY_POTTER_DATA"
export const FETCHING_HARRY_POTTER_DATA_SUCCESS = "FETCHING_HARRY_POTTER_DATA_SUCCESS"
export const FETCHING_HARRY_POTTER_DATA_FAILURE = "FETCHING_HARRY_POTTER_DATA_FAILURE"

export const getData = () => {
return (dispatch) => {
// 1 - dispatch action before making async call that tells reducer to transition to loading state 
dispatch ({type: FETCHING_HARRY_POTTER_DATA})
axios
.get(`https://www.potterapi.com/v1/houses`, {
    params: {
      key: "$2a$10$oYy3XMAqJzmFy8QHnLeF0.91ovNla4AuexZ5uZahICNpnbrCs4kPm"
    } })
.then(response => {
    // response.data.data from 
    console.log(response.data)
        
            // 2. transition to the success state 
    dispatch({ type: FETCHING_HARRY_POTTER_DATA_SUCCESS, payload: response.data })
}
    )
.catch(error => {
    // 3. transition to failure state 
dispatch ({ type: FETCHING_HARRY_POTTER_DATA_FAILURE, payload: error.response })
})
};

};

// response.data.name 
// response.data.id
// response.data.mascot
// response.data.headOfHouse
// response.data.houseGhost 