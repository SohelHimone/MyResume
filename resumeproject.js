var navtag = document.querySelectorAll('.nav-menu a');
for(var i=0; i<navtag.length;i++){
    navtag[i].addEventListener('click',function(event){
        event.preventDefault();
        var ts=this.textContent.trim().toLowerCase();
        var ti=document.getElementById(ts);
      //  console.log(tragetsectionid);

        var interval=setInterval(function(){
        var cor=ti.getBoundingClientRect();
            
            
            
            if(cor.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },50);
        
    });
}