
  const items = document.querySelectorAll('img'); 
  const nbSlide = items.length);
  const suivant = document.querySelectorAll('.right');
  const precedent = document.querySelectorAll('.left');
  let count = 0;
  
  function slideSuivant(){
	  
   items[count].classList.remove.('active');
      if (count < nbSlide - 1){
        count++;
    }else{
        count = 0;
    }
	
	items[count].classList.add('active');
	console.log(count);
	
  });
  
  suivant.addEventListener('click', slideSuivant)