import { combineReducers } from "redux";
import { UserReducer,FetchReducer} from "./reducer";
export default combineReducers({
    FetchReducer,
    UserReducer    
})