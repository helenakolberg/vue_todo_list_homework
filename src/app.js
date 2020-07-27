import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: "#app",
        data: {
            toDoList: [
                { name: 'Food shop', priority: 'high'},
                { name: 'Laundry', priority: 'low' },
                { name: 'Homework', priority: 'high' }
            ],
            newChore: ''
        },
        methods: {
            saveNewChore: function () {
                this.toDoList.push({
                    name: this.newChore,
                    priority: 'high'
                });
                this.newChore = '';
            }
        }
    });
});