let user = { 
    name: "GFG", 
    gfg1:() => { 
        console.log( this); // no 'this' binding here 
    }, 
    gfg2(){        
        console.log(this); // 'this' binding works here 
    }   
 }; 
user.gfg1(); 
user.gfg2(); 