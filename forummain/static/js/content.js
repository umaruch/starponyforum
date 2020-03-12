var page=1

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
    $.ajax({
        type: "GET",
        url: "update",
        data: {
            p:page
        },
        success: function(data){
            createThemeBlocks(data);
        }
    });
}