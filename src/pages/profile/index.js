import Handlebars from 'handlebars';
import './profile.scss';
import {profileTemplate} from './profile.tmpl';
import {Link} from '../../components/Link';

const profileList = [
    {title: 'Почта', value: 'pochta@yandex.ru'},
    {title: 'Логин', value: 'ivanivanov'},
    {title: 'Имя', value: 'Иван'},
    {title: 'Фамилия', value: 'Иванов'},
    {title: 'Имя в чате', value: 'Иван'},
    {title: 'Телефон', value: '+7 (909) 967 30 30'},
];

const links = [
    Link({
        to: '#',
        text: 'Изменить данные',
        class: 'link-sm link-primary',
    }),
    Link({
        to: '#',
        text: 'Изменить пароль',
        class: 'link-sm link-primary',
    }),
    Link({
        to: '#',
        text: 'Выйти',
        class: 'link-sm link-danger',
    }),
];

export const ProfilePage = (props) => {
    const pageProps = {
        ...props,
        profileList,
        links,
    };
    return Handlebars.compile(profileTemplate)(pageProps);
};