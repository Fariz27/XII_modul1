var app = new Vue({
    el  :   '#app',
    data:{
        'message'       :'Hello World',
        'url_telkom'    :'https://smktelkom-mlg.sch.id',
        'nama'          :'',
        'stock'         :6,
        'kelas'         :['XIIR1','XIIR2','XIIR3','XIIR4','XIIR5','XIIR6','XIIR7']
    },
    methods:{
            greet: function(name){
            return "Good Morning, " + name;
        }
    }
})