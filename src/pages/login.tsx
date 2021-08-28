import m, { ClassComponent } from 'mithril'
import Black from '../pages/layout/black'
class Login implements ClassComponent {
  view(
    this: m._NoLifecycle<this & {}>,
    vnode: m.Vnode<{}, m._NoLifecycle<this & {}>>
  ): void | m.Children {
    console.log(vnode)
    return (
      <Black >
        <div class="flex flex-col ">
          <div className="text-2xl">
            Dystopia
          </div>
          <div className="text-6xl mt-5">
            用户登录
          </div>
          <div className="mt-10 ">
            <form className="" >
              <span class="text-gray-700">用户名:</span>
              <input type="email" class="form-input mx-5 px-4 py-3 rounded-full" placeholder="请输入用户名" ></input>
              <span class="text-gray-700">密码:</span>
              <input type="password" class="form-input mx-5 px-4 py-3 rounded-full" placeholder="请输入密码"></input>
              <input type="submit" class="form-input mx-5 px-4 py-3 rounded-full bg-primary text-white" value="登录"></input>
            </form>  
          </div>
        </div>
      </Black>
    )
  }
}
export default Login
