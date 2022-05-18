import { Button, Card, Form, Input } from "antd"
import { useForm } from "antd/lib/form/Form"
import TextArea from "antd/lib/input/TextArea"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { FItem } from "../../components/FormItem"
import itemsActions from "../../core/reducers/actions"
import { Item, ItemState } from "../../types"

const ModifyItem = (props:any) => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const [formRef] = useForm()
    const item : Item | undefined = useSelector(({items}: {items: ItemState}) => 
        items.items.find((item) => item.id === id)
    )
    if (!item) return <> Item unreachable</>
    return (   
        <Card style={{width: "400px"}} title={"Modify " + item.id} extra={
            <Link to={`/list`}> Cancel
            </Link>
            }>
    <Form layout="vertical" form={formRef} initialValues={item} onFinish={(values : Item) => {
        dispatch(itemsActions.modify({...item, ...values}))
    }}>
        <FItem rules={[{ required: true}]} name="title"  label="title">
          <Input />
        </FItem>
        <FItem rules={[{ required: true}]} name="description" label="description">
          <TextArea rows={4} />
        </FItem>
        <FItem >
            <Button type="primary" htmlType='submit'>
                Modify
            </Button>
        </FItem>
    </Form>
    </Card>
    )
}

export default ModifyItem