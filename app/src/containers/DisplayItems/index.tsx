import { Button, Card } from "antd"
import itemsActions from "../../core/reducers/actions"
import { useSelector, useDispatch } from "react-redux"
import { Item as ItemInterface, ItemState } from "../../types"
import { Link } from "react-router-dom"
import { title } from "process"

const Item = ({item , del } : {item : ItemInterface, del : (item: ItemInterface) => void}) => {
    return <Card 
    title={item.title} 
    style={{width: "200px"}}
    extra={
    <Link to={`/item/${item.id}`}> Modify
    </Link>
    } >
    <p>{item.description}</p>
    <Button danger onClick={ 
        () => del(item)
    }>
        delete
    </Button>
  </Card>
}
const DisplayItems = (props : any) => {
    
    const items : ItemInterface[] = useSelector(({items} : {items : ItemState}) => items.items )
    const dispatch = useDispatch()
    return <div  className="list-items-wrapper">{items && items.map((item,key:number) => 
        <div key={key}>
            <Item item={item} del={(item) => dispatch(itemsActions.delete(item))}/>
        </div>
    )}</div>
}

export default DisplayItems