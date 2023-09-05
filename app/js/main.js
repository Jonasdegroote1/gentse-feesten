(() => {
	const app = {
		initialize() {
			this.cacheElements();
			this.buildUI();
		},
		cacheElements() {
			this.$head = document.getElementById("head");
			this.$events = document.getElementById("events");
			this.$cards = document.getElementById("cards");
			this.$socials = document.getElementById("socials");
			this.$countDown = document.getElementById("countdown");
			this.$countUp = document.getElementById("countup");
			this.$detail = document.getElementById("project-details");
		},
		buildUI() {
			this.$head.innerHTML = this.generateHTMLForHeader();
			this.$events.innerHTML = this.generateEvent();
			this.$cards.innerHTML = this.generateCards();
			this.$socials.innerHTML = this.generateSocials();
			this.generateOverflow();
			this.generateHTMLForClocks();
			setInterval(() => {
				this.generateHTMLForClocks();
			}, 1000);
		},
		generateHTMLForHeader() {
			return headnav
				.map((head) => {
					return `<a href="${head.link}" ${
						head.type === "external" ? 'target="_blank"' : ""
					}> ${head.name}</a>`;
				})
				.join("");
		},

		generateEvent() {
			return events
				.map((event) => {
					return `<li>
          <a href="${event.link}" target="_blank">${event.title}</a> 
          </li> 
          `;
				})
				.join("");
		},

		generateCards() {
			return projects
				.map((project) => {
					return `
          <div class="card" data-id="${project.id}"> 
            <img src="${project.screenshots[0]}"> 
            <p>${project.author.firstName} ${project.author.lastName}</p> 
            <h2>${project.title}</h2> 
            <ul class="technology">${project.technologies
							.map((technology) => {
								return `<li>${technology.name}</li>`;
							})
							.join("")}</ul> 
        </div>`;
				})
				.join("");
		},

		getTimeDifference(from, to) {
			let differnce = Math.abs(from - to);
			const day = 1000 * 60 * 60 * 24;
			const hour = 1000 * 60 * 60;
			const minute = 1000 * 60;
			const second = 1000;

			let days = Math.floor(differnce / day);
			differnce -= day * days;
			let hours = Math.floor(differnce / hour);
			differnce -= hour * hours;
			let minutes = Math.floor(differnce / minute);
			differnce -= minute * minutes;
			let seconds = Math.floor(differnce / second);
			days = days < 100 ? "0" + days : days;
			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			return `<h2> ${days}days ${hours}h ${minutes}m ${seconds}s</h2>`;
		},

		generateHTMLForClocks() {
			this.$countDown.innerHTML = this.getTimeDifference(
				new Date().getTime(),
				finish_YEAR
			);
			this.$countUp.innerHTML = this.getTimeDifference(
				new Date().getTime(),
				beginning_YEAR
			);
		},

		generateSocials() {
			return `<ul>
      <Li><a href="${Socials.website}" target="_blank"><img src="images/socials/website.png"></a>
      </Li>
      <Li><a href="${Socials.facebook}" target="_blank"><img src="images/socials/facebook.png"></a>
      </Li>
      <Li><a href="${Socials.instagram}" target="_blank"><img src="images/socials/instagram.png"></a>
      </Li>
      <Li><a href="${Socials.linkedin}" target="_blank"><img src="images/socials/linkedin.png"></a>
      </Li>
      <Li><a href="${Socials.youtube}" target="_blank"><img src="images/socials/youtube"></a>
      </Li>
      </ul>`;
		},

		generateOverflow() {
			const $items = document.querySelectorAll("#cards div");
			for (const $item of $items) {
				$item.addEventListener("click", (e) => {
					const id = e.currentTarget.dataset.id;
					// const item = projects.find((project) => {
					//   return project.id === id;
					// });
					console.log(id);
					this.$detail.innerHTML = `
                <button id="btn">X</button>
                  <img src="${item.screenshots[i]}" alt="">
                  <p>${item.author.firstName} ${item.author.lastName}</p>
                  <h2>${item.title}</h2>
                  <ul>${item.technologies
										.map((technologiesName) => {
											return `<li>${technologiesName.name}</li>`;
										})
										.join("")}</ul>
                  <p>${item.synopsis}</p>
                `;

					this.$detail.classList.add("open");

					const $btnClose = document.getElementById("btn");
					$btnClose.addEventListener("click", (e) => {
						this.$detail.classList.remove("open");
					});
				});
			}
		},
	};

	app.initialize();
})();
