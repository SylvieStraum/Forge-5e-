const getItemReducer = (state=[], action) =>{
    if(action.type === 'SET_EQUIP'){
        return action.payload
    }
    return state
}

export default  getItemReducer;