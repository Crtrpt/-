import m, { ClassComponent } from 'mithril'

class Black implements ClassComponent {
  view(
    this: m._NoLifecycle<this & {}>,
    vnode: m.Vnode<{}, m._NoLifecycle<this & {}>>
  ): void | m.Children {
      console.log(vnode);
      console.log("登录页面")
    return m("div",{
        'class':"black"
    },vnode.children)
  }
}
export default Black
