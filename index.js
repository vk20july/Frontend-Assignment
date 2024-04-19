//Text field Function
const txt=document.getElementById('comment');
const txt1=document.getElementById('comment1');
const out=document.getElementById('caption');
const out1=document.getElementById('btn1');
console.log(out1);
txt.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        out.innerHTML=txt.value;
    }
});
txt1.addEventListener('keypress',(e)=>{
    if(e.key==='Enter'){
        out1.innerHTML=txt1.value;
    }
});

    