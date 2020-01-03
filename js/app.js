var vm = new Vue({
    el: '#app',
    data: {
        todoList: ['Finir cette liste 1', 'Finir cette liste 2', 'Finir cette liste 3'],
        doneList: ['HEHEHE', 'fait'],
        element: null,
        listNumber: 0,
        number: 9,


    },
    methods: {
        initiateProgressBar() {

        },
        pushList() {
            if (this.element !== '' & this.element !== null & this.element !== ' ') {
                this.todoList.push(this.element);
                console.log('item : "' + this.element + '" a été ajouté');
            } else {
                console.log('item vide !')
            }
            this.element = '';
            this.updateLength()
        },
        move(index, todo) {
            this.doneList.push(todo);
            this.todoList.splice(index, 1);
            // this.$delete(this.todoList, index)

            this.updateLength();

        },
        remove(index, done) {
            this.todoList.push(done);
            this.doneList.splice(index, 1)
            // this.$delete(this.todoList, index)

            this.updateLength()
        },
        clearList() {
            this.todoList = [];
            this.updateLength()


        },
        updateLength() {
            document.getElementById("progressTodo").value = this.todoList.length;
        },


    }

});