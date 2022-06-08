window.onload = function ()
{
    var erasebutton = document.getElementById("erase-task");

    erasebutton.onclick = function()
    {
        localStorage.clear()
        location.reload();
    }

}
