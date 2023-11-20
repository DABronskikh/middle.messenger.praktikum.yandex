import Handlebars from 'handlebars';
import './registration.scss';
import {registrationTemplate} from './registration.tmpl';
import {Input} from '../../components/Input';
import {Button} from '../../components/Button';
import {Link} from '../../components/Link';

export const RegistrationPage = (props) => {
    const inputs = [
        Input({
            type: 'email', 
            name: 'email', 
            label: 'Почта', 
            required: true,
        }),
        Input({
            type: 'text', 
            name: 'login', 
            label: 'Логин', 
            required: true,
        }),
        Input({
            type: 'text', 
            name: 'first_name', 
            label: 'Имя', 
        }),
        Input({
            type: 'tel', 
            name: 'tel', 
            label: 'Телефон', 
        }),
        Input({
            type: 'text', 
            name: 'last_name', 
            label: 'Фамилия', 
        }),
        Input({
            type: 'password', 
            name: 'password', 
            label: 'Пароль',
            required: true,
        }),
        Input({
            type: 'password', 
            name: 'current_password', 
            label: 'Пароль (ещё раз)',
            errorMsg: 'Пароли не совпадают',
            required: true,
        }),
    ];
    const button = Button({
        type: 'submit',
        class: 'btn-primary',
        text: 'Зарегистрироваться',
    });
    const link = Link({
        to: '/login',
        text: 'Войти',
        class: 'btn btn-link',
    });
    const pageProps = {
        ...props,
        inputs,
        button,
        link,
    };
    return Handlebars.compile(registrationTemplate)(pageProps);
};
