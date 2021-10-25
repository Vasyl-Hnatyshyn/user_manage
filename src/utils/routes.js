import Home from '../page/Home';
import UserInfo from '../page/UserInfo';
import EditUser from '../page/EditUser';
import CreateUser from '../page/CreateUser';

const routes = [
  { component: Home, path: '/' },
  { component: UserInfo, path: '/user/:id' },
  { component: EditUser, path: '/edit/:id' },
  { component: CreateUser, path: '/create_user' },
];

export default routes;
