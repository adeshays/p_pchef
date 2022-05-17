import { Action, Item } from "../../types";

 const itemsActions = {
    add : (payload: Item) :Action<Item>=> ({type : "ADD_ITEM", payload}),
    delete : (payload:Item) : Action<Item> => ({type : "DELETE_ITEM", payload})
}

export default itemsActions