var x;
var Break = false;
var scoreX = 0;
var scoreO = 0;
var a = ["","","","","","","","",""];
function start(){
    window.onload=function(){
    document.getElementById("hashivX1").innerHTML = localStorage.getItem('x')+"(X) -";
    document.getElementById("hashivO2").innerHTML = localStorage.getItem('o')+"(O) -"; 
    }
    x = Math.floor(Math.random() * 2);
    if (x === 0){
        x = "X";
    }else{
        x = "O";
    }
    console.log(x);
    document.getElementById("xoro").innerHTML = x; 
}
function myFunction(i) {
    if(Break === true){
        return
    }
    if (a[i] === ""){
         a[i] = x
        document.getElementById("d"+i).innerHTML = x ;
    }else{
        return
    }

    if (x === "X"){
        x = "O"
    }else{
        x = "X"
    }
    document.getElementById("xoro").innerHTML = x; 

    var	z = [[0,1,2],[3,4,5],[6,7,8],[0,5,6],[1,4,7],[2,3,8],[0,4,8],[2,4,6]];
    for(var i=0; i<8; i++){
        var b = z[i]
        var i1=b[0], i2=b[1], i3=b[2];
        if((a[i1] === "X") && (a[i2] === "X") && (a[i3] === "X")){
            document.querySelectorAll('#d'+i1+','+'#d'+i2+','+'#d'+i3).forEach(val => val.style.color = "red")
            scoreX += 1
            document.getElementById("hashivX3").innerHTML = scoreX;
            Break = true        
        }
        if((a[i1] === "O") && (a[i2] === "O") && (a[i3] === "O")){
            document.querySelectorAll('#d'+i1+','+'#d'+i2+','+'#d'+i3).forEach(val => val.style.color = "red")
            scoreO += 1
            document.getElementById("hashivO4").innerHTML = scoreO;        
            Break = true
        }        
    } 
    return;
}

function jnjel(){
    document.querySelectorAll('#d0,#d1,#d2,#d3,#d4,#d5,#d6,#d7,#d8').forEach(val => val.innerHTML = "")
    document.querySelectorAll('#d0,#d1,#d2,#d3,#d4,#d5,#d6,#d7,#d8').forEach(val => val.style.color = "black")   
    a = ["","","","","","","","",""];
    Break = false   
}

function anunner(){
    x = document.getElementById("anun1").value;
    o = document.getElementById("anun2").value;
    localStorage.setItem('x',x)
    localStorage.setItem('o',o)   
}