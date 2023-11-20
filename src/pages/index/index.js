import Handlebars from 'handlebars';
import './index.scss';
import {indexTemplate} from './index.tmpl';
import {Link} from '../../components/Link';

const links = [
    Link({
        class: 'link-primary',
        to: '/', 
        text: 'Главная',
    }),
    Link({
        class: 'link-primary',
        to: '/login', 
        text: 'Логин',
    }),
    Link({
        class: 'link-primary',
        to: '/registration', 
        text: 'Регистрация',
    }),
    Link({
        class: 'link-primary',
        to: '/profile', 
        text: 'Профиль',
    }),
    Link({
        class: 'link-primary',
        to: '/chat', 
        text: 'Чаты',
    }),
    Link({
        class: 'link-primary',
        to: '/404', 
        text: 'Страница с ошибкой 404',
    }),
    Link({
        class: 'link-primary',
        to: '/500', 
        text: 'Страница с ошибкой 500',
    }),
];

export const IndexPage = (props) => {
    const pageProps = {
        ...props,
        links,
    };
    return Handlebars.compile(indexTemplate)(pageProps);
};