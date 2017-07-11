(function(){
  'use strict';
  const URL = 'https://randomuser.me/api/?results=12';
  // this is the DOM element where users are appended
  const CUSTOMERS_LIST = document.getElementById('customers');

  fetch(URL).then(function(response) {
    response.json().then(function(data) {
      var results = data.results;
      for (var i = 0; i < results.length; i++) {
        // console.log(customers[i]);

        // create list item
        var listItem = document.createElement('li');

        var customerImg = document.createElement('img');
        customerImg.src = results[i].picture.large;
        listItem.appendChild(customerImg);

        var customerName = document.createElement('h3');
        customerName.textContent = `${results[i].name.first} ${results[i].name.last}`
        listItem.appendChild(customerName);

        var customerEmail = document.createElement('p');
        customerEmail.textContent = results[i].email;
        listItem.appendChild(customerEmail);

        var customerAddress = document.createElement('p');
        customerAddress.textContent = results[i].location.street;
        listItem.appendChild(customerAddress);

        var customerAddress2 = document.createElement('p');
        customerAddress2.textContent = `${results[i].location.city}, ${results[i].location.state} ${results[i].location.postcode}`
        listItem.appendChild(customerAddress2);

        var customerPhone = document.createElement('p');
        customerPhone.textContent = results[i].phone;
        listItem.appendChild(customerPhone);

        CUSTOMERS_LIST.appendChild(listItem);
      }
    });
  });
})();
