function login() {
    // Perform login with respective social media API
    // For simplicity, assume the user is logged in
    document.getElementById('login').style.display = 'none';
    document.getElementById('feeds').style.display = 'block';
    displayFeeds();
}

function displayFeeds() {
    // Fetch and display feeds from social media platforms
    // For simplicity, just display some sample content
    const feedsDiv = document.getElementById('feeds');
    feedsDiv.innerHTML = `
        <div>
            <h2>Facebook</h2>
            <p>Sample Facebook feed content...</p>
        </div>
        <div>
            <h2>Twitter</h2>
            <p>Sample Twitter feed content...</p>
        </div>
    `;
}
