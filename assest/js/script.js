//topbar active-deactive function start//
let activlink = document.querySelectorAll('.leftgroup>ul>li>a')

activlink.forEach(a => {
a.addEventListener(anc => anc.classList.remove('active'));
this.classlist.add('active');
});
//topbar active-deactive function end//
// mega menu action on click section start//
function showhide(){
let click=document.getElementById("mega-menu");
if(click.style.display == "none"){
click.style.display = "block";
//console.log("yes")
}
else{
    click.style.display ="none";
}
}
// mega menu action on click section end//

