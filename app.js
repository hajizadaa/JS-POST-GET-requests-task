const baseUrl = "http://localhost:3000/";
const userCard = document.querySelector(".user-cards");

async function  GetUsers() {
    try {
    const userCard = document.querySelector(".user-cards");
    const res = await fetch(`${baseUrl}users`);
    const data = await res.json();

    data.forEach(element => {
        userCard.innerHTML += `
        <div>
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
        <div>
            <p>Title: ${element.title}</p>
            <p>Description: ${element.description}</p>
            <p>Image: ${element.image}</p>
        </div>
        <hr>
        `
        });
    } 
    catch (error) {
        console.log(error);
    }
}

GetUsers();
GetPosts();