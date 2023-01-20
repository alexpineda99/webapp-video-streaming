import {INCREMENT} from "../types";

export default function reducer  (state = 0, action) {

    switch (action.type) {
        case INCREMENT:
            return state+action.payload;
            default:
            return state
    }

}

