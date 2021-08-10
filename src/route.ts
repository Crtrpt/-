import Index from "./pages/index"
import Login from "./pages/login"
const route = {
    "/":Index,
    "/login":new Login(),
};

export default route;