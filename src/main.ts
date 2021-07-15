import './index.scss'


import m  from "mithril";
import Index from "./pages/index"
import Test from "./pages/test"

export default class shorebf {
    constructor(config:any){
        var root=config.el;

        m.route(root,"/",{
            "/":Index,
            "/test":new Test(),
        })
    }
}