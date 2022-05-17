import { Button } from "antd"
import itemsActions from "../../core/reducers/actions"
import { useSelector, useDispatch } from "react-redux"
import { Item as ItemInterface, ItemState } from "../../types"

const Item = ({item } : {item : ItemInterface}) => {
    return <>
        <h1>{item.title}</h1> 
        ({item.id})
        <p>{item.description}</p>
    </>
}
const DisplayItems = (props : any) => {
    
    const items : ItemInterface[] = useSelector(({items} : {items : ItemState}) => items.items )
    const dispatch = useDispatch()
    console.log("items", items)
    return <>{items && items.map((item,key:number) => 
    <div key={key}>
        <Item item={item}/>
        <Button danger onClick={ 
            () => {
                console.log("remove", item.id)
                dispatch(itemsActions.delete(item)) 
            }
        }>
            delete
        </Button>
    </div>
    )}</>
}

export default DisplayItems