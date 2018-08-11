window.onload = function () {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'menu.json', true);
  xhr.onload = function () {
      if (xhr.status !== 200) {
        alert( xhr.status + ': ' + xhr.statusText );
      } else {
        var dishes = JSON.parse(this.response);
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
          var goods = dishes.find(findId);
          var elements = [];
          
          for (var x in goods) {
            elements.push(goods[x]);
          }

          if (elements[4] == undefined) {
            return;
          } else {
          menuList.innerHTML = '';
          var div = document.createElement('div');
          goodsPlus.appendChild(div);
          div.innerHTML = elements[0];
          div.classList.add('main_goods');

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
          var elements = [];
          var result = dishes.map(dish => dish.dblMenu);

          function returnElem() {
            for (var i = 0; i < result.length; i++) {
              var goods = result[i].find(findId);
              
              for (var x in goods) {
                elements.push(goods[x]);
              }
              if(elements[1] === target.id) return elements;
            }
          };
          returnElem();
          
          cell1.innerHTML = elements[0];
          cell2.innerHTML = '<input type="number" name="quantity" min="1" max="99" value="1">';
          cell3.innerHTML = elements[2];
          cell4.innerHTML = elements[2];

          $(document).on('change','input[type="number"]', function(){    
              var tr = $(this).closest('tr');
               var Quantity = tr.find('input[name="quantity"]').val();
               var Price = tr.find('.cena').html();              
              var total = (Quantity * Price);
              tr.find('[name="total"]').html(total);
          });
        }, false);


        send.addEventListener('click', function() {
          var table1 = document.getElementById("myTable");
          var numberRow = table1.rows.length;
          var totalSum = 0;

          for (m = 1; m < numberRow; m++) {
            var sumRows = table1.rows[m].cells[3].innerHTML;
            totalSum += +sumRows;
          }

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
  };
  xhr.send();  
}