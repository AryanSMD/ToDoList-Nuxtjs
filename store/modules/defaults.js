import Tasks from "~/components/Tasks.vue";

export default {
    state: {
        darkMode: false,
        tasks: []
    },
    actions: {
        async defaultDarkMode({ commit }) {
            await commit('defaultDarkMode');
        },
        async defaultTasks({ commit }) {
            await commit('defaultTasks');
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
        defaultTasks(state) {
            const tasks = localStorage.getItem('tasks');
            tasks !== null ?
                state.tasks = JSON.parse(localStorage?.getItem('tasks')) : null;
        },
        setDarkMode(state) {
            state.darkMode = !state.darkMode;
            localStorage.setItem('darkMode', state.darkMode);
        },
        done(state, index) {
            state.tasks[index].isDone = !state.tasks[index].isDone;
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        addTask(state, val) {
            state.tasks.push(val);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
        removeTask(state, index) {
            state.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state.tasks));
        },
    },
    getters: {
        getDarkMode: state => state.darkMode,
        getTasks: state => state.tasks,
    }
}