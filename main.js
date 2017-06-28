console.log("Hello")

var vanillaStuff = document.getElementById("list-of-stuff")
console.log("DOM element",vanillaStuff);
//vanillaStuff.classList.add("myList")

var jQStuff = $("#list-of-stuff");
console.log("JQ", jQStuff);

jQStuff.addClass("myList");
//jQStuff.append("<li>Hamburgers</li>");
jQStuff.prepend("<li>Hamburgers</li>");

let album = $(".container").find(".album");
console.log("album",album);

let oneAlbum = $(".container").children(".song-container")
console.log("oneAlbum with children", oneAlbum);

let parentAttr = $(".album").parents("song-container")
console.log ("parentAttr", parentAttr);

//click events
$("#destroyer").click(function(){
	$(".container").toggle();
});

$("body").append `(<button id="destroyer">Hide songs</button>)`


$(document).ready( function(){

});

//AJAX
//OLD way
var myRequest = new XMLHttpRequest();
myRequest.addEventListner("load",function() {
var data = JSON.parse(this.responseText);
console.log("data",data);
});
myRequest.open("GET", "song.json");
myRequest.send();

$.ajax({
	url: "song.json"
	.done(function(error) {
	console.log(error.statusText

)};
}

function executeAfterAjax(data){
	console.log(data.songs);
	let songs = data.songs
	$.each(song,function(index, song){
	consong.log("song",songs);
	$("#song-list").append(`<li>${song.title}</li>`)

});

}