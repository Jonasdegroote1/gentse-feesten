const EVENTS = " https://www.pgm.gent/data/gentsefeesten/events.json";
(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$pageDetail = document.getElementById("event__detail");
      this.$location = document.getElementById("location");
      this.$organizer = document.getElementById("orginazer");
    },

    buildUI() {
      this.fetchDetailForEvent();
    },

    fetchDetailForEvent() {
      getData(EVENTS)
        .then((events) => {
          const params = new URLSearchParams(window.location.search);
          const day = params.get("day");
          const slug = params.get("slug");
          const event = events.find((ev) => {
            return ev.day === day && ev.slug === slug;
          });

          this.generateHTMLForDetailEvent(event);
          this.generateHTMLForDetailLocation(events, event.location, day);
          this.generateHTMLForDetailOrganizer(events, event.organizer);
        })
        .catch((error) => console.log(error));
    },

    generateHTMLForDetailEvent(event) {
      this.$pageDetail.innerHTML = `
        <a href="day.html?day=${event.day}" class="day_return">
          <div class="arrow-left">
            <div class="arrow-head"></div>
            <div class="arrow-line"></div>
          </div>
          Overzicht van ${event.day} JULI
        </a>
        <div class="detail-event">
          <div class="detail-left">
            <h2>${event.title}</h2>
              <div class="location">
              <a href=""><img
              src="../static/images/gentse-feesten-icoontjes/navigate.svg"
              alt=""
              />
              ${event.location}</a>
              <p>${event.start}u. - ${event.start}u.</p>
            </div>
            <p>${event.description}</p>
          </div>
          <div class="detail-img">
          <img
              src="${
                event.image
                  ? event.image.full
                  : "../static/images/No_Image_Available.jpg"
              }"
              alt=""
              />
          </div>
          <div class="event_information">
            <p>Organisator: <a href="#">${event.organizer}</a> </p>
            <p>website: <a href="${
              event.url ? event.url : ""
            }" target="_blank">${event.url ? event.url : ""}</a> </p>
            <p>Categorieën: <a href="#">${event.category}</a></p>
          </div>
          <ul class="detail-social-list">
            <li>
              <a href="https://twitter.com/hashtag/gentsefeesten" target="_blank">
                <img
                  src="../static/images/gentse-feesten-icoontjes/twitter.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/stadgent" target="_blank">
                <img
                  src="../static/images/gentse-feesten-icoontjes/facebook.svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.pinterest.com/stadgent/gentse-feesten/ " target="_blank"
              >
                <img
                  src="../static/images/gentse-feesten-icoontjes/pinterest.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>
          <div class="map-location">
            <div class="map-location-left">
              <h2> <img
              src="../static/images/gentse-feesten-icoontjes/marker.svg"
              alt=""
              /> ${event.location}</h2>

              <a href="https://www.google.com/maps/search/google+maps/@51.0582306,3.7079745,13z/data=!3m1!4b1"> open in Google Maps</a>
              <h3>DOWNLOAD FEESTPLAN</h3>
              </div>
            <div class="map-location-right">
              <img src="../static/images/kaart.png" alt=""/>
            </div>

          </div>
        </div>
      `;
    },

    generateHTMLForDetailLocation(events, location, day) {
      const filteredEvents = events.filter((ev) => {
        return ev.location === location && ev.day === day;
      });

      this.$location.innerHTML = filteredEvents
        .map((filter) => {
          return `
          <li>
            <a href="detail.html?day=${filter.day}&slug=${
            filter.slug
          }" class="event__cards">
              <div class="top_card">
                <img src="${
                  filter.image
                    ? filter.image.full
                    : "../static/images/No_Image_Available.jpg"
                }" alt="">
              </div>
              <div class="bottom_card">
                <h3>${filter.title}</h3>
                <div class="event_details">
                  <h4>${filter.location}</h4>
                  <p>${filter.start}u.</p>
                </div>
              </div>
            <a/>
          </li>
        `;
        })
        .join("");
    },
    generateHTMLForDetailOrganizer(events, organizer) {
      const filteredEvents = events.filter((ev) => {
        return ev.organizer === organizer;
      });
      this.$organizer.innerHTML = filteredEvents
        .splice(0, 4)
        .map((filter) => {
          return `
              <li>
                <a href="detail.html?day=${filter.day}&slug=${filter.slug}">
                  <p>${filter.day} JULI ${filter.start} u.</p>
                  <h3>${filter.title}</h3>
                  <p>${filter.location}</p>
                </a>
              </li>
        `;
        })
        .join("");
    },
  };
  app.initialize();
})();
