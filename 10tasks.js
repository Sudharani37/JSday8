//function9 (anonymous)
var absolute=function(x){
    if(x<0){
        return 0-x;
    }
       return x;
};console.log(absolute(-27))
//function9 (arrow)
var absolute=(x)=>{
    if(x<0){
        return 0-x;
    }
       return x;
};console.log(absolute(-27))

//function10 (anonymous)
var max=function(a,b){
    if(a>b){
        return a
    }
        return b
};console.log(max(20,23))
//function10 (arrow)
var max=(a,b)=>{
    if(a>b){
        return a
    }
        return b
};console.log(max(20,23))