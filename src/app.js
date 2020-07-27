import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            toDoList: ['Food shop', 'Homework', 'Walk the dogs'],
            newChore: ''
        },
        methods: {
            saveNewChore: function () {
                this.toDoList.push(this.newChore);
                this.newChore = ''
            }
        }
    });
});