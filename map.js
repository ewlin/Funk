function rest (array) {
    if (array.length > 1) {
        return array.slice(1);
    }
}

//A map function that allows for more than one collection to be passed as arguments 

//TODO: 
// 1) Add ability to pass index of element into callback function 
// 2) Add ability to handle objects 
function mapFlex (func/*, colls*/) {
    if (arguments.length < 2) throw new Error("Nothing to map; mapFlex requires at least two arguments: an application function, and a collection"); 
    
    var collections = Array.prototype.slice.apply(arguments).slice(1),
        newArr = []; 
    
    if (arguments.length > 2) {
        collections[0].forEach(function(e,i){
            var itArgs = [e],
                val; 
            rest(collections).forEach(col=>col[i] ? itArgs.push(col[i]) : itArgs.push(null)); 
            val = func.apply(null, itArgs);
            newArr.push(val); 
        });
    } else {
        return collections[0].map(func); 
    }
    
    return newArr; 
}


function add () {
    var nums = Array.prototype.slice.apply(arguments); 
    return nums.reduce((s,n)=>s+n); 
}


function partial(func /*,args*/) {
    var args = Array.prototype.slice.apply(arguments).slice(1);
     
    return function(/*,args*/) {
        var newArgs = args.concat(Array.prototype.slice.apply(arguments));
        return func.apply(null,newArgs);
    }
}

function newPartial(func,...args) {
    return function(...moreArgs) {
        return func.apply(null,args.concat(moreArgs));
    }
}


