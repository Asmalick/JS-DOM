// functions 
/*
function  faireQuelqueChose() {
    console.log('je fais un ');
}
 const faireUneTache = (type) => {
    console.log('je fais :'+type);
 }
 faireUneTache('la vaisselle');
 faireUneTache('les courses'); */


 const btn =document.querySelector('#btn');
 const img = document.getElementById('img');


 btn.addEventListener('click',()=> {
    // console.log('yes');
    //img.classList.add('show');
    img.classList.toggle('show'); // toggle permet de la faire apparaitre/disparaitre au clic. 
 })

 //********************************** */
 const mouseEvent = document.querySelector('.mouseEvent');
 const horizontal = document.querySelector('.horizontal');
 const vertical = document.querySelector('.vertical');

 mouseEvent;addEventListener('mousemove',(e) => {
    // console.log('Yes');
    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x /window.innerWidth * 100 + "% ";


    if(e.x > 500) {
        document.body.style.filter =
    }

 })