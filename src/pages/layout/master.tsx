import m, { ClassComponent } from 'mithril'

class Master implements ClassComponent {
  view(
    this: m._NoLifecycle<this & {}>,
    vnode: m.Vnode<{}, m._NoLifecycle<this & {}>>
  ): void | m.Children {
      console.log(vnode);
      console.log("登录页面")
    return m("div",{
        'class':"master"
    },vnode.children)
  }
}
export default Master
