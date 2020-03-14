
function openLF(){
    var login_div = document.getElementById("login-div");
    login_div.style.display = "block";
}

function closeLF(){
    var login_div = document.getElementById("login-div");
    login_div.style.display = "none";
}

function login(){
    var user = document.getElementById("username-login").value;
    var pass = document.getElementById("pass-login").value;
    console.log(user)
    $.ajax({
        type: "GET",
        url: "login",
        data: {
            username: user,
            password: pass
        },
        success: function(data){
            if (data['status'] == '1'){
                location.reload();
            }
            else console.log('Error');
        }
    })
}

function logout(){
    $.ajax({
        type: "GET",
        url: "logout",
        success: function(data){
            console.log(data)
            location.reload();
        }
    })
}