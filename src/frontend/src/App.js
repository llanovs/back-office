import {Layout} from "antd";
import React from "react";

import {SliderMenu} from "./menu/SliderMenu";
import {RenderHeader} from "./menu/RenderHeader";
import {RenderFooter} from "./menu/RenderFooter";

import './css/App.css';
import {AllEmployees} from "./content/AllEmployees";

function App() {
    return <Layout style={{minHeight: '100vh'}}>
        <SliderMenu/>
        <Layout className="site-layout">
            <RenderHeader/>
            <AllEmployees/>
            <RenderFooter/>
        </Layout>
    </Layout>;
}

export default App;