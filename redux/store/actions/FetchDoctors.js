export const getAllDoctors = () => {
    return(dispatch) => {
        // fetch data from api
        fetch('https://randomuser.me/api/?results=10')
        .then((response) => response.json())
        .then((result => {
            // dispatch response to store
            dispatch({type: 'SET_DOCTORS', payload: result.results})
        }))
    }
}