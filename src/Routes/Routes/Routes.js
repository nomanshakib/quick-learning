import Checkout from "../../Pages/Checkout";
import CourseDetails from "../../Pages/CourseDetails";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Blog } = require("../../Pages/Blog");
const { default: Courses } = require("../../Pages/Courses");
const { default: ErrorPage } = require("../../Pages/ErrorPage");
const { default: Faq } = require("../../Pages/Faq");
const { default: Home } = require("../../Pages/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/courses',
                element: <Courses />,
                loader: () => fetch('http://localhost:5000/courses'),
            },
            {
                path: '/faq',
                element: <Faq />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/courses/:id',
                element: <CourseDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoute><Checkout/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])

export default router;