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
           <a href="https://web.facebook.com/piranavan.pirana.587/"> <img src="https://images.hindustantimes.com/tech/img/2023/09/21/960x540/fb_1695273515215_1695273522698.jpg" alt="face book" style="width:180px;height:100px;"></a>
        </div>
        <div>
            <h2>Linkedin</h2>
            <p>Sample Twitter feed content...</p>
            <a href="https://www.linkedin.com/in/piranavan-pirana/"><img src="https://i.pcmag.com/imagery/reviews/05QJZocZxCTxBBzuKYOJMWZ-5.fit_scale.size_760x427.v1569472374.jpg" alt="Linkedin" style="width:180px;height:100px;"></a>
        </div>
    `;
}
