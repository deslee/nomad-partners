import bindRouteData from './bindRouteData';
import { endeavors } from '../mockData';
import EndeavorView from '../components/EndeavorView/EndeavorView';

export default bindRouteData(({ endeavorId }) => new Promise((resolve, reject) => {
    setTimeout(() => resolve({
        endeavor: endeavors.find(e => e.id === endeavorId)
    }), 100)
}))(EndeavorView)