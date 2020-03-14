function openRF(){
    var login_div = document.getElementById("reg-div");
    login_div.style.display = "block";
}

function closeRF(){
    var login_div = document.getElementById("reg-div");
    login_div.style.display = "none";
}

function register(){
    username = document.getElementById("username-reg").value;
    pass1 = document.getElementById("pass1-reg").value;
    pass2 = document.getElementById("pass2-reg").value;
    $.ajax({
        type : "GET",
        url : "register",
        data : {
            name : username,
            p1 : pass1,
            p2 : pass2
        },
        success: function(data){
            if (data['status']==0){
                location.reload()
            }
            else {
                document.getElementById("status-r").textContent = "Пароли не совпадают"
            }
        }
    });
    return
}