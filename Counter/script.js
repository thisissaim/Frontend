//set initial counter
let count = 0 ;

//set value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click" , function(e){

        const styles = e.currentTarget.classList;

        if(styles.contains("decrease"))
        {
            count--;
        }
        else if(styles.contains("increase"))
        {
            count++;
        }
        else{
            count=0;
        }

        if(count>0){
            value.style.color = "rgb(9, 64, 100)";
        }
        if(count<0){
            value.style.color = " rgb(136, 23, 23)";
        }
        if(count===0)
        {
            value.style.color = "#222";
        }
        value.textContent = count;
    });
 
});
// btns.forEach(function(btn){
//     btn.addEventListener("mousedown" , function(e){

//         const styles = e.currentTarget.classList;

//         if(styles.contains("decrease"))
//         {
//             count--;
//         }
//         else if(styles.contains("increase"))
//         {
//             count++;
//         }
//         else{
//             count=0;
//         }
//         if(count>0){
//             value.style.color = "blue";
//         }
//         if(count<0){
//             value.style.color = " rgb(136, 23, 23)";
//         }
//         if(count=0)
//         {
//             value.style.color = "#222";
//         }
//         value.textContent = count;
//     });
 
// });