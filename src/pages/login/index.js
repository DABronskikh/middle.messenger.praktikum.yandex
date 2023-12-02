import Handlebars from 'handlebars';
import './login.scss';
import {loginTemplate} from './login.tmpl';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Link} from '../../components/Link';

export const LoginPage = (props) => {
    const inputs = [
        Input({
            type: 'text', 
            name: 'login', 
            label: 'Логин', 
            errorMsg: 'Неверный логин',
            required: true,
        }),
        Input({
            type: 'password', 
            name: 'password', 
            label: 'Пароль',
            required: true,
        }),
    ];
    const button = Button({
        type: 'submit',
        class: 'btn-primary',
        text: 'Авторизоваться',
    });
    const link = Link({
        to: '/registration',
        text: 'Нет аккаунта?',
        class: 'btn btn-link',
    });
    const pageProps = {
        ...props,
        inputs,
        button,
        link,
    };
    return Handlebars.compile(loginTemplate)(pageProps);
};
