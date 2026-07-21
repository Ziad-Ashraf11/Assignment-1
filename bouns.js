var createCounter = function(init) {
   let num=init;
   return {
    increment(){
     return ++num;
    }
    ,
    decrement(){
      return  --num;
    }
    ,
    reset(){
     return   num=init;
    }
   }
    
};
const counter =createCounter(5);
console.log(counter.increment(),counter.reset() , counter.decrement());
