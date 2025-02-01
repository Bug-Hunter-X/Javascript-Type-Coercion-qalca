function foo(a,b){
    //Check if both inputs are numbers, if not convert them to number before addition
    if(typeof a !== 'number') a = Number(a);
    if(typeof b !== 'number') b = Number(b);
    return a+b;}
console.log(foo(1, "1")); //Output: 2
console.log(foo(1, 1)); //Output: 2