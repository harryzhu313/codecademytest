let viewButton = document.getElementById('view-button');
let closeButton = document.getElementById('close-button');
let codey = document.getElementById('codey');

let showCodey = () => {

    codey.style.display = 'block';
    closeButton.style.display = 'block';
    viewButton.innerHTML = "Hello World!";
    viewButton.style.cursor = "pointer";
};



viewButton.addEventListener('click', showCodey);

let hideCodey = () => {
    codey.style.display = 'none';
    closeButton.style.display = 'none';
    viewButton.innerHTML = "View";

};


closeButton.addEventListener('click', hideCodey);