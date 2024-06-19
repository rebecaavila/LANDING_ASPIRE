
		var video_render = document.getElementsByClassName("video-render")[0];
		let iframe = document.createElement("iframe");
		iframe.setAttribute("src", "https://player.vimeo.com/video/839147208?h=68fb34b123&autoplay=0&loop=0&autopause=0");
		iframe.setAttribute("frameborder", "0");
		iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
		iframe.setAttribute("muted", "false");
		iframe.setAttribute("volume", "1"); // Establecer el volumen en 100 (valor entre 0 y 1)
		iframe.setAttribute("style", "position: absolute; top: 0; left: 0; width: 100%; height: 100%;");
		video_render.appendChild(iframe);

		// Obtener el reproductor de Vimeo
		let vimeoPlayer = new Vimeo.Player(iframe);
		let hasActive = false;
		// Función para iniciar la reproducción del video al hacer clic en cualquier parte del DOM
		function playVideo() {
			if (hasActive == false) {
				vimeoPlayer.setVolume(1); // Establecer el volumen en 100 (valor entre 0 y 1)
				vimeoPlayer.setLoop(true); // Activar la reproducción en bucle
				vimeoPlayer.play().then(() => {

					hasActive = true;
				}
				).catch(function (error) {
					console.error('Error al intentar reproducir el video:', error);
				});
			}

		}

		// Evento click en el documento (DOM)
		document.addEventListener('click', playVideo);
		
		
		//Reloj 
		const $containerCountdown = document.getElementById('countdown');
		const countdown = (limiteDate) => {
			let countdownDate = new Date(limiteDate).getTime();
			let countdownTiempo = setInterval(() => {
				let ahora = new Date().getTime(),
					limitTime = countdownDate - ahora,
					days = ("0" + Math.floor(limitTime / (1000 * 60 * 60 * 24))).slice(-2),
					hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
					minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
					seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
				$containerCountdown.innerHTML = `
                  <div class="d-flex justify-content-center">
                          <div class="d-flex flex-column justify-content-center align-items-center">
                              <h1 class="countdown-number"> ${days}</h1>
                              <span class="countdown-text pb-1"> días</span>
                          </div>
                          <div class="d-flex flex-column justify-content-center align-items-center px-2">
                              <h1 class="countdown-spaces"> : </h1>
                          </div>
                          <div class="d-flex flex-column justify-content-center align-items-center">
                              <h1 class="countdown-number"> ${hours}</h1>
                              <span class="countdown-text pb-1"> horas</span>
                          </div>
                          <div class="d-flex flex-column justify-content-center align-items-center px-2">
                              <h1 class="countdown-spaces"> : </h1>
                          </div>
                          <div class="d-flex flex-column justify-content-center align-items-center">
                              <h1 class="countdown-number"> ${minutes}</h1>
                              <span class="countdown-text pb-1"> minutos</span>
                          </div>
                          <div class="d-flex flex-column justify-content-center align-items-center px-2" >
                              <h1 class="countdown-spaces"> : </h1>
                          </div>
                          <div class="d-flex flex-column justify-content-center align-items-center">
                              <h1 class="countdown-number text-center"> ${seconds} </h1>
                              <span class="countdown-text pb-1"> segundos</span>
                          </div>
                  </div>`;
				if (limitTime < 0) {
					clearInterval(countdownTiempo);
					$containerCountdown.innerHTML = '';
				}

			}, 1000);
		}
		
		countdown(document.getElementById("txtCountdown").value);
		
		
		
		var mySwiperConoceras = new Swiper(".mySwiperConoceras", {
			spaceBetween: 30,
			freeMode: true,
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				500: {
					slidesPerView: 1.5,
				},
				840: {
					slidesPerView: 2.25,
				},
				940: {
					slidesPerView: 3,
				}
			}
		});
		
		var mySwiperComentarios = new Swiper(".mySwiperComentarios", {
			spaceBetween: 30,
			freeMode: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-pagination",
			},
			breakpoints: {
				840: {
					slidesPerView: 1.05,
				},
				940: {
					slidesPerView: 2,
				}
			}
		});
