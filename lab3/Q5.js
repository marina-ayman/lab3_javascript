// 5-	 Write a script that shows a “typing message” appearing in
// a new child window. The new window should close after few
// seconds of displaying your message.




let openwindow=window.open("https://www.google.com/?hl=ar", "" , "width=300,height=200");


openwindow.document.write("typing message");

function close(){
    openwindow.close();
}


setTimeout(close,5000)