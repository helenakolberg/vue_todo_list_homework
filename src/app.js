import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            toDoList: ['Food shop', 'Homework', 'Walk the dogs']
        }
    });
});