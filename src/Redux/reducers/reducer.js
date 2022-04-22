
import { CHANGE_DATA, FETCH_DATA, LOGOUT, SIGN_IN } from '../constants'
const initState = {
    userList: '',
    perPage: 0,
    page: 0,
    pages: 0,
    total_data: 0,
    isAuth: false
}
export const FetchReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            // console.log(action.payload);
            // break
            return {
                userList: action.payload,
                perPage: action.payload.per_page,
                page: action.payload.page,
                pages: action.payload.total_pages,
                total_data: action.payload.total,
            }
            
            case CHANGE_DATA:
                return {
                    ...state,
                    userList:action.data,
                    page:action.data.page
        
                }
        default:
            return state
    }
}

export const UserReducer = (userstate = initState.isAuth, action) => {

    switch (action.type) {
        case SIGN_IN:
            return{                
                userstate:true
            }

        case LOGOUT:
            localStorage.removeItem('token')
              return {
                ...userstate,
                userstate: false
            }

        default:
            return userstate;
    }
}
