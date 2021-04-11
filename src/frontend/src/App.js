import {getAllUsers} from "./client";
import {useState, useEffect} from 'react'

import {
    Layout,
    Menu,
    Breadcrumb,
    Table,
    Spin,
    Empty
} from 'antd';

import {
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import './css/App.css';

const {
    Header,
    Content,
    Footer,
    Sider
} = Layout;

const {SubMenu} = Menu;

const columns = [
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

function App() {

    const [users, setUsers] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
    const [fetching, setFetching] = useState(true);

    const fetchUsers = () => getAllUsers()
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setUsers(data)
            setFetching(false)
        });

    useEffect(() => fetchUsers(), []);

    const renderUsers = () => {
        if (fetching) {
            return <Spin/>
        }
        if (users.length <= 0) {
            return <Empty/>
        }
        return <Table
            dataSource={users}
            columns={columns}
            rowKey={(user) => user.id}
            bordered
            title={() => 'Users'}
            pagination={{pageSize: 10}}
            scroll={{y: 240}}
        />;
    }

    return <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible collapsed={collapsed}
               onCollapse={setCollapsed}>
            <div className="logo"/>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined/>} title="User">
                    <Menu.Item key="1">Personal Information</Menu.Item>
                    <Menu.Item key="2">Job details</Menu.Item>
                    <Menu.Item key="3">Time reporting</Menu.Item>
                    <Menu.Item key="4">Overtime reporting</Menu.Item>
                    <Menu.Item key="5">Expense reporting</Menu.Item>
                    <Menu.Item key="6">Vacations</Menu.Item>
                    <Menu.Item key="7">Schedule</Menu.Item>
                    <Menu.Item key="8">Preferences</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined/>} title="Team">
                    <Menu.Item key="9">Team Information</Menu.Item>
                    <Menu.Item key="10">Team members</Menu.Item>
                    <Menu.Item key="11">Team projects</Menu.Item>
                    <Menu.Item key="12">Team activities</Menu.Item>
                    <Menu.Item key="13">Team preferences</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<TeamOutlined/>} title="Users">
                    <Menu.Item key="14" icon={<PieChartOutlined/>}>All users</Menu.Item>
                    <Menu.Item key="15" icon={<PieChartOutlined/>}>Add user</Menu.Item>
                    <Menu.Item key="16" icon={<PieChartOutlined/>}>Delete user</Menu.Item>
                </SubMenu>
                <Menu.Item key="17" icon={<FileOutlined/>}>Files</Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{padding: 0}}/>
            <Content style={{margin: '0 16px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>All users</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                    {renderUsers()}
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Quickhelper Backoffice</Footer>
        </Layout>
    </Layout>
}

export default App;
