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