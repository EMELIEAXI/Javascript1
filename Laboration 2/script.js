
document.addEventListener('DOMContentLoaded', function (){
    //Skapa variablarna
    let btnsomskabliRemove = document.getElementById('cta-select');
    
    let countElement = document.getElementById('cartcount');
    
    let addbtn = document.getElementById('add-to-cart');
    
    let cart = 0;
    
    //funktion för att Öka upp värdet i "cart" och ändra Value till det. 
    // Ändrar även texten på andra knappen när man trycker på add-knappen
    addbtn.addEventListener('click', function(){
            cart++;
            countElement.setAttribute("value", cart);
            btnsomskabliRemove.textContent = 'Remove';
    });
    
    btnsomskabliRemove.addEventListener('click', function(){
        if (cart > 0){
            cart--;
            countElement.setAttribute("value", cart);
        }
    
        if (cart < 1){
            btnsomskabliRemove.textContent = "14 Inch"
        }
    });
    });
    