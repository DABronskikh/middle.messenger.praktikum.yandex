import Handlebars from 'handlebars';
import './error.scss';
import {errorTemplate} from './error.tmpl';

export const ErrorPage = (props) => {
    return Handlebars.compile(errorTemplate)({code: props});
};