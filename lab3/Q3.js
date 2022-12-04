

// 3-	Make a link that on its onClick event opens new advertising window after 3 seconds, and write long paragraphs on it and print each char of this paragraph every on second. Also, make another link that closes this page. (Note that the browser may block the opening of the new window; make sure that you allow this page to open popups in your browser). 


let justwindow;


function letter(){
    
}


function writeee() {
  
function open(){
    justwindow=  window.open("", "" , "width=300,height=200");

let writeee=" 3-Make a link that on its onClick event opens new advertising window after 3 seconds, and write long paragraphs on it and print each char of this paragraph every on second. Also, make another link that closes this page. (Note that the browser may block the opening of the new window; make sure that you allow this page to open popups in your browser). ";
var i=0;
function writing(){
   
    i++;
  
    justwindow.document.write(writeee[i]);
}



    setInterval(  writing, 1000)

}



    setTimeout( open, 3000);




    
}



