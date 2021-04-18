import React, {Component, useEffect, useState} from "react";
import {getAllEmployees} from "../client";

import {
    Layout,
    Breadcrumb,
    Table,
    Spin,
    Empty,
    Badge,
    Tag,
    Avatar
} from "antd";

import {UserOutlined} from "@ant-design/icons";

const {Content} = Layout;

const TheAvatar = ({name}) => {
    let emptyName = name.trim();
    if (emptyName.length === 0)
        return <Avatar icon={<UserOutlined/>}/>

    const split = emptyName.split(" ");
    if (split.length === 1) {
        return <Avatar>{name.charAt(0)}</Avatar>
    }
    return <Avatar>
        {`${name.charAt(0)}${name.charAt(name.length - 1)}`}
    </Avatar>
}

const columns = [
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
        render: (text, employee) => <TheAvatar
            name={employee.name}/>
    },
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Surname',
        dataIndex: 'surname',
        key: 'surname',
    },
    {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Home address',
        dataIndex: 'homeAddress',
        key: 'homeAddress',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    }
];

export const RenderAllEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [fetching, setFetching] = useState(true);

    const fetchEmployees = () => getAllEmployees()
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setEmployees(data)
            setFetching(false)
        });

    useEffect(() => fetchEmployees(), []);

    const renderEmployees = () => {
        if (fetching) {
            return <Spin/>;
        }
        if (employees.length <= 0) {
            return <Empty/>;
        }
        return <>
            <Tag>Number of employees</Tag>
            <Badge count={employees.length} className="site-badge-count-4"/>
            <Table
                dataSource={employees}
                columns={columns}
                rowKey={(employee) => employee.id}
                bordered
                title={() => 'Employees'}
                pagination={{pageSize: 10}}
                scroll={{y: 840}}
            />
        </>;
    }

    return renderEmployees();
};

export class AllEmployeesContent extends Component {
    render() {
        return <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>All employees</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                <RenderAllEmployees/>
            </div>
        </Content>;
    }
}