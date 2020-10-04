const animalFarm=['Cats', 'Dogs', 'Rabbits', 'Sheeps','Lions', 'Hyenas', 'Elephants', 'Sharks', 'Eagles', 'Aquatic', 'Terrestrial'];// Creates an array containing the following items
const input=document.getElementById('search');
const btn=document.querySelector('button');// targets the button
const cats=document.querySelector('.pander');// targets the cat element and stores reference to it in a constant called cats
const dogs=document.querySelector('.rubbie');// targets the dog element and stores reference to it in a constant called dogs
const rabbits=document.querySelector('.ra');// targets the rabbit element and stores reference to it in a constant called rabbits
const sheeps=document.querySelector('.sh');// targets the dog element and stores reference to it in a constant called sheeps
const lions=document.querySelector('.snoppy');// targets the lion element and stores reference to it in a constant called lions
const hyenas=document.querySelector('.hy');// targets the hyena element and stores reference to it in a constant called hyenas
const elephants=document.querySelector('.el');// targets the elephants element and stores reference to it in a constant called elephants
const sharks=document.querySelector('.sk');// targets the sharks element and stores reference to it in a constant called sharks
const eagles=document.querySelector('.ea');// targets the eagles element and stores reference to it in a constant called eagles
const aquatic=document.querySelector('.water');// targets the aquatic element and stores reference to it in a constant called aquatic
const terrestrial=document.querySelector('.land');// targets the terrestrial element and stores reference to it in a constant called terrestial

/* adds an onclick event listener function to the domestic elements-drop down contents to make them open link in a new tab */
cats.onclick=function(){
window.open("https://www.nationalgeographic.com/animals/mammals/d/domestic-cat/", "_blank");
}
dogs.onclick=function(){
window.open("https://www.britannica.com/animal/dog", "_blank");
}
rabbits.onclick=function(){
window.open("https://www.livescience.com/28162-rabbits.html", "_blank");
}
sheeps.onclick=function(){
window.open("https://www.britannica.com/animal/sheep", "_blank");
}

/* adds an onclick event listener function to the wild elements-drop down contents to make them open link in a new tab */
lions.onclick=function(){
window.open("https://www.britannica.com/animal/lion", "_blank");
}
hyenas.onclick=function(){
window.open("https://www.awf.org/wildlife-conservation/hyena", "_blank");
}
elephants.onclick=function(){
window.open("https://www.nationalgeographic.com/animals/mammals/a/african-elephant/", "_blank");
}
sharks.onclick=function(){
window.open("https://www.nationalgeographic.org/topics/sharks/", "_blank");
}
eagles.onclick=function(){
window.open("https://www.britannica.com/animal/eagle-bird", "_blank");
}
/* adds an onclick event listener function to the habitats elements-drop down contents to make them open link in a new tab */
aquatic.onclick=function(){
window.open("https://www.worldanimalfoundation.com/advocate/wild-earth/params/post/1286151/aquatic-habitats", "_blank");
}
terrestrial.onclick=function(){
window.open("http://www.biokids.umich.edu/guides/michigan_habitat/terrestrial/", "_blank");
};

btn.onclick=function(){
if(input.value===animalFarm[0].toLowerCase()){
window.open("https://www.nationalgeographic.com/animals/mammals/d/domestic-cat/", "_blank");
}else if (input.value===animalFarm[1].toLowerCase()){
window.open("http://www.biokids.umich.edu/guides/michigan_habitat/terrestrial/", "_blank");
}else{
window.open("https://www.worldanimalfoundation.com/advocate/wild-earth/params/post/1286151/aquatic-habitats", "_blank");
}
};

/
