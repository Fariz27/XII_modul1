var app = new Vue({
    el  :   '#app',
    data:{
        'message':'Hello World'
    },
    methods:{
            greet: function(name){
            return "Good Morning, " + name;
        }
    }
})