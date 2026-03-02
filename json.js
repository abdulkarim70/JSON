
const loadData=()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res)=> res.json() )
.then((data)=> console.log(data))
}
const loadPost=()=>{
    const url='https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
        // console.log(json)
        displayPost(data)
    })
}
const displayPost=(posts)=>{
const postContainer=document.getElementById('post-container')
postContainer.innerHTML=''// for blank 
 posts.forEach(post=>{
    
    const postCard=document.createElement('div')
   postCard.innerHTML=`
   <div class="post-card">
        <h2>${post.title}</h2>
        <p> ${post.body}</p>
    </div>`

    postContainer.appendChild(postCard)
 })
}
// loadPost()