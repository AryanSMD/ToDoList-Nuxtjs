export default {
    state: {
        darkMode: false,
        tasks: [
            {
                title: 'Go to the office',
                isDone: false,
            },
            {
                title: 'Read Book',
                isDone: false,
            },
            {
                title: 'Exercise',
                isDone: false,
            },
        ]
    },
    actions: {
        async defaultDarkMode({ commit }) {
            await commit('defaultDarkMode');
        },
        async setDarkMode({ commit }) {
            await commit('setDarkMode');
        },
        async done({ commit }, index) {
            await commit('done', index);
        },
        async addTask({ commit }, val) {
            await commit('addTask', val);
        },
        async removeTask({ commit }, index) {
            await commit('removeTask', index);
        },
    },
    mutations: {
        defaultDarkMode(state) {
            const isDarkMode = localStorage.getItem('darkMode');
            typeof isDarkMode === 'string' ?
                state.darkMode = (localStorage?.getItem('darkMode') === 'true') : null;
        },
        setDarkMode(state) {
            state.darkMode = !state.darkMode;
            localStorage.setItem('darkMode', state.darkMode);
        },
        done(state, index) {
            state.tasks[index].isDone = !state.tasks[index].isDone;
        },
        addTask(state, val) {
            state.tasks.push(val);
        },
        removeTask(state, index) {
            state.tasks.splice(index, 1);
        },
    },
    getters: {
        getDarkMode: state => state.darkMode,
        getTasks: state => state.tasks,
    }
}