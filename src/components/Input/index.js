import Handlebars from 'handlebars';
import './input.scss';
import {inputTemplate} from './input.tmpl';

export const Input = (props) => {
    return Handlebars.compile(inputTemplate)(props);
};