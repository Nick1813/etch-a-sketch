var n=25;
for(let i=0;i<=n;i++){
    document.body.innerHTML+='<div class="row">';
    
    for(let j=0;i<=n;j++){
        document.body.innerHTML+='div class="gridsquare">' + (i*5+j+1) +'</div>';
    }
    document.body.innerHTML+='</div>';
}
