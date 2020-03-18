var page_themes = 1;
var page_messages = 1;

function createThemeBlocks(themes){

    for(i=0;i<themes.length;i++){

        $('<div>', {
            class: 'theme-block',
            id: themes[i]['id'],
            on: {
                click: function(event){
                    var id = event.currentTarget.id;
                    var title = document.getElementById('#'+id).innerText;
                    startMessages(id,title);
                },
            },
            append: $('<p>',{
                        text: themes[i]['title'],
                        id: '#'+themes[i]['id']
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
        url: "updatethemes",
        data: {
            p: page_themes
        },
        success: function(data){
            console.log(data);
            createThemeBlocks(data);
            page_themes++;
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
        success: function(data){
            var addtheme = document.getElementById('addtheme-div');
            addtheme.style.display = 'none';
            var themes = document.getElementById('themes');
            themes.innerHTML = "";
            page_themes = 2;
            createThemeBlocks(data);
        }
    });
}

function createMessageBlocks(data){
    for(i=0;i<data.length;i++){

        $('<div>', {
            class: 'theme-block',
            append: $('<p>',{
                        text: data[i]['text']
                    })
                    .add($('<span>', 
                        {   
                            class: 'name',
                            text: data[i]['author_id'], 
                        }))
                    .add($('<span>', {
                        class: 'date',
                        text: data[i]['date']
                        }))
                    .add($('<span>', {
                        id: 'id_theme',
                        text: '#'+data[i]['id']   
                        })),
        })
        .appendTo('#messages');

    }
}

function loadMessages(theme_id){
    $.ajax({
        type: "GET",
        url: "updatemessages",
        data: {
            id: theme_id,
            p: page_messages
        },
        success: function(data){
            console.log(data);
            createMessageBlocks(data);
            page_messages++;
        }
    });
}

function startMessages(id,title){
    document.getElementById("this-theme-id").innerText = '#'+id;
    document.getElementById("this-theme-name").innerText = title;
    document.getElementById("container").style.display = "none";
    document.getElementById("messages-div").style.display = "block";
    loadMessages(id);
}

function addMessage(){
    var text = document.getElementById("new-message-field").value;
    var id = document.getElementById("this-theme-id").innerText;
    $.ajax({
        type: "GET",
        url: "addmessage",
        data: {
            text: text,
            id: id
        },
        success: function(data){
            document.getElementById("new-message-field").value = "";
            document.getElementById("messages").innerHTML = "";
            page_messages = 2;
            createMessageBlocks(data);
        }
    });
}

function backToThemes(){
    document.getElementById('messages').innerHTML = "";
    document.getElementById("messages-div").style.display = "none";
    document.getElementById("container").style.display = "block";
    page_messages = 1;
}
