var tablinks = document.getElementsByClassName ("tab-links");
var tabconents = document.getElementsByClassName ("tab-contents");

function opentab(tabname){
for(tablink of tablinks ){
  tablink.classList.remove("active-link");
}
for(tabconent of tabconents ){
  tabconent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab")

}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
sidemenu.style.right = "0";
}
function  closemenu(){
sidemenu.style.right = "-200px";
}


  const scriptURL = 'https://script.google.com/macros/s/AKfycbxXKcOIyxsK4GJrsUHmQvoSECDEzcdgLNTgBms76YiS7cJt5ydSHt0xRJj3tK1NCSKj9Q/exec'
  const form = document.forms['submit-to-google-sheet']
   const msg = document.getElementById("msg")

   form.addEventListener('submit', e =>{
   e.preventDefault()
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML =  "Message Sent Successfully"
       setTimeout(function(){
         msg.innerHTML = ""
        }, 5000)
       form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  
})

// -------- image slider-------

      let imgContainer = document.querySelector(".img-container");
            setInterval(() => {
            let last = imgContainer.firstElementChild;
            last.remove();
            imgContainer.appendChild(last);
            }, 3000);



           