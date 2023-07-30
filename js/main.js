function fetchUser() {
    fetch('https://randomuser.me/api')
        .then((result) => result.json())
        .then((data) => loadUser(data.results[0]))
}

function loadUser(user) {
    const users = document.querySelector('.user-info');
    const img = document.createElement('img');
    img.classList.add = 'user-info';
    img.src = `${user.picture.large}`;

    const h3 = document.createElement('h3');
    h3.classList.add = 'user-info';
    h3.textContent = `${user.name.first} ${user.name.last}`;
    h3.textContent = `${user.name.first} ${user.name.last}`;
    users.appendChild(img);
    users.appendChild(h3);
}

document.addEventListener('DOMContentLoaded', fetchUser);