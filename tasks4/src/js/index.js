
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var index = 0;
        var i;
        var arrayKey = [];
        var table = document.querySelector('table');
        var thead = document.querySelector('thead');
        var tbody = document.querySelector('tbody');
        var tr;
        var th = [];
        var td = [];
        arrayKey = Object.keys(data[0]);
        
    //--form HTML document--
        tr = document.createElement('tr');
        for(index; index < arrayKey.length - 4; index++) {
            th[index] = '<th>' + arrayKey[index] + '</th>';
        }
        thead.innerHTML = '<tr>' + th.join('') + '</tr>';
        
        index = 0;
        for (index; index < data.length; index++) {
            tr = document.createElement('tr');
            //td = document.createElement('td');
            i = 0;
            for(i; i < arrayKey.length - 4; i++) {
                td[i] = '<td>' + data[index][arrayKey[i]] + '</td>';
            }            
            tr.innerHTML = '<tr>' + td.join('') + '</tr>';
            tbody.appendChild(tr);
        }
    });

