import Handlebars from 'handlebars';
import './registration.scss';
import {registrationTemplate} from './registration.tmpl';

export const RegistrationPage = () => {
    return Handlebars.compile(registrationTemplate)();
};