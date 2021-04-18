import {Button, Layout} from "antd";
import React, {useState} from "react";
import {
    UserAddOutlined
} from '@ant-design/icons';

import {SliderMenu} from "./menu/SliderMenu";
import {RenderHeader} from "./menu/RenderHeader";
import {RenderFooter} from "./menu/RenderFooter";

import './css/App.css';

import {AllEmployeesContent} from "./content/AllEmployeesContent";
import {AddEmployee} from "./content/AddEmployee";

function App() {
    const [showDrawer, setShowDrawer] = useState(false);

    return <Layout style={{minHeight: '100vh'}}>
        <SliderMenu/>
        <Layout className="site-layout">
            <RenderHeader/>
                <AddEmployee
                    showDrawer={showDrawer}
                    setShowDrawer={setShowDrawer}
                />
                <Button onClick={() => setShowDrawer(!showDrawer)}
                        type="primary" icon={<UserAddOutlined/>} size="small">
                    Add New Employee
                </Button>
            <AllEmployeesContent/>
            <RenderFooter/>
        </Layout>
    </Layout>;
}

export default App;