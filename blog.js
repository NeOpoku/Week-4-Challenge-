// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainElement = document.querySelector('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, content, parent) {
    const element = document.createElement(tag);
    element.textContent = content;
    parent.appendChild(element);
    return element;
}

// TODO: Create a function that handles the case where there are no blog posts to display
function displayNoPostsMessage() {
    mainElement.innerHTML = ''; // Clear any existing content
    buildElement('p', 'No Blog posts yet...', mainElement);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length === 0) {
        displayNoPostsMessage();
    } else {
        mainElement.innerHTML = ''; // Clear any existing content
        blogPosts.forEach(post => {
            const postContainer = document.createElement('div');
            postContainer.classList.add('blog-post');

            buildElement('h2', post.title, postContainer); // Post title
            buildElement('h4', `By: ${post.username}`, postContainer); // Author username
            buildElement('p', post.content, postContainer); // Post content

            mainElement.appendChild(postContainer);
        });
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', () => {
    redirectPage('index.html'); // Assuming `redirectPage` is globally available from logic.js
});
