function login() {
   
    let accessToken = 'YOUR_API_KEY';

    
    displayFeeds(accessToken);
}

function displayFeeds(accessToken) {
    
    let feedsSection = document.getElementById('feeds');
    feedsSection.innerHTML = 'Fetching feeds...';

  
    feedsSection.innerHTML = 'CODE ALPHA.';
}
