import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import AllReviews from "../Pages/AllReviews/AllReviews";
import AddReviews from "../Pages/AddReviews/AddReviews";
import MyReviews from "../Pages/MyReviews/MyReviews";
import GameWatchList from "../Pages/GameWatchList/GameWatchList";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import ReviewDetail from "../Pages/ReviewDetail/ReviewDetail";
import PrivateRout from "./PrivateRout";
import Error from "../Pages/Error/Error";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement : <Error/>,
      children : [
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/all-reviews',
            element : <AllReviews/>,
           
        },
        {
            path : '/add-reviews',
            element : <PrivateRout><AddReviews/></PrivateRout>
        },
        {
            path : '/my-reviews',
            element : <PrivateRout><MyReviews/></PrivateRout>
        },
        {
            path : '/update/:id',
            element : <PrivateRout><UpdatePage/></PrivateRout>,
            loader : ({params})=> fetch(`https://chil-gamer-server.vercel.app/review/${params.id}`)
        },
        {
            path : '/detail/:id',
            element :<PrivateRout> <ReviewDetail/></PrivateRout>,
            loader : ({params})=> fetch(`https://chil-gamer-server.vercel.app/review/${params.id}`)
        },
        {
            path : '/game-watchlist',
            element : <PrivateRout><GameWatchList/></PrivateRout>
        },
        {
            path : '/register',
            element : <Register/>
        },
        {
            path : '/login',
            element : <Login/>
        },
      ]
    },
  ]);