var k=10;
var lcounter=0,rcounter=0;
for(var i=1;i<22;i++){
const column=document.createElement("div");
column.className="column";
column.style.position="absolute";
column.style.top=i*4.5+"%";

document.body.appendChild(column);
if(i!=8){
   for (var j=0;j<18;j++){

const seat=document.createElement("div");

seat.className="seat";

if(i<5){
    if(j<k){
    seat.style.background="black";
      seat.id="nulll";
    }
    if(j>=k){
     lcounter++;
  seat.id="l"+lcounter;}
}
else {
   lcounter++;
  seat.id="l"+lcounter;
}
column.appendChild(seat);


   } 
   k-=2;
}
}
var k1=11;
for(var i=1;i<22;i++){
const column=document.createElement("div");
column.className="column1";
column.style.position="absolute";
column.style.top=i*4.5+"%";
document.body.appendChild(column);
if(i!=8){
   for (var j=18;j>0;j--){

const seat=document.createElement("div");

seat.className="seat";
seat.className="seat";

if(i<5){
    if(j<k1){
    seat.style.background="black";
    seat.id="nulll";

    }
    if(j>=k1){
     rcounter++;
  seat.id="r"+rcounter;}
}
else {
   rcounter++;
  seat.id="r"+rcounter;
}
column.appendChild(seat);
   } 
   k1-=2;
}
}
document.querySelectorAll(".seat").forEach((element)=>{
   element.addEventListener("click",function(e){
    createp(e);

    

   });
});
function createp(da){
   var idno=parseInt(da.target.id.substring(1));
   var side=da.target.id.charAt(0);

   document.querySelector("#lstart").value=idno;
   document.querySelector("#lend").value=(idno+(parseInt(document.querySelector("#sno").value)-1));
   if(side==="l"){
document.querySelector(".side").value="l";
   }
   else{
      document.querySelector(".side").value="r";
   }
   document.querySelectorAll(".seat").forEach((e)=>{
      e.style.width="0vh";
 e.style.height="0vh";
  e.style.padding="0px";
   });
 document.querySelector(".panel").style.bottom="30%";
  document.querySelector(".panel").style.width="50vw";
  document.querySelector(".panel").style.height="50vh";
   document.querySelector("#profile").style.bottom="40%";
  document.querySelector("#profile").style.width="40vh";
  document.querySelector("#profile").style.height="40vh";
  document.querySelector("#update").style.bottom="10%";
   document.querySelector(".left").style.opacity="0";
   document.querySelector(".right").style.opacity="0";
   document.querySelector(".ent").style.opacity="0";
   document.querySelector(".stage").style.opacity="0";
}
document.querySelector("#sno").addEventListener("change",function(){
   document.querySelector("#lend").value=(parseInt(document.querySelector("#lstart").value)+(parseInt(document.querySelector("#sno").value)-1));
});
document.querySelector("#lstart").addEventListener("change",function(){
   document.querySelector("#lend").value=(parseInt(document.querySelector("#lstart").value)+(parseInt(document.querySelector("#sno").value)-1));
});
document.querySelector("#lend").addEventListener("change",function(){
   document.querySelector("#sno").value=(parseInt(document.querySelector("#lend").value)-(parseInt(document.querySelector("#lstart").value)-1));
});
document.querySelector(".school").addEventListener("change",function(){
    document.querySelector(".panel").style.right="10%";
     document.querySelector("#profile").style.right="70%";
     console.log(document.querySelector(".school").value+".png");
     document.querySelector("#profile").style.background="url('./style/"+document.querySelector(".school").value+".png')";
     document.querySelector("#profile").style.backgroundSize="cover";
      document.querySelector("#profile").style.backgroundPosition="center";
       document.querySelector("#profile").style.backgroundRepeat="no-repeat";
});
document.querySelector("#update").addEventListener("click",function(e){
 document.querySelector(".panel").style.bottom="-30%";
  document.querySelector(".panel").style.width="0vw";
  document.querySelector(".panel").style.height="0vh";
   document.querySelector("#profile").style.bottom="-40%";
  document.querySelector("#profile").style.width="0vh";
  document.querySelector("#profile").style.height="0vh";
  document.querySelector("#update").style.bottom="-10%";
     document.querySelector(".left").style.opacity="1";
   document.querySelector(".right").style.opacity="1";
   document.querySelector(".ent").style.opacity="1";
   document.querySelector(".stage").style.opacity="1";
     document.querySelectorAll(".seat").forEach((e)=>{
      e.style.width="4vh";
 e.style.height="3.5vh";
  e.style.padding="3px";
   });
   var start=document.querySelector("#lstart").value;
   var end=document.querySelector("#lend").value;
var side=document.querySelector(".side").value;
var backk=document.querySelector("#profile").style.background;
for(var i=start;i<(parseInt(end)+1);i++){
   document.querySelector("#"+side+i).style.background=backk;
   document.querySelector("#"+side+i).style.backgroundSize="cover";
    document.querySelector("#"+side+i).style.backgroundPosition="center";
       document.querySelector("#"+side+i).style.backgroundRepeat="no-repeat";
}
});
