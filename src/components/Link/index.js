import Handlebars from 'handlebars';
import './link.scss';
import {linkTemplate} from './link.tmpl';

export const Link = (props) => {
    return Handlebars.compile(linkTemplate)(props);
};