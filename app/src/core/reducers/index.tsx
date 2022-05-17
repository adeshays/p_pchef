import { combineReducers } from "redux"
import { itemsDB } from "../../Models/items"
import { Action, Item, ItemState } from "../../types"
import itemsActions from "./actions"


const InitialState : ItemState = {
    loading : false,
    success : false,
    items : itemsDB
}
type Payloads = Item | Item[]
const itemsReducer = (state : ItemState, action:Action<Payloads>) => {

    switch (action.type){
        case "ADD_ITEM":
            return {
                ...state,
                items : [...itemsDB, action.payload as Item]
            }
        case "DELETE_ITEM":
            return {
                ...state,
                items : state.items.filter((item) => item.id === (action.payload as Item).id)
            }
        default : 
            return state
    }
}

const IndexReducers = () => combineReducers({
    items : itemsReducer
})

export default IndexReducers