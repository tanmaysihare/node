console.log('a');
console.log('b');
const delay =()=> {
    const promise = new Promise((resolve)=>{
        setTimeout(()=> {resolve(console.log('c'))},2000);
    });
    return promise;
}
async function printD(){
    await delay();
    console.log('d');
    console.log('e');
}
printD();