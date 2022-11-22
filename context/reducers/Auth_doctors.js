import { SET_CURRENT_DOCTOR } from "../actions/Auth_actions";
import isEmpty from "../../app/common/IsEmpty";

export default function (state = {}, action) {
    switch (action.type) {
        case SET_CURRENT_DOCTOR:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                doctor: action.payload,
                doctorProfile: action.doctorProfile
            }
        default:
            return state;
    }
}