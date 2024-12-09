document.querySelector('#misca-coada').addEventListener('click', miscaCoada);


function miscaCoada(event) {
    document.querySelector('#catel-complet .coada').style.transform = 'rotate(40deg)';
   
     setTimeout(() => {
       document.querySelector('#catel-complet .coada').style.transform = 'rotate(0deg)';
     }, 200)
     setTimeout(() => {
       document.querySelector('#catel-complet .coada').style.transform = 'rotate(40deg)';
     }, 400)
     setTimeout(() => {
       document.querySelector('#catel-complet .coada').style.transform = 'rotate(0deg)';
     }, 600)
      setTimeout(() => {
       document.querySelector('#catel-complet .coada').style.transform = 'rotate(40deg)';
      }, 800)
      setTimeout(() => {
       document.querySelector('#catel-complet .coada').style.transform = 'rotate(0deg)';
    }, 1000)
    
}

document.querySelector('#clipeste').addEventListener('click', clipeste);

function clipeste(event) {
    document.querySelector('#catel-complet .spranceana').style.transform = 'translate(0.0px, 50%)';
     setTimeout(() => {
      document.querySelector('#catel-complet .spranceana').style.transform = 'translate(0.0px, 0%)';
     }, 100)
}

document.querySelector('#saluta-picior').addEventListener('click', saluta)

function saluta(event) {
    document.querySelector('#catel-complet .picior').style.transform = 'rotate(90deg)';
    setTimeout(() => {
      document.querySelector('#catel-complet .picior').style.transform = 'rotate(60deg)';
    }, 200)
    setTimeout(() => {
      document.querySelector('#catel-complet .picior').style.transform = 'rotate(90deg)';
    }, 400)
    setTimeout(() => {
      document.querySelector('#catel-complet .picior').style.transform = 'rotate(60deg)';
    }, 600)
     setTimeout(() => {
      document.querySelector('#catel-complet .picior').style.transform = 'rotate(90deg)';
     }, 800)
     setTimeout(() => {
      document.querySelector('#catel-complet .picior').style.transform = 'rotate(0deg)';
     }, 1000)
     
}

document.querySelector('.zgarda').addEventListener('mouseover', zgarda);

function zgarda(event) {
 
    onmouseover = document.querySelector('#catel-complet .zgarda').style.transform = 'rotate(1turn)';
    setTimeout(function () {
        document.querySelector('#catel-complet .zgarda').style.transform = 'rotate(0turn)';
    }, 1000);

}

document.querySelector('.nas').addEventListener('mouseover', nas, );

function nas(event) {
   
    onmouseover = document.querySelector('#catel-complet .nas').style.transform = 'scale(1.1, 1.1)';
    setTimeout(function () {
        document.querySelector('#catel-complet .nas').style.transform = 'scale(1, 1)';
    }, 100);
    let audio = document.getElementById("myAudio");
    audio.play();
}


document.querySelector('#ureche').addEventListener('click', ureche);

function ureche(event) {
    document.querySelector('#catel-complet .ureche').style.transform = 'skewY(-20deg) skewX(-10deg)';
    
    setTimeout(() => {
        document.querySelector('#catel-complet .ureche').style.transform = 'skewY(0deg) skewX(0deg)';
    }, 200)
    
}




