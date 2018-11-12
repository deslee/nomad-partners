import bindRouteData from './bindRouteData';
import { messages } from '../mockData';
import Messages from '../components/Messages/Messages';

export default bindRouteData(() => new Promise((resolve, reject) => {
    setTimeout(() => resolve({
        messages: messages
    }), 100)
}))(Messages)