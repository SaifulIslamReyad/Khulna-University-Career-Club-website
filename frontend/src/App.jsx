import "./App.css";
import QnaSection from "./pages/QNA/QnaSection";
import Members from "./pages/member/Members";
import GallerySection from "./pages/gallery/GallerySection";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import MemberInfo from "./pages/member/MemberInfo";
import Events from "./pages/event/Events";
import MainLayout from "./layout/MainLayout";
import ViewEvent from "./pages/event/ViewEvent";
import BlogSection from "./pages/blog/BlogSection";
import Login from "./pages/login&signup/Login";
import Signup from "./pages/login&signup/Signup";

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
