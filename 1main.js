var video = $('<video />', {
    id: 'video',
    src: 'https://www.youtube.com/watch?v=Qe_F9CxFpmw',
    type: 'video/mp4',
    controls: true
});
console.log("hello")
var btn1 = document.querySelector(".btn-one")
btn1.on("click",function(){
    console.log("hello")
    $(body).appendTo(video)
}