function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let success=true;
            if(success){
                resolve("Data fetched successfully")
            }
            else{
                reject("Error fetching data")
            }
        }, 3000);
    })
}

// let response1=fetchData();
// console.log(response1);//It shows pending

fetchData()
    .then((data)=>{
        console.log(data);
        return `Hitesh`
    })
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    });