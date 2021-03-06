import {PUT_DATA} from "../../actions/notes";

const initialState = {
    data: null
}

export default (state = initialState, action) => {

    switch(action.type){
        case PUT_DATA:
            console.log(action.payload)
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}