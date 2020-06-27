import VueRouter from '../vue-router'
import Index from '../views/Index'
import Live from '../views/Live'
import DownloadApp from '../views/DownloadApp'
import Login from '../views/Login'
import Register from '../views/Register'
import Essay from '../views/Essay'
import Follow from '../views/Follow'
import Shortcontent from '../views/Shortcontent'
// vue router config
const routes = [
  {
    path:'/',
    component:Index
  },
  {
    path:'/Live',
    component:Live
  },
  {
    path:'/DownloadApp',
    component:DownloadApp
  },
  {
    path:'/Login',
    component:Login
  },
  {
    path:'/Register',
    component:Register
  },
  {
    path:'/Live',
    component:Live
  },
  {
    path:'/Essay/:id',
    component:Essay
  },
  {
    path:'/Shortcontent',
    component:Shortcontent
  },
  {
    path:'/Follow',
    component:Follow
  },
];

//vue router 实例化

const router = new VueRouter({
  mode:'history',
  routes,
});

export default router;