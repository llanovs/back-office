import {
    Layout,
    Image
} from "antd";

import React from "react";

const {Footer} = Layout;

export const RenderFooter = () => {
    return <Footer style={{textAlign: "center"}}>
        <Image width={75}
               src="https://user-images.githubusercontent.com/45741777/116008803-10252980-a61f-11eb-9282-1690aead9d39.png"/>
        <b>Quickhelper Backoffice</b>
    </Footer>;
}