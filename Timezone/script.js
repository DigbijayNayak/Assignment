
function disp_TZ(){
    var tz=document.getElementById("timezone").value;
    var str= new Date().toLocaleString("en-US", 
        {timeZone: tz,timeZoneName:"short"})
    document.getElementById('tresult').innerHTML = str + "," + tz;
    // display_c()
}
