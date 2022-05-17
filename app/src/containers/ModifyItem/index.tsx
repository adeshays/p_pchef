import { Button, Form, Input } from "antd"
import { useForm } from "antd/lib/form/Form"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
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
    <Form form={formRef} initialValues={item} onFinish={(values : Item) => {
        dispatch(itemsActions.modify({...item, ...values}))
    }}>
        <FItem rules={[{ required: true}]} name="title"  label="title">
          <Input />
        </FItem>
        <FItem rules={[{ required: true}]} name="description" label="description">
          <Input />
        </FItem>
        <FItem >
            <Button htmlType='submit'>
                Modify
            </Button>
        </FItem>
    </Form>)
}

export default ModifyItem