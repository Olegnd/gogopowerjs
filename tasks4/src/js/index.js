
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
  return response.json();
 })
.then(function(data) {
    //console.log(data);
    var index = 0;
    var table = document.querySelector('table');
    var thead = document.querySelector('thead');
    var tbody = document.querySelector('tbody');
    var tr = document.createElement('tr');    
    var th = document.createElement('th');
    var td = document.createElement('td');    
        th = '<th>id</th><th>name</th><th>username</th>';
        thead.innerHTML = '<tr>' + th + '</th>';
        
        for(index; index < data.length; index++) {
            tr = document.createElement('tr');
            td = '<td>' + data[index].id + '</td><td>' + data[index].name + '</td><td>' + data[index].username + '</td>';
            tr.innerHTML = '<tr>'+ td +'</tr>';
            tbody.appendChild(tr);
        }
});

