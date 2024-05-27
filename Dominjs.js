// console.log("hello world!");
// console.log("Helloo how");



const promiseone = new Promise((resolve,reject)=>{
setTimeout(()=>{
    const error=true;
    if (!error){
        return resolve();
    }
    else{
        return reject();
    }
},2000)

});
promiseone.then(()=>{
console.lor("RESOLVE");
}).catch(()=>{
    console.log("Resolve");
})