
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
  return response.json();
 })
.then(function(data) {
    var index = 0;
    var arrayKey = [];
    var table = document.querySelector('table');
    var thead = document.querySelector('thead');
    var tbody = document.querySelector('tbody');
    var tr;    
    var th;
    var td;
        arrayKey = Object.keys(data[0]);
//--form HTML document--
        tr = document.createElement('tr');
        //th = document.createElement('th');
        th = '<th>'+ arrayKey[0] + '</th><th>' + arrayKey[1] + '</th><th>' + arrayKey[2] + '</th>';
        thead.innerHTML = '<tr>' + th + '</th>';
        
        for(index; index < data.length; index++) {
            tr = document.createElement('tr');
            //td = document.createElement('td');
            td = '<td>' + data[index].id + '</td><td>' + data[index].name + '</td><td>' + data[index].username + '</td>';
            tr.innerHTML = '<tr>'+ td +'</tr>';
            tbody.appendChild(tr);
        }
});

