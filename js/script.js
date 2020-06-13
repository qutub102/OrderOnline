function auth(){
    if(localStorage.getItem('login') == 'success'){
        window.location = 'service2.html'
    }
    else{
        window.location = 'service.html'
    }
}
function del(){
    localStorage.removeItem('login')
    window.location = 'index.html'
}