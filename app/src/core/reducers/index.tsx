import { combineReducers } from "redux"
import { Action, Item, ItemState } from "../../types"


type Payloads = Item | Item[]
const ItemReducer = (state : ItemState, action:Action<Payloads>) => {

}
const IndexReducers = () => combineReducers({})

export default IndexReducers