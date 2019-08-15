// create variable for string you want to use in case you mispell (can now get error message b/c not string)
// need to import this action type in reducer 
export const FETCHING_HARRY_POTTER_DATA = "FETCHING_HARRY_POTTER_DATA"


export const getData = () => {
return (dispatch) => {
// 1 - dispatch action before making async call that tells reducer to transition to loading state 
dispatch ({type: FETCHING_HARRY_POTTER_DATA})

};

};