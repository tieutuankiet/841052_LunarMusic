
import config from "../config";
import { HeaderOnly} from '../layouts' ;

import Home from "../pages/Home";
import Popular from "../pages/Popular";
import upload from "../pages/Upload";
import CreateAccount from "../pages/CreateAccount";
import Profile from "../pages/Profile";
import Live from "../pages/Live/Live";
import Library from "../pages/Library"
import Playlist from "../pages/Playlist";
import Favorite from "../pages/Favorite";
const PublicRoutes = [
    {path: config.routes.home, component: Home },
    {path: config.routes.popular,component: Popular},
    {path: config.routes.live, component: Live },
    {path: config.routes.profile, component: Profile },
    {path: config.routes.upload, component: upload, layout: HeaderOnly },
    {path: config.routes.CreateAccount, component: CreateAccount},
    {path: config.routes.library, component: Library },
    {path: config.routes.playlist, component: Playlist },
    {path: config.routes.favorite, component: Favorite },

]
const PrivateRoutes = [

]
export {PrivateRoutes,PublicRoutes};