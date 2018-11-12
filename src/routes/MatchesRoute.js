import bindRouteData from './bindRouteData';
import Matches from '../components/Matches/Matches';
import { endeavors } from '../mockData';

export default bindRouteData(() => new Promise((resolve, reject) => {
    setTimeout(() => resolve({
        endeavors: endeavors
    }), 100)
}))(Matches)