let slideIndex = 0;  

function mostrarSlides() {  
    const items = document.querySelectorAll('.item');  
    items.forEach((item, index) => {  
        item.style.display = index === slideIndex ? 'block' : 'none';  
    });  
}  

function cambiarSlide(n) {  
    slideIndex += n;  
    const items = document.querySelectorAll('.item');  
    if (slideIndex >= items.length) {  
        slideIndex = 0;  
    } else if (slideIndex < 0) {  
        slideIndex = items.length - 1;  
    }  
    mostrarSlides();  
}  

// Initialize  
mostrarSlides();