import Handlebars from 'handlebars';
import './error.scss';
import {errorTemplate} from './error.tmpl';
import {Link} from '../../components/Link';

export const ErrorPage = (props) => {
    const link = Link({ 
      text: 'Назад к чатам', 
      to: '/', 
      class: 'link-sm link-primary',
    });
    
    const pageProps = {
      ...props,
      link,
    };
  
    return Handlebars.compile(errorTemplate)(pageProps);
};