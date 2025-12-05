const baseUrl = "http://localhost:3000/";
const addPostForm = document.querySelector(".user-add-form");
const postCard = document.querySelector(".post-cards");

async function  AddUser() {
    try {
        let userNameInput = document.querySelector(".user-name-input").value;
        let ageInput = document.querySelector(".age-input").value;
        let emailInput = document.querySelector(".email-input").value;
        let passwordInput = document.querySelector(".password-input").value;
        if(userNameInput == "" || ageInput == "" || emailInput == "" || passwordInput == "" || passwordInput < 12)
        {
            alert("Sehvlik var");
        }
        else
        {
            const user = await fetch(baseUrl + "users",
                {
                    method: "POST",
                    body: JSON.stringify(
                        {
                            username: userNameInput,
                            age: ageInput,
                            email: emailInput,
                            password: passwordInput
                        }
                    )
                }
            );
            const data = await user.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

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

addPostForm.addEventListener("submit", (e) =>
{
    e.preventDefault();
    AddUser();
    GetUsers();
})