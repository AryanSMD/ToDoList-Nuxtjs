interface States {
    darkMode: boolean,
    tasks: Task[],
}

export const useDefaults = defineStore('defaults', {
    state: (): States => ({
        darkMode: false,
        tasks: [
            {
                title: "Going To Gym",
                isDone: true
            },
            {
                title: "Eating Lunch",
                isDone: false
            },
            {
                title: "Studying Hard",
                isDone: false
            },
        ]
    }),
    actions: {
        defaultDarkMode() {
            const isDarkMode: string|null = localStorage.getItem('darkMode');
            typeof isDarkMode === 'string' ?
                this.darkMode = (localStorage.getItem('darkMode') === 'true') : null;
        },
        defaultTasks() {
            const tasks: string|null = localStorage.getItem('tasks');
            tasks !== null ?
                this.tasks = JSON.parse(localStorage.getItem('tasks')!) : null;
        },
        setDarkMode() {
            this.darkMode = !this.darkMode;
            localStorage.setItem('darkMode', this.darkMode.toString());
        },
        done(index: number) {
            this.tasks[index].isDone = !this.tasks[index].isDone;
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        addTask(val: Task) {
            this.tasks.push(val);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
        removeTask(index: number) {
            this.tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        },
    },
    getters: {
        getDarkMode: state => state.darkMode,
        getTasks: state => state.tasks,
    }
})