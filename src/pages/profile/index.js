import Handlebars from 'handlebars';
import './profile.tmpl';
import {profileTemplate} from './profile.tmpl';

export const ProfilePage = () => {
    return Handlebars.compile(profileTemplate)();
};