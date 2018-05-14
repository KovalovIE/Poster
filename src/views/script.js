var dishes = [
    {
        "title": "Говядина",
        "price": "200",
        "thumbnailUrl": "beef.jpeg",
        "weight": "250",
        "isLunch": "false"
    },
    {
        "title": "Курица",
        "price": "100",
        "thumbnailUrl": "chicken.jpg",
        "weight": "250",
        "isLunch": ""
    },
    {
        "title": "Свинина",
        "price": "110",
        "thumbnailUrl": "pork.jpg",
        "weight": "250",
        "isLunch": ""
    },
    {
        "title": "Суп",
        "price": "120",
        "thumbnailUrl": "soup.jpg",
        "weight": "250",
        "isLunch": ""
    },
    {
        "title": "Сок",
        "price": "130",
        "thumbnailUrl": "juice.jpg",
        "weight": "0,5 л",
        "isLunch": ""
    },
    {
        "title": "Фрукты",
        "price": "140",
        "thumbnailUrl": "fruits.jpg",
        "weight": "250",
        "isLunch": ""
    }
]

var menuList = document.getElementById('menu-list')
var aside = document.getElementById('aside')
var asideTable = document.getElementById('aside-table')

dishes.forEach( function(photo) {
  var figure = document.createElement('figure');
  var img = new Image();
  img.src = photo.thumbnailUrl;
  img.setAttribute("height", "100");
  img.setAttribute("width", "150");
  img.setAttribute('onclick', 'myFunction()');
  menuList.appendChild(figure);
  figure.appendChild(img);
  var figcaption = document.createElement('figcaption');
  figcaption.innerHTML = photo.title;
  figcaption.style.background = "white";
  figcaption.style.paddingLeft = "10px";
  figure.appendChild(figcaption);
});

 var table = document.createElement('table');
  aside.appendChild(table);
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';
  table.setAttribute('id', 'myTable');
for(var i = 0; i < 1; i++) {
      var tr = document.createElement('tr');
      table.appendChild(tr);
      tr.setAttribute('id', [i]);
    for(var j = 0; j < 4; j++) {
      var td = document.createElement('td');
      tr.appendChild(td);
      td.style.borderBottom = '1px solid black';      
      //td.style.paddingLeft = '5px';
      if (i === 0 && j === 0) {
        td.appendChild(document.createTextNode('Наименование'));
      } else if (i === 0 && j === 1) {
        td.appendChild(document.createTextNode('Кол-во'));
      } else if (i === 0 && j === 2){
        td.appendChild(document.createTextNode('Цена'));
      } else if (i === 0 && j === 3){
        td.appendChild(document.createTextNode('Итого'));
      }
    }
  }

 function myFunction() {
    var table1 = document.getElementById("myTable");
    var row = table1.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "Beef";
    cell2.innerHTML = "1";
    cell3.innerHTML = "12";
    cell4.innerHTML = "320";
  }
  // if(img.src === 'chicken.jpg'){
  //   function myFunction() {
  //   var table1 = document.getElementById("myTable");
  //   var row = table1.insertRow(0);
  //   var cell1 = row.insertCell(0);
  //   var cell2 = row.insertCell(1);
  //   var cell3 = row.insertCell(2);
  //   var cell4 = row.insertCell(3);
  //   cell1.innerHTML = "Ujdzlbyf";
  //   cell2.innerHTML = "К54о";
  //   cell3.innerHTML = "120";
  //   cell4.innerHTML = "250";
  // }