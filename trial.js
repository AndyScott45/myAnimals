const animals=['dogs', 'cats', 'lizards', 'goats'];
const btn=document.querySelector('.submit');


// let input=document.getElementById('search').value;

btn.addEventListener('click', changeUrl);
  function changeUrl(){
    if(document.getElementById('search').value===animals[0]){
    window.open("https://www.nationalgeographic.com/animals/mammals/d/domestic-cat/", "_blank");
    input.focus();
    }else if (document.getElementById('search').value===animals[1]){
    window.open("https://www.livescience.com/28162-rabbits.html", "_blank");
    input.focus();
    }else{
    window.open("https://www.britannica.com/animal/sheep", "_blank");
    }
  };
