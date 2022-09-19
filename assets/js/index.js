function dangbai(){
    var baidangtext = document.getElementById("baidang-text").value;
    if(baidangtext == "") {
        alert("Không được phép bỏ trống !")
    } else {
        location.href = "index.html"
        document.getElementById("js_upbai").style.display="block";
        var trunggianbaidang = document.getElementById("test");
        baidangtext= trunggianbaidang;
        baidangtext = document.getElementById("test").innerHTML;
    }
}