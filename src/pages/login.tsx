import m, { ClassComponent } from 'mithril'
import Black from '../pages/layout/black'
class Login implements ClassComponent {
  view(
    this: m._NoLifecycle<this & {}>,
    vnode: m.Vnode<{}, m._NoLifecycle<this & {}>>
  ): void | m.Children {
    console.log(vnode)
    return (
      <Black>
        <div class="login_page">
          <div class="title"> 登录</div>
          <div class="content">
            <div class="input_box">
              <div class='label'>用户名:</div>
              <div> <input class="input"></input></div>
            </div>
            <div class="input_box">
              <div class='label'>密码:</div>
              <div> <input class="input"></input></div>
            </div>
          </div>
        </div>
      </Black>
    )
  }
}
export default Login
