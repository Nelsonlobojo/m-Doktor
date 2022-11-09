const initialState = {
    doctors: null,
}

export default function DoctorReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_DOCTORS":
            return {
                ...state,
                doctors: action.payload
            }
        default:
            return state;
    }
}