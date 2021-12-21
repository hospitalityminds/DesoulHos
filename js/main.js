
	document.querySelector('#audio-btn').addEventListener("click",function(){

				var isplaying = document.querySelector('.audio');

				// isplaying.forEach(playing =>{

					if(isplaying.getAttribute('src')=="jin1.mp3"){
				     	isplaying.setAttribute("src", " ");
					}
					else{
						isplaying.setAttribute("src", "jin1.mp3");
					}
					// });

	});




    $('body').on('click touchstart', function () {
        const videoElement = document.querySelector('.audio');

        // videoElement.forEach(element =>{

            if (videoElement.playing) {
            }
            else {
                videoElement.play();
            }
    //    });
    });
