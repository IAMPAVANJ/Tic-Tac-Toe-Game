var reset = document.getElementById("reset")
reset.addEventListener("click",function(){
    window.location.reload()
})
    var n1 = document.getElementById("b1");
    var n2 = document.getElementById("b2");
    var n3 = document.getElementById("b3");
    var n4 = document.getElementById("b4");
    var n5 = document.getElementById("b5");
    var n6 = document.getElementById("b6");
    var n7 = document.getElementById("b7");
    var n8 = document.getElementById("b8");
    var n9 = document.getElementById("b9");


   




var player = "x"
document.getElementById("turn").innerHTML = "Turn Of X"
let count = 0;
function add(cell){
    
    if(cell.innerHTML!==""){
        return;
    }
    cell.innerHTML = player;
    if(player=="x"){
        document.getElementById("turn").innerHTML = "Turn Of O"
        count++
        player="o"
    }else{
        document.getElementById("turn").innerHTML = "Turn Of X"
        count++
        player="x"
    }

  
        if(n1.innerHTML=="x"&&n2.innerHTML=="x"&&n3.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n1.setAttribute('style',"background-color:grey")
        n2.setAttribute('style',"background-color:grey")
        n3.setAttribute('style',"background-color:grey")
        
        
        
    }
   
    if(n1.innerHTML=="o"&&n2.innerHTML=="o"&&n3.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n1.setAttribute('style',"background-color:grey")
        n2.setAttribute('style',"background-color:grey")
        n3.setAttribute('style',"background-color:grey")
        
        
    }
    
    if(n4.innerHTML=="x"&&n5.innerHTML=="x"&&n6.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n4.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n6.setAttribute('style',"background-color:grey")
       
        
    }

    if(n4.innerHTML=="o"&&n5.innerHTML=="o"&&n6.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n4.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n6.setAttribute('style',"background-color:grey")
     
        
    }

    if(n7.innerHTML=="x"&&n8.innerHTML=="x"&&n9.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n7.setAttribute('style',"background-color:grey")
        n8.setAttribute('style',"background-color:grey")
        n8.setAttribute('style',"background-color:grey")
      
        
    }
    
    if(n7.innerHTML=="o"&&n8.innerHTML=="o"&&n9.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n7.setAttribute('style',"background-color:grey")
        n8.setAttribute('style',"background-color:grey")
        n9.setAttribute('style',"background-color:grey")
     
        
    }

    if(n1.innerHTML=="x"&&n4.innerHTML=="x"&&n7.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n1.setAttribute('style',"background-color:grey")
        n4.setAttribute('style',"background-color:grey")
        n7.setAttribute('style',"background-color:grey")
    
        
    }
    
    if(n1.innerHTML=="o"&&n4.innerHTML=="o"&&n7.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n1.setAttribute('style',"background-color:grey")
        n4.setAttribute('style',"background-color:grey")
        n7.setAttribute('style',"background-color:grey")
      
    }

    if(n2.innerHTML=="x"&&n5.innerHTML=="x"&&n8.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n2.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n8.setAttribute('style',"background-color:grey")
     
    }
    
    if(n2.innerHTML=="o"&&n5.innerHTML=="o"&&n8.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n2.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n8.setAttribute('style',"background-color:grey")
    
    }

    if(n3.innerHTML=="x"&&n6.innerHTML=="x"&&n9.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n3.setAttribute('style',"background-color:grey")
        n6.setAttribute('style',"background-color:grey")
        n9.setAttribute('style',"background-color:grey")
      
    }
    
    if(n3.innerHTML=="o"&&n6.innerHTML=="o"&&n9.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n3.setAttribute('style',"background-color:grey")
        n6.setAttribute('style',"background-color:grey")
        n9.setAttribute('style',"background-color:grey")
    
    }

    if(n3.innerHTML=="x"&&n5.innerHTML=="x"&&n7.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n3.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n7.setAttribute('style',"background-color:grey")
       
        
    }
    
    if(n3.innerHTML=="o"&&n5.innerHTML=="o"&&n7.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n3.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n7.setAttribute('style',"background-color:grey")
      
    }

    if(n1.innerHTML=="x"&&n5.innerHTML=="x"&&n9.innerHTML=="x" &&count>=5){
        result.innerHTML="winner is x"
        n1.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n9.setAttribute('style',"background-color:grey")
      
        
    }
    
    if(n1.innerHTML=="o"&&n5.innerHTML=="o"&&n9.innerHTML=="o" &&count>=5){
        result.innerHTML="winner is o"
        n1.setAttribute('style',"background-color:grey")
        n5.setAttribute('style',"background-color:grey")
        n9.setAttribute('style',"background-color:grey")
      
        
    }

    if(n1.innerHTML!==""&&n2.innerHTML!==""&&n3.innerHTML!==""&&n4.innerHTML!==""&&n5.innerHTML!==""&&n6.innerHTML!==""&&n7.innerHTML!==""&&n8.innerHTML!==""&&n9.innerHTML!==""){
        result.innerHTML="Match is Draw"
    }
    }