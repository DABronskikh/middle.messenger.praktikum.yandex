import Handlebars from 'handlebars';
import './button.scss';
import {buttonTemplate} from './button.tmpl';

export const Button = (props) => {
    return Handlebars.compile(buttonTemplate)(props);
};