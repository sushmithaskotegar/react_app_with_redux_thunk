const userReducer =(state={},action)=>{
    
    switch(action.type){
        
        case "LIST_USERS":
            // console.log(action.payload,"action.payload")
            return {...state,users:action.payload}
            case "SET_USER":
                console.log(action.payload)
                return {...state,userId:action.payload}
                case "ADD_USERS":
                    console.log(action.payload,"add_user")
                    const newuser=state.users.concat(action.payload)
                    return {...state,users:newuser}
            default:
                return state;

    }
    return state;

}
export default userReducer