var vm = new Vue({
    el: '#app',
    data: {
        version: 1.2,
        todoList: [],
        doingList: [],
        doneList: [],
        element: null,
        listNumber: 0,
        allListsLength: null,
        doneLengthValue: null,
        currentlyDoing: null,
        alert: '',
        alert_confirm: false


    },
    methods: {

        pushList() {
            if (this.element !== '' & this.element !== null & this.element !== ' ') {
                this.todoList.push(this.element);
                console.log('item : "' + this.element + '" a été ajouté');
            } else {
                console.log('item vide !')
            }
            this.element = '';
            this.getAllLength()
        },
        moveToTodo(index, done) {
            this.todoList.push(done);
            this.doneList.splice(index, 1)
            // this.$delete(this.todoList, index)

            this.getAllLength()
        },
        moveToDoing(index, todo) {
            this.doingList.push(todo);
            this.todoList.splice(index, 1);
            // this.$delete(this.todoList, index)

            this.getAllLength();

        },
        moveToDone(index, doing) {
            this.doneList.push(doing);
            this.doingList.splice(index, 1);
            // this.$delete(this.todoList, index)

            this.getAllLength();

        },
        clearList(listName) {
            if (listName === 'todo') {
                this.todoList = [];
            }
            if (listName === 'doing') {
                this.doingList = [];
            }
            if (listName === 'done') {
                this.doneList = [];
            }
            if (listName === 'all' && this.alert_confirm === true) {
                this.doneList = [];
                this.todoList = [];
                this.doingList = [];
                this.alert_confirm = false;
            }
            this.getAllLength()

        },
        donePercentage() {
            this.doneLengthValue = (this.doneList.length * 100) / this.allListsLength;
            this.doneLengthValue = Math.round(this.doneLengthValue);
            if (this.doingList == 0 & this.todoList == 0 & this.doneList != null) {
                this.doneLengthValue = 100;
            }
            document.getElementById("progressTodo").value = this.doneLengthValue;
        },
        doingPercentage() {
            this.currentlyDoing = (this.doingList.length * 100) / this.allListsLength;
            this.currentlyDoing = Math.round(this.currentlyDoing);

            document.getElementById("progressTodo").value = this.doneLengthValue;
        },
        getAllLength() {
            this.allListsLength = this.todoList.length + this.doingList.length + this.doneList.length;
            this.donePercentage();
            this.doingPercentage();
            return this.allListsLength;
        },
        resetErrors() {
            this.alert = '';
        },

    },
    mounted() {
        this.getAllLength();

    }

});