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
            newChore: '',
            setPriority: ''
        },
        methods: {
            saveNewChore: function () {
                this.toDoList.push({
                    name: this.newChore,
                    priority: this.setPriority
                });
                this.newChore = '';
            },
            tickChore: function (index) {
                this.toDoList[index].priority = 'done';
            },

            changeToLow: function (index) {
                this.toDoList[index].priority = 'low';
            },

            changeToHigh: function (index) {
                this.toDoList[index].priority = 'high';
            },

            removeChore: function (index) {
                this.toDoList.splice(index, 1);
            }
        }
    });
});