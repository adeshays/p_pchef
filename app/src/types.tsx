export interface Item {
    id: string
    title: string
    description: string
    imgUrl?: string
}

export interface Action<T> {
    type : string
    payload: T
}
export interface Message{
    type : "error"|"success"|"information"|"warning"
}
export interface State {
    loading : boolean
    success : boolean
    message?: Message
}
export interface ItemState extends State{ 
    items: Item[]
}