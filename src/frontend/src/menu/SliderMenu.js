import React, {Component, useState} from "react";
import {Layout, Menu} from "antd";

import {
    ContactsOutlined,
    FileAddOutlined,
    IdcardOutlined,
    ProjectOutlined,
    ScheduleOutlined,
    SmileOutlined,
    SolutionOutlined,
    TeamOutlined,
    ToolOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserOutlined,
    WalletOutlined
} from "@ant-design/icons";

const {Sider} = Layout;
const {SubMenu} = Menu;

const RenderMenu = () => {
    const [collapsed, setCollapsed] = useState(false);

    return <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo"/>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <SubMenu key="sub1" icon={<UserOutlined/>} title="Employee">
                <Menu.Item key="1" icon={<ContactsOutlined/>}>Personal Information</Menu.Item>
                <Menu.Item key="2" icon={<IdcardOutlined/>}>Job details</Menu.Item>
                <Menu.Item key="3" icon={<ProjectOutlined/>}>Time reporting</Menu.Item>
                <Menu.Item key="4" icon={<ProjectOutlined/>}>Overtime reporting</Menu.Item>
                <Menu.Item key="5" icon={<WalletOutlined/>}>Expense reporting</Menu.Item>
                <Menu.Item key="6" icon={<SmileOutlined/>}>Vacations</Menu.Item>
                <Menu.Item key="7" icon={<ScheduleOutlined/>}>Schedule</Menu.Item>
                <Menu.Item key="8" icon={<ToolOutlined/>}>Preferences</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                <Menu.Item key="9" icon={<TeamOutlined/>}>Team Information</Menu.Item>
                <Menu.Item key="10" icon={<ContactsOutlined/>}>Team members</Menu.Item>
                <Menu.Item key="11" icon={<SolutionOutlined/>}>Team projects</Menu.Item>
                <Menu.Item key="12" icon={<SmileOutlined/>}>Team activities</Menu.Item>
                <Menu.Item key="13" icon={<ToolOutlined/>}>Team preferences</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<TeamOutlined/>} title="Employees">
                <Menu.Item key="14" icon={<TeamOutlined/>}>All employees</Menu.Item>
                <Menu.Item key="15" icon={<UserAddOutlined/>}>Add employee</Menu.Item>
                <Menu.Item key="16" icon={<UserDeleteOutlined/>}>Delete employee</Menu.Item>
            </SubMenu>
            <Menu.Item key="17" icon={<FileAddOutlined/>}>Files</Menu.Item>
        </Menu>
    </Sider>;
};

export class SliderMenu extends Component {

    render() {
        return <RenderMenu/>
    }
}