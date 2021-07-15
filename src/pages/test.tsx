import m, { ClassComponent } from 'mithril'

class Index implements ClassComponent {
  click1() {
    console.log('11')
  }
  view(
    this: m._NoLifecycle<this & {}>,
    vnode: m.Vnode<{}, m._NoLifecycle<this & {}>>
  ): void | m.Children {
      console.log(vnode);
    return (
      <div>
        <button
          onclick={this.click1}
        >
          111
        </button>
      </div>
    )
  }
}
export default Index
