
// 1-	 Create a parent window that opens a flying child window.
// Hint: Start by creating a parent window that opens a child
// and make button in parent to close child window


let newWindow;

function opeeen()
{
   newWindow= window.open("https://www.google.com/?hl=ar", "" , "width=300,height=200");
}



function close()
{
   newWindow.close();
}



// open.document.getElementById("close");




// newWindow.document.getElementById("close").addEventListener("click", function(){window.clo("","target") })

