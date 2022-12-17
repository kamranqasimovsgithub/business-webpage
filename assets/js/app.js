
let say=0;
let sil='';

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      let d = Math.floor(progress * (end + start) + start);

      if(sil === '' ){
        obj.innerHTML = "+" + Math.floor(progress * (end + start) + start);
        
      }

      if(sil === 'Not'){
        try{
          obj.innerHTML = "0";
        }catch(err){
          console.log(err);
        }      
      }

      if(d==116){
        say=d;
      }else{
        d=0
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);

  }
  let n = 'vib';

  
  
  a=1
  function startCount(){{
      if(n === 'vib'){
        say = 0;
        a=0;
      for(i=0; i<4;i++){    
        let c=0;
        while((c++) < 100){
            if(c == (100)){
                const obj = document.getElementsByClassName("counter");
              if(i==0){
                animateValue(obj[i], 0, 75, 5000);
              }
              else if(i==1){
                animateValue(obj[i], 0, 80, 5000);
              }
              else if(i==2){
                animateValue(obj[i], 0, 68, 5000);
              }
              else{
                animateValue(obj[i], 0, 116, 5000);
              }
        //console.log('TEST',obj[i].innerHTML)

            } 

        }
        c=0;
      }

    
      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }
    }
  };

};


window.addEventListener('scroll', function() {
	var element = document.querySelector('.counter-details-item');
	var position = element.getBoundingClientRect();

  // checking for partial visibility
	if(position.top > window.innerHeight || position.bottom < 0 ) {
    sil = "Not";
    n='vib'
    animateValue();
    
    //startCount();
	}
	// checking whether fully visible
	if(position.top >= 50 && position.bottom < window.innerHeight-50) {
    sil = ""
    startCount(n);
    n='nvib'
	}

	
});

setInterval(myFunction,1000)
setInterval(myFunction2,1000)

function myFunction() {
	let d = Math.ceil(Math.random() * (240 - 20) + 20)
    document.getElementById("myDIV").style.transform = `rotate(${d}deg)`; 
    if(d%10 == 1 || d%10 == 2 || d%10 == 6 ){
    if(d%10 == 1){
      document.getElementById("myDIV").style.transform = `translate(-10px, 0px) rotate(120deg)`; 
    }else if(d%10 == 2 ){
    	document.getElementById("myDIV").style.transform = `translate(30px, -10px) rotate(-60deg)`; 
    }else{
    
    document.getElementById("myDIV").style.transform = `translate(1px, 60px) rotate(360deg)`; 
    }
    }
     
     
}


function myFunction2() {
	let d = Math.ceil(Math.random() * (240 - 20) + 20)
    document.getElementById("myDIV2").style.transform = `rotate(${d}deg)`; 
    if(d%10 == 1 || d%10 == 2 || d%10 == 6 ){
    if(d%10 == 1){
      document.getElementById("myDIV2").style.transform = `translate(-10px, 0px) rotate(120deg)`; 
    }else if(d%10 == 2 ){
    	document.getElementById("myDIV2").style.transform = `translate(15px, -10px) rotate(-60deg)`; 
    }else{
    
    document.getElementById("myDIV2").style.transform = `translate(1px, 20px) rotate(360deg)`; 
    }
    }
     
     
}


let slideIndex = 0;
  showSlides(4);
  
  //showSlides(slideIndex);
    setInterval(()=>{
        
    showSlides(slideIndex += 1);

  
    },3000)


  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let text = document.getElementsByClassName("text");
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        dots[i].style.display = 'inline-block';
    }

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";



    if(slideIndex == slides.length-1){
        for (i = 0; i < slides.length; i++) {
        text[i].style.top = "0";
        text[i].style.fontSize = "16px";
        text[i].style.fontWeight = "100";
        text[i].style.opacity = "0";
      }
    }

    setTimeout(()=>{
      text[slideIndex-1].style.top = "75%";  	
      text[slideIndex-1].style.fontSize = "40px";
      text[slideIndex-1].style.fontWeight = "700";
      text[slideIndex-1].style.opacity = "1";

    },1000)


  }