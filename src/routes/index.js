import AboutPage from "../containers/HomeTemplate/AboutPage";
import ListMoviePage from "../containers/HomeTemplate/ListMoviePage";
import HomePage from "./../containers/HomeTemplate/HomePage";
import Login from "./../containers/HomeTemplate/HomePage/Login/Login"
import Register from "./../containers/HomeTemplate/HomePage/Register"
import { Route } from "react-router-dom";
import Films from "../containers/AdminTemplate/FilmManagementPage"
import { AddFilm } from "../containers/AdminTemplate/AddFilmPage";
import Admin from "../containers/AdminTemplate";
import { Edit } from "../containers/AdminTemplate/Edit";
const routesHome = [
    {
        exact: true,
        path: "/",
        component: HomePage,
    },
    {
        exact: false,
        path: "/about",
        component: AboutPage,
    },
    {
        exact: false,
        path: "/list-movie",
        component: ListMoviePage,
    },
    {
        exact: false,
        path: "/login",
        component: Login,
    },
    {
        exact: false,
        path: "/register",
        component: Register,
    },
];

const routesAdmin = [

    {
        exact: true,
        path: "/films",
        component: Films,
    }, {
        exact: false,
        path: "/addNew",
        component: AddFilm,
    }, {
        exact: false,
        path: "/edit/:id",
        component: Edit,
    }
];



function renderRoutesHome() {
    return routesHome.map((route, index) => {
        return (
            <Route
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
            />
        );
    });
}

function renderRouteAdmin() {
    return routesAdmin.map((route, index) => {
        return (
            <Admin
                key={index}
                exact={route.exact}
                path={route.path}
                component={route.component}
            />
        )
    })
}

export { renderRoutesHome, renderRouteAdmin };