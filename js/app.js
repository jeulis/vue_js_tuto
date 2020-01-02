var vm = new Vue({
    el: '#app',
    data: {
        todos: ['finir cette liste'],
        element: null,
        listNumber: 0,



    },
    methods:{
        pushList(){
            if (this.element !== '' & this.element !== null){
                this.todos.push(this.element);
                console.log('item ajouté');
            }
            else{
                console.log('item vide !')
            }
            this.element = '';
        },
        remove (index) {
            this.todos.splice(index, 1)
            // this.$delete(this.todos, index)
        },
        changeProgress : function(){
            var progressValue = document.getElementById("progressTodo").value;

            document.getElementById("progressTodo").value += 5;

            if (progressValue >=100){
                document.getElementById("progressTodo").value = 0;
            }


        }
    }

});