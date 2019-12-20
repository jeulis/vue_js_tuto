var vm = new Vue({
    el: '#app',
    data: {
        success: false,
        message: 'oui alors',
        items: [],
        element: ''

    },
    methods:{
        pushList : function () {
            if (this.element != ''){
                this.items.push(this.element);
                console.log('item ajouté');
            }
            else{
                console.log('item vide !')
            }
            this.element = '';
        }
    }

})
