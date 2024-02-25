 let img1=document.querySelector(".img1");
 let video1=document.querySelector("#video1");
 let delayTimeout;
 img1.addEventListener("mouseover",function(){
  clearTimeout(delayTimeout);
    video1.style.display="block"
   video1.play(); 
   
 })

 img1.addEventListener("mouseout",function(){
  delayTimeout = setTimeout(function(){
    video1.style.display="none";
   video1.pause(); 
   
  },300)
})
let img2=document.querySelector(".img2");
let video2=document.querySelector("#video2");
let delayTimeout2;
img2.addEventListener("mouseover",function(){
  clearTimeout(delayTimeout2);
  video2.style.display="block";
  video2.play();
})
img2.addEventListener("mouseout",function(){
  delayTimeout2=setTimeout(function(){
    video2.style.display="none";
    video2.pause();
  },300)
})
let video3=document.querySelector("#video3");
let img3=document.querySelector(".img3");
 let delayTimeout3;
 img3.addEventListener("mouseover",function(){
  clearTimeout(delayTimeout3);
  video3.style.display="block";
  video3.play();
 });
 img3.addEventListener("mouseout",function(){
  delayTimeout3=setTimeout(function(){
    video3.style.display="none";
    video3.pause();
  },300)
 });
let video4=document.querySelector("#video4");
let img4 =document.querySelector(".img4");
let delayTimeout4;
img4.addEventListener("mouseover",function(){
  clearTimeout(delayTimeout4);
  video4.style.display="block";
  video4.play();
}) ;
img4.addEventListener("mouseout",function(){
  delayTimeout4=setTimeout(function(){
    video4.style.display="none";
    video4.pause();
  },300);
});
let video5=document.querySelector("#video5");
let img5 =document.querySelector(".img5");
let delayTimeout5;
img5.addEventListener("mouseover",function(){
  clearTimeout(delayTimeout5);
  video5.style.display="block";
  video5.play();
}) ;
img5.addEventListener("mouseout",function(){
  delayTimeout5=setTimeout(function(){
    video5.style.display="none";
    video5.pause();
  },300);
});
let img=document.querySelector('#imgvolume');
let video=document.querySelector("#herovideo");
img.addEventListener("click",function(){
  if(video.muted){
    video.muted=false;
    img.classList.remove("fa-volume-off");
    img.classList.add("fa-volume-high");
  }
  else{
    video.muted=true;
    img.classList.remove("fa-volume-high");
    img.classList.add("fa-volume-off");
    }
});