



/*  
==============================================
==============================================
*/

/* start popo 1 */

let p1btnSend = document.querySelector(".popup-1 .btn-send");
let p1btnClose = document.querySelector(".popup-1 .btn-close");
let p1pup = document.querySelector(".popup-1 #pup");


// p1btnSend.addEventListener("click", show_pup);
p1btnSend.addEventListener("click", () => {
    p1pup.classList.add("open");
});

// p1btnClose.addEventListener("click", hide_pup);
p1btnClose.addEventListener("click", () => {
    p1pup.classList.remove("open");
});


// function show_pup() {
//     document.getElementById("pup").classList.add("open");
// }

// function hide_pup() {
//     document.getElementById("pup").classList.remove("open");
// }


/* end popo 1 */

/*  
==============================================
==============================================
*/

/* start popo 2 */

let p2viewBtn = document.querySelector(".popup-2 .view-modal");
let p2popup = document.querySelector(".popup-2 .popup_2");
let p2close = document.querySelector(".popup-2 .close");
let p2field = document.querySelector(".popup-2 .field");
let p2input = document.querySelector(".popup-2 input");
let p2copy = document.querySelector(".popup-2 .copy");

p2viewBtn.addEventListener("click", () => {
    p2popup.classList.toggle("show");
});

p2close.addEventListener("click", () => {
    p2viewBtn.click();
});

p2copy.addEventListener("click", () => {
    p2input.select();
    if(document.execCommand("copy")) {
        p2field.classList.add("active");
        p2copy.innerText = "copied";
        setTimeout(() => {
            p2field.classList.remove("active");
            p2copy.textContent = "copy";
            window.getSelection().removeAllRanges();
        }, 3000);
    }
});





/* end popo 2 */

/*  
==============================================
==============================================
*/

/* start popo 3 */

let p3cont = document.querySelector(".popup-3 .cont");
let p3toggleBtn = document.querySelector(".popup-3 .toggleBtn");


p3toggleBtn.addEventListener("click", () => {

    p3cont.classList.toggle("active");

});



/* end popo 3 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/


/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/

/* start popo 1 */




/* end popo 1 */

/*  
==============================================
==============================================
*/