import { createBrowserRouter } from "react-router";
import App from "../App";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
        path: "/",
        element: <h1>Home</h1>
    },
    {
        path: "/reserve",
        element: <div>Reserve</div>
    },
    {
        path: "/reservations",
        element: <div>Reservations</div>
    },
    {
        path: "/manageReservation",
        element: <div>Manage Reservations</div>
    },
]
  }
]);

export default router;