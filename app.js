const baseUrl = "http://localhost:3000/";
const userCard = document.querySelector(".user-cards");

async function  GetUsers() {
    try {
    const userCard = document.querySelector(".user-cards");
    const res = await fetch(`${baseUrl}users`);
    const data = await res.json();

    data.forEach(element => {
        userCard.innerHTML += `
        <div style = "margin-bottom: 30px;">
            <p>Username: ${element.username}</p>
            <p>Age: ${element.age}</p>
            <p>Email: ${element.email}</p>
            <p>Password: ${element.password}</p>
        </div>
        `
        });
    } 
    catch (error) {
        console.log(error);
    }
}

async function  GetPosts() {
    try {
        const postCard = document.querySelector(".post-cards");
        const res = await fetch(`${baseUrl}posts`);
        const data = await res.json();

    data.forEach(element => {
        postCard.innerHTML += `
        <div style = "margin-bottom: 30px;">
            <p>Title: ${element.title}</p>
            <p>Description: ${element.description}</p>
            <p>Image: <img src = "${element.image}"> </img> </p>
        </div>
        `
        });
    } 
    catch (error) {
        console.log(error);
    }
}

GetUsers();
GetPosts();