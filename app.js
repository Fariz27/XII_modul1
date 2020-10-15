var app = new Vue({
    el  :   '#app',
    data:{
        'message'       :'Hello World',
        'url_telkom'    :'https://smktelkom-mlg.sch.id',
        'nama'          :'',
        'stock'         :6
    },
    methods:{
            greet: function(name){
            return "Good Morning, " + name;
        }
    }
})