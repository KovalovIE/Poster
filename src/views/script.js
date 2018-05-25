window.onload = function() {

var dishes = [
    {
        "title": "Говядина",
        "id": "1beef",
        "price": "200",
        "thumbnailUrl": "beef.jpeg",
        "dblMenu": [
             {
                  "title": "Жареная говядина",
                  "id": "7beef",
                  "price": "10",
                  "thumbnailUrl": "beef01.png"
              },
              {
                  "title": "Вареная говядина",
                  "id": "8beef",
                  "price": "20",
                  "thumbnailUrl": "beef02.jpg"
              }           
        ]
    },
    {
        "title": "Курица",
        "id": "2chicken",
        "price": "100",
        "thumbnailUrl": "chicken.jpg",
        "dblMenu": [
             {
                  "title": "Жареная курица",
                  "id": "9chicken",
                  "price": "30",
                  "thumbnailUrl": "chicken01.jpg"
              },
              {
                  "title": "Вареная курица",
                  "id": "10chicken",
                  "price": "140",
                  "thumbnailUrl": "chicken02.jpg"
              }           
        ]
    },
    {
        "title": "Свинина",
        "id": "3pork",
        "price": "110",
        "thumbnailUrl": "pork.jpg",
        "dblMenu": [
             {
                  "title": "Жареная свинина",
                  "id": "11pork",
                  "price": "210",
                  "thumbnailUrl": "pork01.jpg"
              },
              {
                  "title": "Вареная свинина",
                  "id": "12pork",
                  "price": "180",
                  "thumbnailUrl": "pork02.jpg"
              }           
        ]
    },
    {
        "title": "Суп",
        "id": "4soup",
        "price": "120",
        "thumbnailUrl": "soup.jpg",
        "dblMenu": [
             {
                  "title": "Суп 01",
                  "id": "13soup",
                  "price": "100",
                  "thumbnailUrl": "soup01.jpg"
              },
              {
                  "title": "Суп 02",
                  "id": "14soup",
                  "price": "150",
                  "thumbnailUrl": "soup02.jpg"
              }           
        ]
    },
    {
        "title": "Сок",
        "id": "5juice",
        "price": "130",
        "thumbnailUrl": "juice.jpg",
        "dblMenu": [
             {
                  "title": "Апельсиновый сок",
                  "id": "15juice",
                  "price": "40",
                  "thumbnailUrl": "juice01.jpg"
              },
              {
                  "title": "Томатный сок",
                  "id": "16juice",
                  "price": "42",
                  "thumbnailUrl": "juice02.jpg"
              },
              {
                  "title": "Яблочный сок",
                  "id": "17juice",
                  "price": "3",
                  "thumbnailUrl": "juice03.jpg"
              }           
        ]
    },
    {
        "title": "Фрукты",
        "id": "6fruits",
        "price": "140",
        "thumbnailUrl": "fruits.jpg",
        "dblMenu": [
             {
                  "title": "Клубника",
                  "id": "18fruits",
                  "price": "60",
                  "thumbnailUrl": "fruits01.jpg"
              },
              {
                  "title": "Бананы",
                  "id": "19fruits",
                  "price": "35",
                  "thumbnailUrl": "fruits02.jpg"
              },
              {
                  "title": "Яблоки",
                  "id": "20fruits",
                  "price": "35",
                  "thumbnailUrl": "fruits03.jpg"
              }           
        ]
    }
];

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
  figure.appendChild(figcaption);
});

    menuList.addEventListener('click', function(event) {      
      var goodsPlus = document.querySelector('.main_new-goods');
      var target = event.target;
      function findId(goods) { 
          return goods.id === target.id;
      }
      //console.log(target.id)
      var goods = dishes.find(findId);
      //console.log(goods)
      var elements = [];
      
      for (var x in goods) {
        elements.push(goods[x]);
      }
      //console.log(elements[4])
      if (elements[4] == undefined) {
        return;
      } else {
      menuList.innerHTML = '';
      var div = document.createElement('div');
      goodsPlus.appendChild(div);
      div.innerHTML = elements[0];
      div.classList.add('main_goods');
      //div.setAttribute('id','aaa')

      elements[4].forEach( function(dish) {
        var figure = document.createElement('figure');
        var img = new Image();
        img.id = dish.id;
        img.src = dish.thumbnailUrl;
        img.classList.add('img-size')
        menuList.appendChild(figure);
        figure.appendChild(img);
        var figcaption = document.createElement('figcaption');
        figcaption.innerHTML = dish.title;
        figure.appendChild(figcaption);
      });
      }
    })



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
      //console.log(target.id)
      //var goods = {};
      var elements = [];
      var result = dishes.map(dish => dish.dblMenu);
      function returnElem() {
        for (var i = 0; i < result.length; i++) {
          //console.log(result[i]);
          var goods = result[i].find(findId);
          
          for (var x in goods) {
            elements.push(goods[x]);
          }
          //console.log(elements[1]);
          if(elements[1] === target.id) return elements;
        }
      };
      returnElem();
      
      cell1.innerHTML = elements[0];
      cell2.innerHTML = '<input type="number" name="quantity" min="1" max="99" value="1">';
      cell3.innerHTML = elements[2];
      cell4.innerHTML = elements[2];

      $(document).on('change','input[type="number"]',function(){    
          var tr=$(this).closest('tr');
           var Quantity= tr.find('input[name="quantity"]').val();
           //var Price= tr.find('td:eq(2)').html();
           var Price= tr.find('.cena').html();              
          var total= (Quantity * Price);
          //console.log(total);
          tr.find('[name="total"]').html(total);
      });
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



    var startGoods = document.getElementById("start-menu");
    startGoods.addEventListener('click', function() {
      var mainNewGoods = document.querySelector('.main_new-goods');
      menuList.innerHTML = '';
      while (mainNewGoods.lastChild.id !== 'start-menu') {
          mainNewGoods.removeChild(mainNewGoods.lastChild);

      }

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
        figure.appendChild(figcaption);
      });
    })



    var print = document.getElementById("print-table");
    print.addEventListener('click', function() {
      function printDiv() {
         var asideTable = document.getElementById("aside");
         var tableSum = document.querySelector('.table-sum')
         window.frames["print_frame"].document.body.innerHTML = asideTable.innerHTML + '----------------' + tableSum.innerHTML;
         window.frames["print_frame"].window.focus();
         window.frames["print_frame"].window.print();
       };
      printDiv();
    })
}