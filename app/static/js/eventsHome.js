const EVENTS = " https://www.pgm.gent/data/gentsefeesten/events.json";

(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$homeEvents = document.getElementById("home__events");
    },

    buildUI() {
      this.fetchEventsForHome();
    },
    fetchEventsForHome() {
      getData(EVENTS)
        .then((events) => {
          const htmlStr = this.getHTMLForHomeEvents(events);
          this.$homeEvents.innerHTML = htmlStr;
        })
        .catch((error) => console.log(error));
    },

    getHTMLForHomeEvents(events) {
      let random = Math.floor(Math.random() * (events.length - 8));
      return events
        .slice(random, random + 8)
        .map((event) => {
          return `
      <a href="events/detail.html?day=${event.day}&slug=${
            event.slug
          }" class="event__cards">
        <div class="top_card top_card-img">
          <h3>${event.day_of_week} ${event.day} juli</h3>
          <img src="${
            event.image
              ? event.image.full
              : "static/images/No_Image_Available.jpg"
          }" alt="">
        </div>
        <div class="bottom_card">
          <h2>${event.title}</h2>
          <div class="event_details">
            <h3>${event.location}</h3>
            <p>${event.start}u.</p>
          </div>
        </div>
      </a>
    
        `;
        })
        .join("");
    },
  };
  app.initialize();
})();
