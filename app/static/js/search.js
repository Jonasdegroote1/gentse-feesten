const EVENTS = " https://www.pgm.gent/data/gentsefeesten/events.json";

(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$search = document.getElementById("searchbar");
      this.$results = document.getElementById("results");
      this.$searchOutput = document.getElementById("search-output");
      this.$hamburgerMenu = document.getElementById("hamburger_menu");
      this.$input = document.getElementById("input");
      this.$events = document.getElementById("event__list");
    },

    buildUI() {
      this.searchBar();
      this.generateListForEvents();
    },
    searchBar() {
      const params = new URLSearchParams(window.location.search);
      const search = params.get("search");
      this.$input.value = search;
      if (search && search.length > 2) this.fetchForFilteredEvents(search);
    },

    fetchForFilteredEvents(result) {
      getData(EVENTS)
        .then((events) => {
          this.getHTMLForSearchEvents(events, result);
          this.getHTMLForSearchResult(events, result);
        })
        .catch((error) => console.log(error));
    },

    getHTMLForSearchResult(events, result) {
      let filtered = events.filter(
        (event) =>
          event.category.findIndex((e) => e.toLowerCase().includes(result)) !==
            -1 ||
          event.title.toLowerCase().includes(result) ||
          event.location.toLowerCase().includes(result)
      );
      this.$results.innerHTML = `
          <div  class="results">
            <p>${filtered.length} resultaten voor "${result}"  </p>
          </div>`;
    },

    getHTMLForSearchEvents(events, result) {
      let filtered = events.filter(
        (event) =>
          event.category.findIndex((e) => e.toLowerCase().includes(result)) !==
            -1 ||
          event.title.toLowerCase().includes(result) ||
          event.location.toLowerCase().includes(result)
      );

      filtered = filtered.sort((a, b) => {
        if (a.sort_key < b.sort_key) {
          return -1;
        }
      });
      this.$searchOutput.innerHTML = filtered
        .map((filter) => {
          return `
          <li>
            <a href="events/detail.html?day=${filter.day}&slug=${
            filter.slug
          }" class="event__cards">
                <div class="top_card">
                  <h3>${filter.day_of_week} ${filter.day} juli</h3>
                  <img src="${
                    filter.image
                      ? filter.image.full
                      : "static/images/No_Image_Available.jpg"
                  }" alt="">
                </div>
                <div class="bottom_card">
                  <h3>${filter.title}</h3>
                  <div class="event_details">
                    <h4>${filter.location}</h4>
                    <p>${filter.start}u.</p>
                  </div>
                </div>
              </a>
            </li>
      `;
        })
        .join("");
    },

    generateListForEvents() {
      let $item = document.getElementById("list");
      let $list = document.getElementById("raster");

      $item.addEventListener("click", (e) => {
        this.$events.classList.add("list");
        $item.classList.add("red");
        $list.classList.remove("red");

        $list.addEventListener("click", (e) => {
          this.$events.classList.remove("list");
          $item.classList.remove("red");
          $list.classList.add("red");
        });
      });
    },
  };
  app.initialize();
})();
