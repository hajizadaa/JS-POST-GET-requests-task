const baseUrl = "http://localhost:3000/";
const addPostForm = document.querySelector(".post-add-form");
const userCard = document.querySelector(".user-cards");

async function  AddPost() {
    try {
        let titleInput = document.querySelector(".title-input").value;
        let descriptionInput = document.querySelector(".description-input").value;
        let imageInput = document.querySelector(".image-input").value;
        if(titleInput == "" || descriptionInput == "" || imageInput == "")
        {
            alert("Sehvlik var");
        }
        else
        {
            const post = await fetch(baseUrl + "posts",
                {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            title: titleInput,
                            description: descriptionInput,
                            image: imageInput
                        }
                    )
                }
            );
            const data = await post.json();
            console.log(data);
        }
    } catch (error) {
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
        `
        });
    } 
    catch (error) {
        console.log(error);
    }
}

addPostForm.addEventListener("submit", (e) =>
{
    e.preventDefault();
    AddPost();
    GetPosts();
})