const EVENTS = " https://www.pgm.gent/data/gentsefeesten/events.json";
const CATEGORIES = "https://www.pgm.gent/data/gentsefeesten/categories.json";
(() => {
  const app = {
    initialize() {
      this.cacheElements();
      this.buildUI();
    },
    cacheElements() {
      this.$eventList = document.getElementById("event__list");
      this.$filterList = document.getElementById("filter-list");
      this.$events = document.getElementById("event__list");
      this.$day = document.getElementById("day");
      this.$dayMenu = document.getElementById("overflow-day");
    },

    buildUI() {
      this.fetchDataDay();
      this.generateListForEvents();
      this.generateChangeDay();
    },

    async fetchDataDay() {
      try {
        let response = await fetch(CATEGORIES);
        let categories = await response.json();

        response = await fetch(EVENTS);
        const events = await response.json();

        const params = new URLSearchParams(window.location.search);
        const day = params.get("day") ?? "15";

        categories = categories.filter((category) => {
          const filteredEvents = events.filter((event) => {
            return event.day === day && event.category.includes(category);
          });
          return filteredEvents.length > 0;
        });

        const htmlStrForDay = this.generateHTMLForDay(day);
        this.$day.innerHTML = htmlStrForDay;

        const htmlStrForEvents = this.generateHTMLForEvents(categories, events);
        this.$eventList.innerHTML = htmlStrForEvents;

        const htmlStrfForFilter = this.generateHTMLForFilter(categories, day);
        this.$filterList.innerHTML = htmlStrfForFilter;
      } catch (error) {
        console.log(`Catch: ${error}`);
      }
    },

    generateHTMLForDay(day) {
      return `
            <h1>   ${day} JULI </h1>
      `;
    },

    generateHTMLForEvents(categories, events) {
      const params = new URLSearchParams(window.location.search);
      const day = params.get("day") ?? "15";
      return categories
        .map((category) => {
          let filteredEvents = events.filter((event) => {
            return event.day === day && event.category.includes(category);
          });
          filteredEvents = filteredEvents.sort((a, b) => {
            if (a.sort_key < b.sort_key) {
              return -1;
            }
          });
          return `
          <h2 id="${category}">${category} <a href="day.html?day=${day}#filter-list"><img src="../static/images/gentse-feesten-icoontjes/arrow-up.svg"></a> </h2>
          <ul class="events">
            ${filteredEvents
              .map((event) => {
                return `
                  <li>
                    <a href="detail.html?day=${event.day}&slug=${
                  event.slug
                }" class="event__cards" >
                      <div class="top_card">
                        <img src="${
                          event.image
                            ? event.image.full
                            : "../static/images/No_Image_Available.jpg"
                        }" alt="">
                      </div>
                      <div class="bottom_card">
                        <h3>${event.title}</h3>
                        <div class="event_details">
                          <h4>${event.location}</h4>
                          <p>${event.start}u.</p>
                        </div>
                      </div>
                    <a/>
                  </li>`;
              })
              .join("")}
          </ul>
        `;
        })
        .join("");
    },

    generateHTMLForFilter(categories, day) {
      return categories
        .map((category) => {
          return `
        <li>
        <a href="day.html?day=${day}#${category}">
          <img
          src="../static/images/gentse-feesten-icoontjes/marker.svg"
          alt=""
          />${category}</a>
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

    generateChangeDay() {
      const $item = document.getElementById("wijzig-dag");
      $item.addEventListener("click", (e) => {
        this.$dayMenu.classList.add("open");

        const $btnClose = document.getElementById("overflow-day-btn");
        $btnClose.addEventListener("click", (e) => {
          this.$dayMenu.classList.remove("open");
        });
      });
    },
  };
  app.initialize();
})();
