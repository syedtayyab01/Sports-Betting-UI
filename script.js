@tailwind base;
@tailwind components;
@tailwind utilities;



.newSlide{
  transform: translate(100%, 0);
  opacity: 0;
}

.fObject{
  backdrop-filter:blur(5.5px);
  clip-path:url(#bgblur_0_6_44_clip_path);
  height:100%;
  width:100%
}


.sl0{
  background-image: url(https://assets.codepen.io/3685267/betting-app-wccettuo.png);
  
}
.sl1{
  background-image: 
    linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 50%, rgba(0, 0, 0, 0) 100%), 
  url(https://assets.codepen.io/3685267/betting-app-vgnrodzy.png);
}
.sl2{
  background-image: url(https://assets.codepen.io/3685267/betting-app-zzbnyktk.png);
}
.sl3{
  background-image: url(https://assets.codepen.io/3685267/betting-app-ahiryyst.png);
}



.sidebar-circ{

background: #3A3A3A;
border: 1px solid #484848;
box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

}

.menu-item-main{
  background: #151515;
  cursor: pointer;
 
}
.menu-item-main:hover{
  background: linear-gradient(176.15deg, #2F2F2F 2.85%, #292929 104.97%);
}

.menu-item-main:hover .menu-item-main-icon{
 
background: linear-gradient(180deg, #E4A704 0%, #FE7A00 100%);
color: #222;
border: none;
}

.menu-item-main .menu-item-main-icon{
  background: #393939;
 color: #b3b3b3;
 border: 1px solid #444;
}



.plus-circ{
background: linear-gradient(180deg, #E4A704 0%, #FE7A00 100%);
color: #373739;
}


.profile-sec{
  background: linear-gradient(180deg, #353535 0%, #222222 100%);
}


.profile-img-container{
  background: linear-gradient(180deg, #E4A704 0%, #FE7A00 100%);
}


.gen-chat{
      background: linear-gradient(to bottom, #E4A704, #FE7A00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
}



.chat-header-cover{
  background: rgba(34, 34, 34, 0.7);
backdrop-filter: blur(2px);
border-top-left-radius: 24px;
border-top-right-radius: 24px;
}


.menu-item-with-icon{
   opacity: 0;
  transform: scale(1);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}


.menu-item-main:hover .menu-item-with-icon{
   opacity: 1;
  transform: scale(1.3);
}


.menu-item-with-image{
   opacity: 0;
  right:68px;
  top:6px;
  transform: scale(1);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.menu-item-main:hover .menu-item-with-image{
   opacity: 1;
  transform: scale(3.1);
}


.animated-swiper-item{
  transform: scale(1);
  transition: transform 0.3s ease-out;
}
.animated-swiper-item:hover{
  transform: scale(1.1);
  cursor: pointer;

}


.yellow-gradient-1{
  background: linear-gradient(180deg, #FFBE28 0%, #FF7C00 100%);
}
.gray-gradient{
   background:linear-gradient(180deg, #525252 0%, #525252 100%)
}

.custom-shadow-1{
  box-shadow: 10px 11px 9.9px rgba(0, 0, 0, 0.25);
}
.custom-shadow-2{
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
}
.custom-shadow-3{
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.15);
}





.titem{
  height: 112px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translate(0px, 600px);
  opacity: 0;
  }
