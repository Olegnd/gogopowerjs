
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
  return response.json();
 })
.then(function(data) {
    //console.log(data);
    var index = 1;
    var list = document.querySelector('ul');
    console.log(list)
    while(index < data.length) {
        var li = document.createElement('li')
        li.innerText = data[index].name;
        list.appendChild(li);
        index = index + 1;
    }
});

//li.innerHTML = "HTML"