const status = window.navigator.onLine;
if(status) online()
else offline()
 
 
window.addEventListener('online', online);
window.addEventListener('offline', offline);
 
 
function online(){
    document.getElementById('container').style.backgroundColor = 'green';
    document.querySelector('span').textContent = 'Online';
}
 
function offline(){
    document.getElementById('container').style.backgroundColor = 'red';
    document.querySelector('span').textContent = 'Offline';
}