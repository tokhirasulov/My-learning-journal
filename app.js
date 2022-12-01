const viewMore = document.getElementById("View-more")

function getMore(){
    let HTML = ``
    HTML +=`
    <div class="blog">
            <img src="img/blog-four.png" alt="third blog's picture">
            <p class="date">November 29, 2022</p>
            <h1>Blog four</h1>
            <article>I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning 
                in the Frontend Developer Career Path.</article>
            </div>

            <div class="blog">
            <img src="img/blog-five.png" alt="third blog's picture">
            <p class="date">November 29, 2022</p>
            <h1>Blog five</h1>
            <article>I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning 
                in the Frontend Developer Career Path.</article>
            </div>

            <div class="blog">
            <img src="img/blog-six.png" alt="third blog's picture">
            <p class="date">November 29, 2022</p>
            <h1>Blog six</h1>
            <article>I'm excited to start a new learning journey as a 
                Scrimba Bootcamp student! After several months of learning 
                in the Frontend Developer Career Path.</article>
            </div>
    `
    return HTML
}

viewMore.addEventListener('click', function render(){
    document.getElementById("HTML").innerHTML= getMore()
    document.getElementById("div-view-more").style.display = "none"
})
render()