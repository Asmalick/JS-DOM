const array = ['Paris', 'Lyon', 'Rennes', 'Bordeaux']
const array1 = ['Paris', 33, ['Lyon', 'Rennes', 'Bordeaux'], true]

/*const string = 'je suis un string'
const number = 48
const boolean = true */
//console.log(array[2][4]); 

for (i = 0; i < array1.length; i++) {
    //console.log(typeof array1[i]); nous donne le type de données (string/boolean/num..)
    console.log(array1[i]);
}

const numbers = [21, 45, 1, 22, 44, 7]
console.log(numbers.sort());
//array.sort(); (avec un tableau de chiffres, ils sont rangés dans l'ordre*)
//console.log(array1);
 

//************************************ */
 const input = document.getElementById('input');
 const video = document.getElementById('video');
 let link = "";

 input.addEventListener('input', (e)=> {
     //console.log(e.target.value);
     changelink(e.target.value);
     
     if (link) {
         video.innerHTML = `<iframe width="1280" height="720" 
         src=${link} frameborder="0" allow="accelerometer;
         autoplay; clipboard-write; encrypted-media; gyroscope;
         picture-in-picture" allowfullscreen></iframe>`;
     }

 });

 const changelink = (linkToChange ) => {
     let embed = linkToChange.replace('watch?v=' , "embed/");
     link = embed.split('&')[0];
     //console.log(link);
 }

 //https://www.youtube.com/embed/QB1DTl7HFnc
 //https://www.youtube.com/watch?v=QB1DTl7HFnc&t=4091s