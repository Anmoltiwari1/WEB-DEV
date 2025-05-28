function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post data fetched!")
        }, 2000);
    })
}

function ftechCommentData(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Comment data fetched succesfully!");
      }, 3000);
    });
}

async function blogdata() {
    try {
        console.log(("fteching blog data"));
        //first method
        /*const blogdata=await fetchPostData();
        const commentdata=await ftechCommentData();
        console.log(blogdata);
        console.log(commentdata);
        console.log("ftech completed!");*/

        //second method(by promises.all)
        const[postdata,commentdata]=await Promise.all([fetchPostData(),ftechCommentData()])
        console.log(postdata);
        console.log(commentdata);
        console.log("ftech completed!");
        
    } catch (error) {
        console.error("Error fteching blog data",error);
    }
}

blogdata();