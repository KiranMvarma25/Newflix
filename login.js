let userName;
let Password;
document.getElementById("mySubmit").onclick = function(){
    userName = document.getElementById("idno").value;
    console.log(userName);
    Password = document.getElementById("password").value;
    console.log(Password);
    if(userName == 56789 && Password == 12345)
    {
        var linkElement = document.createElement("a");
        linkElement.href = "start.html";
        //linkElement.target = "_blank";
        linkElement.textContent = "ENTER";
        document.body.appendChild(linkElement);
    } 
    else
    {
        var h4Error = document.createElement("h4");
        h4Error.textContent = "Invalid Details";
        document.body.appendChild(h4Error);
    }
}




