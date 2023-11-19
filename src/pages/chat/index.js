import Handlebars from 'handlebars';
import './chat.scss';
import {chatTemplate} from './chat.tmpl';

export const ChatPage = () => {
    return Handlebars.compile(chatTemplate)();
};