var page=1

function createLoginForm(){
    var loginDiv = document.createElement('div');
    loginDiv.className="LoginForm";
    loginDiv.innerHTML="<h1>Kek</h1>";
    var el = document.getElementsByClassName("main");
    el.appendChild(loginDiv);
}

function delLoginForm(){
    document.getElementsByClassName("main").removeChild(document.getElementsByClassName("LoginForm"))
}

function createThemeBlocks(themes){
    var parent = document.getElementById("kek");
    var one_block = '<div class="theme-block"><p><span class="name">';
    var two_block = '</span> <span class="date">';
    var three_block = '</span></p><p>';
    var four_block = '</p></div>';

    for(i=0;i<themes.length;i++){
        parent.innerHTML+=one_block+themes[i]['author_id']+two_block+themes[i]['date']+three_block+themes[i]['title']+four_block;
    }
}

function loadThemes(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'update'+page, false);
    xhr.send();
    if (xhr.status != 200) {
        console.log( xhr.status + ': ' + xhr.statusText );
    } else {
        themes = JSON.parse(xhr.responseText);
        console.log("Elements getted");
        createThemeBlocks(themes);
        page+=1
    }
}   
