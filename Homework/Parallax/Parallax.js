window.onscroll =()=>{
    let scroll = window.pageYOffset;
    document.querySelector('.block').style.top = `${-scroll}px`;
}