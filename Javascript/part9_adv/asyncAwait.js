function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"ChaiCode",url:"https://youtube.com"})
        }, 3000);
    })
}

/*
//First method
fetchUserData
.then()
.catch() */

//We can only use await when when we have async iver the function
async function getUserData(){
    try {
        console.log("Fteching user data....");
        const userData=await fetchUserData()
        console.log(userData);
        
    } catch (error) {
        console.log(error);
        
    }
}

getUserData();