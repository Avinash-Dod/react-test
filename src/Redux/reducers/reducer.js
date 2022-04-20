import { FETCH_DATA } from '../constants'
const initState = {
    userList: '',
    perPage: 0,
    page: 0,
    pages: 0,
    total_data: 0
}

export function UserReducer(state = initState, action) {
    switch (action.type) {
        case "SIGN_IN":
            return { ...state }
        case FETCH_DATA:
            return {
                ...state,
                userList: action.payload.data,
                perPage: action.payload.per_page,
                page: action.payload.page,
                pages: action.payload.total_pages,
                total_data: action.payload.total
            }
        case "LOGOUT":
            return { ...state}
        default:
            return state
    }

}