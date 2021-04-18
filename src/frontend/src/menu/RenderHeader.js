import {Layout} from "antd";
import React from "react";

const {Header} = Layout;

export const RenderHeader = () => {
    return <Header className="site-layout-background" style={{padding: 0, textAlign: "center"}}>
        Quickhelper Backoffice
    </Header>
}