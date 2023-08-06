const fetchData = callback => {
    // setTimeout(()=>{
    //     callback('Done!');
    // },1500)
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        },1500)
    });
    return promise;
};

setTimeout(()=>{
    console.log('Console in timeout!');
    fetchData()
        .then(text=>{
            console.log(text);
            return fetchData();
        }).then(text2=>{
            console.log(text2);
        })
    // fetchData(text=>{
    //     console.log(text);
    // })
},2000)

console.log('Hello!');
console.log('Hi!');