
//Set an id to each div container for Removing each element card //
const card1 = document.getElementById("card-1-parent");
const closeBtn1 = document.getElementById("icon-1")
const card2 = document.getElementById("card-2-parent");
const closeBtn2 = document.getElementById("icon-2")
const card3 = document.getElementById("card-3-parent");
const closeBtn3 = document.getElementById("icon-3")
const card4 = document.getElementById("card-4-parent");
const closeBtn4 = document.getElementById("icon-4")
const card5 = document.getElementById("card-5-parent");
const closeBtn5 = document.getElementById("icon-5")
const card6 = document.getElementById("card-6-parent");
const closeBtn6 = document.getElementById("icon-6")
const card7 = document.getElementById("card-7-parent");
const closeBtn7 = document.getElementById("icon-7")
const card8 = document.getElementById("card-8-parent");
const closeBtn8 = document.getElementById("icon-8")
const card9 = document.getElementById("card-9-parent");
const closeBtn9 = document.getElementById("icon-9")

     closeBtn1.addEventListener('click', () => {
     card1.remove();
      });

     closeBtn2.addEventListener('click', () => {
     card2.remove();
      });

      closeBtn3.addEventListener('click', () => {
     card3.remove();
      });

      closeBtn4.addEventListener('click', () => {
     card4.remove();
      });

      closeBtn5.addEventListener('click', () => {
     card5.remove();
      });

      closeBtn6.addEventListener('click', () => {
     card6.remove();
      });

      
      closeBtn7.addEventListener('click', () => {
     card7.remove();
      });
      
      closeBtn8.addEventListener('click', () => {
     card8.remove();
      });
      
      closeBtn9.addEventListener('click', () => {
     card9.remove();
      });

      //===============Heart functionality================================//
      
const hearicon1 = document.getElementById('heart1');
const hearicon2 = document.getElementById('heart2');
const hearicon3 = document.getElementById('heart3');
const hearicon4 = document.getElementById('heart4');
const hearicon5 = document.getElementById('heart5');
const hearicon6 = document.getElementById('heart6');
const hearicon7 = document.getElementById('heart7');
const hearicon8 = document.getElementById('heart8');
const hearicon9 = document.getElementById('heart9');
 



hearicon1.onclick = function(e){
      e.preventDefault();
        document.getElementById('heart1').style.color = 'blue';
}


hearicon2.onclick = function(e){
    
    e.preventDefault();
     document.getElementById('heart1').style.color = 'blue';
     
     }
     
    

hearicon3.onclick = function(e){
    e.preventDefault();
     document.getElementById('heart3').style.color = 'blue';
     
}
hearicon4.onclick = function(e){
    e.preventDefault();
     document.getElementById('heart4').style.color = 'blue';
     
}
hearicon5.onclick = function(e){
    e.preventDefault();
     document.getElementById('heart5').style.color = 'blue';
     
}
hearicon6.onclick = function(e){
    e.preventDefault();
     document.getElementById('heart6').style.color = 'blue';
     
}
hearicon7.onclick = function(e){
    e.preventDefault();
     document.getElementById('heart7').style.color = 'blue';
     
}
hearicon8.onclick = function(e){
    e.preventDefault();
     document.getElementById('heart8').style.color = 'blue';
     
}
hearicon9.onclick = function(e){
    e.preventDefault();
     document.getElementById('heart9').style.color = 'blue';
     
}


      //===============Read functionality================================//

      const read1 = document.getElementById('read1');
            const read2 = document.getElementById('read2');
                  const read3 = document.getElementById('read3');
                        const read4 = document.getElementById('read4');
                              const read5 = document.getElementById('read5');
                                    const read6 = document.getElementById('read6');
                                          const read7 = document.getElementById('read7');
                                                const read8 = document.getElementById('read8');
                                                      const read9 = document.getElementById('read9');

     read1.onclick = function(e){
    e.preventDefault();
     document.getElementById('read1').style.color = 'green';
     
}

  read2.onclick = function(e){
    e.preventDefault();
     document.getElementById('read2').style.color = 'green';
     
}
  read3.onclick = function(e){
    e.preventDefault();
     document.getElementById('read3').style.color = 'green';
     
}

  read4.onclick = function(e){
    e.preventDefault();
     document.getElementById('read4').style.color = 'green';
     
}

  read5.onclick = function(e){
    e.preventDefault();
     document.getElementById('read5').style.color = 'green';
     
}

  read6.onclick = function(e){
    e.preventDefault();
     document.getElementById('read6').style.color = 'green';
     
}

  read7.onclick = function(e){
    e.preventDefault();
     document.getElementById('read7').style.color = 'green';
     
}

  read8.onclick = function(e){
    e.preventDefault();
     document.getElementById('read8').style.color = 'green';
     
}

  read9.onclick = function(e){
    e.preventDefault();
     document.getElementById('read9').style.color = 'green';
     
}//===================Hamburger Menu===============//


const hamburger =document.querySelector('#bar');
const navMenu =document.querySelector('.nav-container');

hamburger.addEventListener('click',() =>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})
