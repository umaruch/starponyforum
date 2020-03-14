var page=1

function createThemeBlocks(themes){
    var parent = document.getElementById("themes");
    var one_block1 = '<div class="theme-block" id="theme-block" onclick="loadMessages(';
    var one_block2 =');"><p><span class="name">';
    var two_block = '</span> <span class="date">';
    var three_block = '</span></p><p>';
    var four_block = '</p></div>';
    for(i=0;i<themes.length;i++){
        parent.innerHTML+=one_block1+themes[i]['id']+one_block2+themes[i]['author_id']+two_block+themes[i]['date']+three_block+themes[i]['title']+four_block;
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

function loadMessages(theme_id){
    console.log(theme_id);
}