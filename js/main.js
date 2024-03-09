function login() {
   
    document.getElementById('login').style.display = 'none';
    document.getElementById('feeds').style.display = 'block';
    displayFeeds();
}

function displayFeeds() {

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
