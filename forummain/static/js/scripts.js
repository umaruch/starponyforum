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

function search(event){
    if(event.keyCode==13){
        var xhr = new XMLHttpRequest();

        // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
        xhr.open('GET', 'update', false);
        
        // 3. Отсылаем запрос
        xhr.send();
        
        // 4. Если код ответа сервера не 200, то это ошибка
        if (xhr.status != 200) {
          // обработать ошибку
          console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
        } else {
            var themearray = JSON.parse(xhr.responseText)
            for(i=0;i<themearray.length;i++){
                console.log(themearray[i])
            }
        }
    }   
}