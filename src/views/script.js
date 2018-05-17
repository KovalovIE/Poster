window.onload = function() {

var dishes = [
    {
        "title": "Говядина",
        "id": "1beef",
        "price": "200",
        "thumbnailUrl": "beef.jpeg"
    },
    {
        "title": "Курица",
        "id": "2chicken",
        "price": "100",
        "thumbnailUrl": "chicken.jpg"
    },
    {
        "title": "Свинина",
        "id": "3pork",
        "price": "110",
        "thumbnailUrl": "pork.jpg"
    },
    {
        "title": "Суп",
        "id": "4soup",
        "price": "120",
        "thumbnailUrl": "soup.jpg"
    },
    {
        "title": "Сок",
        "id": "5juice",
        "price": "130",
        "thumbnailUrl": "juice.jpg"
    },
    {
        "title": "Фрукты",
        "id": "6fruits",
        "price": "140",
        "thumbnailUrl": "fruits.jpg"
    }
]

var menuList = document.getElementById('menu-list')
var aside = document.getElementById('aside')
var asideTable = document.getElementById('aside-table')

dishes.forEach( function(dish) {
  var figure = document.createElement('figure');
  //figure.setAttribute('onclick', 'myFunction()');
  var img = new Image();
  img.id = dish.id;
  img.src = dish.thumbnailUrl;
  img.classList.add('img-size')
  menuList.appendChild(figure);
  figure.appendChild(img);
  var figcaption = document.createElement('figcaption');
  figcaption.innerHTML = dish.title;
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
      //tr.style.marginBottom = "5px";
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

// function myFunction() {
  var inputNumber = '<input type="number" value="1" min="0" id="input1">'
  var itog = '<span id="result"></span>';

    menuList.addEventListener('dblclick', function(event) {
      var table1 = document.getElementById("myTable");
      var row = table1.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var target = event.target;
      function findId(goods) { 
          return goods.id === target.id;
      }

      var goods = dishes.find(findId);
      var elements = [];

      for (var x in goods) {
        elements.push(goods[x]);
      }

      cell1.innerHTML = elements[0];
      cell2.innerHTML = inputNumber;
      cell3.innerHTML = elements[2];
      cell4.innerHTML = itog;

      var input = document.getElementById('input1');
      input.oninput = function() {
        // input.addEventListener('input', function() {
        //   var result = document.getElementById('result');
        //   result.innerHTML = input.value*price;
        // })
        var result = document.getElementById('result');
        result.innerHTML = input.value * cell3.innerHTML;
      };

// window.addEventListener('input', function (e) {
//  console.log("input event detected! coming from this element:", e.target);
// }, false);

      // alert(target.price);
      //   if(target.id === "1") {
      // //alert(target.id);
      //console.log(goods);
}, false);

  var sum = document.getElementById('sum');
  sum.addEventListener('click', function() {
    alert('show sum');
  });
  //}
  // var input1 = document.getElementById('input1');
  // var input2 = document.getElementById('input2');
  // input1.addEventListener('input', function (e) {
  //   var value = parseInt(e.target.value);
  //   if(Number.isFinite(value)) {
  //     input2.value = value / 2;
  //   } else {
  //     input2.value = '';
  //   }
  // });
  // input2.addEventListener('input', function (e) {
  //   var value = parseInt(e.target.value);
  //   if(Number.isFinite(value)) {
  //     input1.value = value * 2;
  //   } else {
  //     input1.value = '';
  //   }
  // });
}