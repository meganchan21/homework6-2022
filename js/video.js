var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("#Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("I want to slow the video");
	video.playbackRate *= 0.95;
	console.log("speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("speeding up");
	video.playbackRate /= 0.95;
	console.log("speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skipping ahead")
	video.currentTime += 15;
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Video current time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log("muting video")
	if (video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerHTML ='Unmute';
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML ='Mute';
	}
})

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("change old school")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("change new school")
	video.classList.remove("oldSchool")
})

document.querySelector("#slider").addEventListener("click", function(){
	console.log("sliding")
	video.volume = this.value / 100;
	volume = video.volume * 100;
	document.getElementById('volume')
.innerHTML = volume + "%";
})


// mind the camel case

// use this. for volume slider
// use if else statement for mute
// how to implement css in javascript
// resource: https://www.w3schools.com/tags/ref_av_dom.asp