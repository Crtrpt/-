import m, { ClassComponent }  from "mithril";
import Master from "../pages/layout/master";

class Index implements ClassComponent {
    view(
      this: m._NoLifecycle<this & {}>,
      vnode: m.Vnode<{}, m._NoLifecycle<this & {}>>
    ): void | m.Children {
      return (
        <Master>
          <a href="#!/login">
            首页
          </a>
        </Master>
      )
    }
  }
  export default Index

