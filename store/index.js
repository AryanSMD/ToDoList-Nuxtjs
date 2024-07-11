import { createStore } from 'vuex';
import defaults from './modules/defaults';

export default new createStore({
    modules: {
        defaults,
    }
})