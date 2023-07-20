//LocalStorage işlemleri
function getLocalStorage(){
    let todo;
    if(localStorage.getItem("todos") === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem("todos"))
    }
    return todo;
}

function displayLocalStorage(){
    const todos = getLocalStorage()
    todos.forEach(todo => {
        createList(todo)
    });
}

function setLocalStorage(todo){
    let todos = getLocalStorage()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteLocalStorage(text){
    let todos = getLocalStorage()
    todos.forEach((todo, index) => {
        if(todo === text){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}
// Li elememanı Üreten fonksiyon
function createList(todo){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = todo
    $("ul").append(liDOM);

}
// Jquery Ana Fonksiyon 
$(function(){
    displayLocalStorage();
    $("#button").on('click',function(){
        var toAdd=$('input[name=ListItem]').val();
        createList(toAdd);
        setLocalStorage(toAdd)
        $('input').val(' ');
    })
    
    $(document).on('dblclick','li',function(){
        $(this).toggleClass('strike').fadeOut('slow');
        console.log($(this).text());
        deleteLocalStorage($(this).text());
    })
   $("ul").sortable();
})
