var ds = [];
var student = {
    fullname:"",
    tel:"",
    email:"",
    address:"",
}
function typing(e){
    var notices = document.getElementsByClassName("notice");
    for (var i=0; i<notices.length;i++){
        notices[i].style.display = "none";
    }
    var this_notice = e.nextElementSibling;
    this_notice.style.display = "block";
    this_notice.innerText = e.value;
}

function submit(){
    var formcontrols = document.getElementsByClassName("form-control")
    var student = {};
    for (var i=0;i<formcontrols.length;i++){
        switch (formcontrols[i].name){
            case "fullname":student.fullname = formcontrols[i].value;
            case "tel":student.tel = formcontrols[i].value;
            case "email":student.email = formcontrols[i].value;
            case "address":student.address = formcontrols[i].value;
        }
    }
    ds.push(student);
    var html = "";
    for (var i=0;i<ds.length;i++){
        html += "<li>\n" +
            "                        <h2>"+ds[i].fullname+"</h2>\n" +
            "                        <h3>"+ds[i].tel+"</h3>\n" +
            "                        <h3>"+ds[i].email+"</h3>\n" +
            "                        <h2>"+ds[i].address+"</h2>\n" +
            "                    </li>"
    }
    var list = document.getElementById("students");
    list.innerHTML=html;
}