import { Button } from "antd"
import itemsActions from "../../core/reducers/actions"
import { useSelector, useDispatch } from "react-redux"
import { Item as ItemInterface } from "../../types"

const Item = ({item } : {item : ItemInterface}) => {
    return <>
        <h1>{item.title}</h1> 
        ({item.id})
        <p>{item.description}</p>
    </>
}
const DisplayItems = (props : any) => {
    
    const items : ItemInterface[] = useSelector(({items} : any) => { console.log("items", items); return (items.items)})
    console.log("PROPS", items)
    const dispatch = useDispatch()
    return <>{items.map((item) => 
    <>
        <Item item={item}/>
        <Button danger onClick={ 
            () => dispatch(itemsActions.delete(item)) 
        }>
            delete
        </Button>
    </>
    )}</>
}

export default DisplayItems