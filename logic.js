/ TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function readLocalStorage() {
    const posts = localStorage.getItem('blogPosts');
    return posts ? JSON.parse(posts) : [];
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function storeLocalStorage(newPost) {
    const existingPosts = readLocalStorage();
    existingPosts.push(newPost);
    localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function renderBlogPosts() {
    const posts = readLocalStorage();
    const postsContainer = document.getElementById('posts');
    const noPostsMessage = document.getElementById('no-posts');

    if (posts.length > 0) {
        postsContainer.innerHTML = '';  // Clear any existing posts
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By:</strong> ${post.username}</p>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
        noPostsMessage.textContent = ''; // Hide the "No Blog posts yet..." message
    } else {
        postsContainer.innerHTML = '';
        noPostsMessage.textContent = 'No Blog posts yet...';
    }
}

// ! Use the following function whenever you need to redirect to a different page
function redirectToLandingPage() {
    window.location.href = 'index.html';  // Adjust the path as necessary
}

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
