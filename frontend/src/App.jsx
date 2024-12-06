import "./App.css";
import BlogSection from "./components/BlogSection";
import QnaSection from "./components/QnaSection";
import Members from "./components/Members";
import GallerySection from "./components/GallerySection";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import MemberInfo from "./components/MemberInfo";
import ViewEvent from "./components/ViewEvent";
import Events from "./components/Events";

const browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/blog",
        element: <BlogSection />,
      },
      {
        path: "/members",
        element: <Members />,
      },
      {
        path: "/qna",
        element: <QnaSection />,
      },
      {
        path: "/gallery",
        element: <GallerySection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/memberinfo",
        element: <MemberInfo />,
      },
      {
        path: "/viewevent",
        element: <ViewEvent />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={browerRouter} />;
}

export default App;
