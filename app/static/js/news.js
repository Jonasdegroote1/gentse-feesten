const NEWS = "https://www.pgm.gent/data/gentsefeesten/news.json";
(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$news = document.getElementById("container__news");
      this.$homeNews = document.getElementById("home__news-items");
    },

    buildUI() {
      this.fetchNewsData();
    },

    fetchNewsData() {
      getData(NEWS)
        .then((news) => {
          if (this.$homeNews) {
            this.generateHTMLForHomeNews(news);
          } else {
            this.$news;
          }
          {
            this.generateHTMLForNews(news);
          }
        })
        .catch((error) => console.log(error));
    },

    generateHTMLForHomeNews(news) {
      this.$homeNews.innerHTML = `
      ${news
        .splice(0, 3)
        .map((data) => {
          return ` 
              <li class="news-title">
                <a href="">
                  <div class=" home__news-item">
                    <h2>${data.title}</h2>
                    <div class="arrow">
                    <div class="arrow-line"></div>
                    <div class="arrow-head"></div>
                  </div>                  </div>
                </a>
              </li>
            `;
        })
        .join("")}
        
      `;
    },

    generateHTMLForNews(news) {
      this.$news.innerHTML = news
        .map((data) => {
          return `
          <li class="news-article">
            <a href="" id="${data.id}">
              <img src="static/${data.picture.medium}" alt="" class="top-img">
              <div class="news-article-info">
                <h2>${data.title}</h2>
                <div class="arrow">
                  <div class="arrow-line"></div>
                  <div class="arrow-head"></div>
                </div>
              </div>
            </a>
          </li>
        `;
        })
        .join("");
    },
  };
  app.initialize();
})();
