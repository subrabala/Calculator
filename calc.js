function view(num){
    document.getElementById("result").value+=num
}

function clear1(){
    document.getElementById("result").value=" ";
}

document.getElementById('eqbtn').addEventListener('click',()=>{
    document.getElementById("result").value=eval(document.getElementById('result').value);
})

document.getElementById('delete').addEventListener('click', ()=>{
    document.getElementById("result").value=document.getElementById('result').value.slice(0,-1) ;
})






















