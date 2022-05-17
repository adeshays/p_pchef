import { combineReducers } from "redux"
import { itemsDB } from "../../Models/items"
import { Action, Item, ItemState } from "../../types"
import itemsActions from "./actions"


const initialState : ItemState = {
    loading : false,
    success : false,
    items : itemsDB
}
type Payloads = Item | Item[]
const itemsReducer = (state : ItemState = initialState, action:Action<Payloads>) => {
    console.log("State", state, action)
    switch (action.type){
        case "ADD_ITEM":
            return {
                ...state,
                items : [...itemsDB, action.payload as Item]
            }
        case "DELETE_ITEM":
            const newItemList = state.items.filter((item) => item.id !== (action.payload as Item).id)
            return {
                ...state,
                items : newItemList
            }
        default : 
            return state
    }
}

const IndexReducers = combineReducers({
    items : itemsReducer
})

export default IndexReducers