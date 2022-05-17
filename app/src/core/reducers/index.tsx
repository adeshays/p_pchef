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
    switch (action.type){
        case "ADD_ITEM":
            return {
                ...state,
                items : [...state.items, action.payload as Item]
            }
        case "DELETE_ITEM":
            return {
                ...state,
                items : state.items.filter((item) => item.id !== (action.payload as Item).id)
            }
        case "MODIFY_ITEM":
            return {
                ...state,
                items : state.items.map((item) => {
                    if (item.id === (action.payload as Item).id)
                        return action.payload
                    else return item
                    })
            }
        default : 
            return state
    }
}

const IndexReducers = combineReducers({
    items : itemsReducer
})

export default IndexReducers