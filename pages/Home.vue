<template>
    <div class="top">
        <div class="layer"></div>
    </div>
    <div class="container">
        <div class="header">
            <div class="left">To Do</div>
            <div class="right">
                <button class="darkMode-btn" @click="setDarkMode()" :class="defaults.getDarkMode ? 'on' : 'off'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="sun" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="moon" viewBox="0 0 16 16">
                        <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="content">
            <div class="add">
                <div class="card">
                    <input type="text" placeholder="Add new Task..." v-model="title" 
                        :class="showErr ? 'input-err' : null"  @keyup.enter="addTask()">
                    <button class="btn-add" @click="addTask()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="svg" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="card">
                <div class="title">List</div>
                <Tasks />
                <div class="card-footer">
                    <button class="btn done" @click="doneAll()">Done All</button>
                    <button class="btn clear" @click="removeAll()">Clear All</button>
                </div>
            </div>            
        </div>
    </div>
    <div class="footer">
        <div class="text">© Copyright. Design And Developed By AryanSMD</div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useDefaults } from '~/store/defaults';


const defaults = useDefaults();
const title = ref<string>('');
const showErr = ref<boolean>(false);


function setDarkMode() {
    defaults.setDarkMode()
}
function addTask() {
    if (title.value.trim() === '' || title.value.length >= 30) {
        showErr.value = true;
    } else {
        showErr.value = false;
        const obj: Task = {
            title: title.value.trim(),
            isDone: false,
        }
        defaults.addTask(obj);
        title.value = '';
    }
}
function doneAll() {
    const firstVal: boolean = defaults.getTasks[0].isDone;
    let flag: boolean = false;
    for(let i in defaults.getTasks) {
        defaults.getTasks[i].isDone !== firstVal && (flag = true);
    }
    if (flag) {
        helperLoop(true);
    } else {
        helperLoop(!defaults.getTasks[0].isDone);
    }
}
function removeAll() {
    const listLength: number = defaults.getTasks.length;
    for(let i=0; i < listLength; i++) {
        defaults.removeTask(0)
    }
}
function helperLoop(val: boolean) {
    for(let i in defaults.getTasks) {
        defaults.tasks[i].isDone = val;
    }
}
</script>


<style scoped></style>