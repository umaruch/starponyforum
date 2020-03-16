var page=1

function createThemeBlocks(themes){

    for(i=0;i<themes.length;i++){

        $('<div>', {
            class: 'theme-block',
            id: themes[i]['id'],
            on: {
                click: function(event){
                    var id = event.currentTarget.id;
                    console.log(id);
                },
            },
            append: $('<p>',{
                        text: themes[i]['title']
                    })
                    .add($('<span>', 
                        {   
                            class: 'name',
                            text: themes[i]['author_id'], 
                        }))
                    .add($('<span>', {
                        class: 'date',
                        text: themes[i]['date']
                        }))
                    .add($('<span>', {
                        id: 'id_theme',
                        text: '#'+themes[i]['id']   
                        })),
        })
        .appendTo('#themes');

    }
}

function loadThemes(){
    $.ajax({
        type: "GET",
        url: "update",
        data: {
            p:page
        },
        success: function(data){
            createThemeBlocks(data);
            page++;
        }
    });
}

function openTF(){
    var login_div = document.getElementById("addtheme-div");
    login_div.style.display = "block";
}

function closeTF(){
    var login_div = document.getElementById("addtheme-div");
    login_div.style.display = "none";
}

function addtheme(){
    var title = document.getElementById("input-title-theme").value;
    $.ajax({
        type: "GET",
        url: "addtheme",
        data: {
            title: title
        },
        success: function(){
            page = 1;
            document.getElementById("themes").innerHTML = "";
            loadThemes()
        }
    });
}

function loadMessages(theme_id){
    document.getElementById("container").style.display = "none";
}
