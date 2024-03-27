document.querySelector('body').addEventListener('scroll',()=>{
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    console.log(height);
})
