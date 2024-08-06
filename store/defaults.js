export const useDefaults = defineStore('defaults', {
    state: () => ({
        darkMode: false,
        tasks: []
    }),
    actions: {
        defaultDarkMode() {
            const isDarkMode = localStorage.getItem('darkMode');
            typeof isDarkMode === 'string' ?
                this.darkMode = (localStorage?.getItem('darkMode') === 'true') : null;
        },
        defaultTasks() {
            const tasks = localStorage.getItem('tasks');
            tasks !== null ?
                this.tasks = JSON.parse(localStorage?.getItem('tasks')) : null;
        },
        setDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode);
        },
        done(index) {
            this.tasks[index].isDone = !this.tasks[index].isDone;
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        addTask(val) {
            this.tasks.push(val);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
    },
    getters: {
        getDarkMode: state => state.darkMode,
        getTasks: state => state.tasks,
    }
})