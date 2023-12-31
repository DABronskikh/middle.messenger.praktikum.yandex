import './styles/style.scss';

import {IndexPage} from './pages/index';
import {ErrorPage} from './pages/error';
import {LoginPage} from './pages/login';
import {RegistrationPage} from './pages/registration';
import {ProfilePage} from './pages/profile';
import {ChatPage} from './pages/chat';

const routes = new Map([
    ['/', IndexPage()],
    ['/login', LoginPage()],
    ['/registration', RegistrationPage()],
    ['/profile', ProfilePage()],
    ['/chat', ChatPage()],
    ['/500', ErrorPage({code: 500, description:'Мы уже фиксим'})],
    ['/*', ErrorPage({code: 404, description:'Не туда попали'})],
]);

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#app');
    const {pathname} = window.location;

    const defaultRoute = '/*';
    const route = routes.has(pathname) ? pathname : defaultRoute;
    root.innerHTML = routes.get(route);
});
