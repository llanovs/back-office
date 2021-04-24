import {
    Spin,
    Drawer,
    Input,
    Col,
    Select,
    Form,
    Row,
    Button
} from 'antd';

import {LoadingOutlined} from "@ant-design/icons";
import {successNotification, errorNotification} from "./Notification";
import {useState} from "react";
import {updateEmployee} from "../client";

const {Option} = Select;
const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

export function UpdateEmployee({showDrawer, setShowDrawer}) {
    const onCLose = () => setShowDrawer(false);
    const [submitting, setSubmitting] = useState(false);

    const onFinish = employee => {
        setSubmitting(true);
        console.log(JSON.stringify(employee, null, 2));
        updateEmployee(employee)
            .then(() => {
                console.log("Employee updated")
                onCLose();
                successNotification("Employee was updated",
                    `${employee.name} was updated in a system`);
            })
            .catch(err => {
                errorNotification(`Error: ${err}`,
                    `${employee.name} wasn't updated in a system`);
                console.log(err);
            })
            .finally(() => setSubmitting(false));
    };

    const onFinishFailed = errorInfo => {
        alert(JSON.stringify(errorInfo, null, 2));
    };

    return <Drawer
        title="Edit employee's info"
        width={720}
        onClose={onCLose}
        visible={showDrawer}
        bodyStyle={{paddingBottom: 80}}
        footer={
            <div
                style={{
                    textAlign: 'right',
                }}
            >
                <Button onClick={onCLose} style={{marginRight: 8}}>
                    Cancel
                </Button>
            </div>
        }
    >
        <Form layout="vertical"
              onFinishFailed={onFinishFailed}
              onFinish={onFinish}
              hideRequiredMark>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{required: true, message: 'Please enter employee name'}]}
                    >
                        <Input placeholder="Please enter employee name"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="surname"
                        label="Surname"
                        rules={[{required: true, message: 'Please enter employee surname'}]}
                    >
                        <Input placeholder="Please enter employee name"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{required: true, message: 'Please enter employee email'}]}
                    >
                        <Input placeholder="Please enter employee email"/>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{required: true, message: 'Please enter employee phone'}]}
                    >
                        <Input placeholder="Please enter employee email"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="gender"
                        label="gender"
                        rules={[{required: true, message: 'Please select a gender'}]}
                    >
                        <Select placeholder="Please select a gender">
                            <Option value="MALE">MALE</Option>
                            <Option value="FEMALE">FEMALE</Option>
                            <Option value="OTHER">OTHER</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                {submitting && <Spin indicator={antIcon}/>}
            </Row>
        </Form>
    </Drawer>
}