import {Button, Form, Input, } from "antd"
import { Item } from "../../types"
import { useDispatch } from "react-redux"
import itemsActions from "../../core/reducers/actions"
import { v4 as uuidv4 } from 'uuid'

const FItem = (props:any) => <Form.Item {...props} />
const AddItem = (props:any) :JSX.Element => {
    const dispatch = useDispatch()
    return (
    <>
        <Form onFinish={(values : Item) => {
            console.log("values", values)
            const id = uuidv4()
            dispatch(itemsActions.add({...values, id}))
        }}>
            <FItem name="title"  label="title">
              <Input />
            </FItem>
            <FItem name="description" label="description">
              <Input />
            </FItem>
            <FItem >
                <Button htmlType='submit'>
                    Add
                </Button>
            </FItem>
        </Form>
    </>
    )
}
export default AddItem