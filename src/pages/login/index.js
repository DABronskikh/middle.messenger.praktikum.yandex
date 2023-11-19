import Handlebars from 'handlebars';
import './login.scss';
import {loginTemplate} from './login.tmpl';

export const LoginPage = () => {
    return Handlebars.compile(loginTemplate)();
};