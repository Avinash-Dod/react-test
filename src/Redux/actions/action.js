import { SIGN_IN, SIGN_UP, DELETE,LOGOUT} from "../constants";
export const signIn = (user) => {
    return {
      type: SIGN_IN,
      user
    }
  }
  export const signUp =(user)=>{
      return {
          type:SIGN_UP,
          user
        }

  }