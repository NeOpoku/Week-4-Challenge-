/ TODO: Create a variable that selects the form element
const formElement = document.getElementById('blogForm');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorElement = document.getElementById('error');

    // Check for missing data
    if (!username || !title || !content) {
        errorElement.textContent = 'Please complete the form.';
        errorElement.style.display = 'block';
        return;
    }

    // Hide error message if form is valid
    errorElement.style.display = 'none';

    // Save the form data to local storage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push({ username, title, content });
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

    // Redirect to the blog page
    redirectPage('blog.html'); // Assuming `redirectPage` is available globally
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener('submit', handleFormSubmission);
