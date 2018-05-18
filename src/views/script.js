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

var menuList = document.getElementById('menu-list');
var aside = document.getElementById('aside');
var send = document.getElementById('send-sum');
var tableTotal = document.querySelector('.table-sum');

dishes.forEach( function(dish) {
  var figure = document.createElement('figure');
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

  var tableSum = document.createElement('table');
    tableTotal.appendChild(tableSum);
    tableSum.style.borderCollapse = 'collapse';
    tableSum.style.borderTop = '1px solid grey';
    tableSum.style.width = '100%';
    tableSum.style.height = '80px';
    tableSum.setAttribute('id', 'myTable-sum');

    for(var i = 0; i < 2; i++) {
          var tr = document.createElement('tr');
          tableSum.appendChild(tr);
          //tr.style.marginBottom = "5px";
        for(var j = 0; j < 3; j++) {
          var td = document.createElement('td');
          tr.appendChild(td);
          td.style.width = 'calc(100%/3)';
          //td.style.borderBottom = '1px solid black';      
          //td.style.paddingLeft = '5px';
          if (i === 0 && j === 0) {
            td.appendChild(document.createTextNode('Итого'));
          } else if (i === 0 && j === 1) {
            td.appendChild(document.createTextNode(''));
            td.setAttribute('id', 'total-sum');
          } else if (i === 0 && j === 2){
            td.appendChild(document.createTextNode('К оплате'));
          } else if (i === 1 && j === 0){
            td.appendChild(document.createTextNode('Скидка'));
          } else if (i === 1 && j === 1){
            td.appendChild(document.createTextNode('------'));
          } else if (i === 1 && j === 2){
            td.appendChild(document.createTextNode(''));
            td.setAttribute('id', 'total-sum-discount');
          } 
        }
      }

    menuList.addEventListener('dblclick', function(event) {
      var table1 = document.getElementById("myTable");
      var row = table1.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell3.setAttribute('class','cena')
      var cell4 = row.insertCell(3);
      cell4.setAttribute('name','total')
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
      //cell2.innerHTML = inputNumber;
      cell2.innerHTML = '<input type="number" name="quantity" min="1" max="99" value="1">';
      cell3.innerHTML = elements[2];
      //cell3.innerHTML = '<input type="number" name="summ" min="1" max="99">';
      //cell4.innerHTML = itog;
      //cell4.innerHTML = '<input type="number" name="total" min="0" max="99999999">';
      cell4.innerHTML = elements[2];

      $(document).on('change','input[type="number"]',function(){    
          var tr=$(this).closest('tr');
           var Quantity= tr.find('input[name="quantity"]').val();
           //var Price= tr.find('td:eq(2)').html();
           var Price= tr.find('.cena').html();              
          var total= (Quantity * Price);
          console.log(total);
          tr.find('[name="total"]').html(total);
      });

      // var input = document.getElementById('input1');
      // input.oninput = function() {
      //   // input.addEventListener('input', function() {
      //   //   var result = document.getElementById('result');
      //   //   result.innerHTML = input.value*price;
      //   // })
      //   var result = document.getElementById('result');
      //   result.innerHTML = input.value * cell3.innerHTML;
      // };



// var input = document.getElementsByName('quantity')[0];
// console.log(input);
// input.addEventListener('input', function (evt) {
//     console.log(this.value);
// });
// window.addEventListener('input', function (e) {
//  console.log(this.value);
// }, false);

      // alert(target.price);
      //   if(target.id === "1") {
      // //alert(target.id);
      //console.log(goods);
}, false);

    send.addEventListener('click', function() {
      var table1 = document.getElementById("myTable");
      var numberRow = table1.rows.length;
      var totalSum = 0;
      //console.log(numberRow)
      for (m = 1; m < numberRow; m++) {
        var sumRows = table1.rows[m].cells[3].innerHTML;
        totalSum += +sumRows;
        
      }
      //console.log(totalSum);
      var totalSumElement = document.getElementById("total-sum");
      totalSumElement.innerHTML = totalSum;
      var totalSumDiscount = document.getElementById("total-sum-discount");
      totalSumDiscount.innerHTML = totalSum;
      totalSumDiscount.style.background = "yellow";
      totalSumDiscount.style.fontSize = "25px";
    })
}