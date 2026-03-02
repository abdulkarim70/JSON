
const loadData=()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=> res.json() )
.then((data)=> console.log(data))
}
const loadPost=()=>{
    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res=>res.json())
    .then(json=> {
        console.log(json)
        displayPost(json)
    })
}
const displayPost=(posts)=>{
    // get the container
    const postContainer=document.getElementById('post-container')
    // console.log(postContainer);

    posts.forEach(post=>{
        console.log(post.title)
        // create html element
        const li= document.createElement('li')
        li.innerText=post.title
        // console.log(li);
        // add li into container
        postContainer.appendChild(li)
        
    })
}
