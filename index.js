const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    },
    
    {
        name: "Pablo Picasso",
        username: "pablo1881",
        location: "Malaga, Spain",
        avatar: "images/picasso-avatar.jpg",
        post: "images/picasso.jpg",
        comment: "@dali1904 is organizing private party tonight. Let's all visit him!",
        likes: 100835
    },
    
    {
        name: "Frida Kahlo",
        username: "frida1907",
        location: "Coyoacán, Mexico",
        avatar: "images/frida-avatar.jpg",
        post: "images/frida.jpg",
        comment: "I spent all day debugging but now I am stuck. Community help!!!",
        likes: 283
    },
    
    {
        name: "Marc Chagall",
        username: "shagi1887",
        location: "Vitebsk, Byelorussia",
        avatar: "images/chagall-avatar.jpg",
        post: "images/chagall.jpg",
        comment: "i'm in romantic mood today...",
        likes: 233
    }
    
    
]

const user = document.getElementById("user-avatar")
const avatar = document.getElementById("artist-avatar")
const artistName = document.getElementById("artist-name")
const artistBirthplace = document.getElementById("artist-birthplace")
const selfie = document.getElementById("selfie")
const heart = document.getElementById("heart-img")
const like = document.getElementById("like")
const artistUsername = document.getElementById("user-id")
const comment = document.getElementById("artist-comment")
 
   

let post = 0



    
    selfie.addEventListener("click", function()
    {
    changePage()
    
    })
    
     
 function changePage() {
   
     if (post > posts.length-2) {
        post = 0}
        else {
            post++
        }
        console.log(post)
        update()
     
 }
  

function update () {
    
    artistName.textContent = posts[post].name
    artistBirthplace.textContent = posts[post].location
    like.textContent = `${posts[post].likes} likes`
    artistUsername.textContent = posts[post].username
    comment.textContent = ` ${posts[post].comment}`
    selfie.style.backgroundImage = `url(${posts[post].post})`
    avatar.style.backgroundImage = `url(${posts[post].avatar})`
   
    
}


