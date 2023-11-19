import Handlebars from 'handlebars';
import './index.scss';
import {indexTemplate} from './index.tmpl'

const links = [
    {to: '/', text: 'Главная'},
    {to: '/login', text: 'Логин'},
    {to: '/registration', text: 'Регистрация'},
    {to: '/profile', text: 'Профиль'},
    {to: '/chat', text: 'Чаты'},
    {to: '/404', text: 'Страница с ошибкой 404'},
    {to: '/500', text: 'Страница с ошибкой 500'},
];

export const IndexPage = (props) => {
    return Handlebars.compile(indexTemplate)({...props, links});
};