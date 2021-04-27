

(function(){
    pushWeeks();
})();

function pushWeeks(){
    var child = document.getElementsByClassName('weekdays')[0].getElementsByTagName('li');
    for (let index = 0; index < child.length; index++) {
        const element = child[index];
        console.log('当然第' + (index + 1) + '个li数据的值是' + element.innerHTML);
    }
}
