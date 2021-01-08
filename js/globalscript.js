console.log('welcome to console of Taja News!');

let source = 'the-globe-and-mail';
let apiKey = 'a64036b2a1114a30b531ebfb5bfbfa5f';

// Grab the news container 
let newsAccordian = document.getElementById('newsAccordian');

// Create an ajax get request 
let xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`, true);

// What to do when response is ready 
xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = ""
        articles.forEach(function(element, index) {
            let news = `<div class="content">
                            <p>
                                <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> <b>Breaking News:${index+1}</b> ${element.title} </button>
                            </p>
                            <div class="collapse" id="collapse${index}">
                                <div class="card card-body"> ${element.description} <a href="${element.url}" target = "_blank"> Read more here</a> </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    } else {
        console.log("some error occured")
    }
}

xhr.send();