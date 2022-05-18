import {Button, Card, Form, Input, } from "antd"
import { Item } from "../../types"
import { useDispatch } from "react-redux"
import itemsActions from "../../core/reducers/actions"
import { v4 as uuidv4 } from 'uuid'
import { useForm } from "antd/lib/form/Form"
import { FItem } from "../../components/FormItem"
import { Link } from "react-router-dom"
import TextArea from "antd/lib/input/TextArea"

const AddItem = (props:any) :JSX.Element => {
    const dispatch = useDispatch()
    const [formRef] = useForm()

    return (
        <Card style={{width: "400px"}} title={"Add an item"} extra={
            <Link to={`/list`}> Cancel
            </Link>
            }>
        <Form layout="vertical" form={formRef} onFinish={(values : Item) => {
            const id = uuidv4()
            dispatch(itemsActions.add({...values, id}))
            formRef.resetFields()
        }}>
            <FItem rules={[{ required: true}]} name="title"  label="title">
              <Input />
            </FItem>
            <FItem rules={[{ required: true}]} name="description" label="description">
              <TextArea rows={4} />
            </FItem>
            <FItem >
                <Button htmlType='submit'>
                    Add
                </Button>
            </FItem>
        </Form>
    </Card>
    )
}
export default AddItem