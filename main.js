// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

const ul = document.getElementById('customers');
const url = 'https://randomuser.me/api/?results=12';



var customersList = document.getElementById('customers');

function createNode(element) {
      return document.createElement(element);
  }


fetch(url).then(function(response){
    response.json().then(function(data){
      var customers = data.results;
      for (var i = 0; i < customers.length; i++){
      console.log(customers[i]);
      var div = document.createElement('div');

      var customersList = document.getElementById('customers');
      var container = document.getElementById('container');
      // var div = createNode('div');
      container.append(customersList);
      document.body.append(div);




      var customerPic = document.createElement('img');
      var picture = customers[i].picture.large;
      console.log(picture);
      var img = createNode('img');
      img.src = customers[i].picture.large;
      document.body.appendChild(img);



      var customerName = document.createElement('h3');
      var name = customers[i].name.first + " " + customers[i].name.last;
      customerName.textContent = name;
      customerName.className = 'name'
      console.log(name);
      document.body.appendChild(customerName);

      var customerEmail = document.createElement('h4');
      var email = customers[i].email;
      customerEmail.textContent = email;
      customerEmail.className = 'email';
      console.log(email);
      document.body.appendChild(customerEmail);

      var customerAddress = document.createElement('h4');
      var address = customers[i].location.street;
      customerAddress.textContent = address;
      customerAddress.className = 'address';
      console.log(address);
      document.body.appendChild(customerAddress);

      var customerAddress2 = document.createElement('h4');
      var address2 = customers[i].location.city + ", " + customers[i].location.state + customers[i].location.postcode;
      customerAddress2.textContent = address2;
      customerAddress2.className = 'address2';
      console.log(address2);
      document.body.appendChild(customerAddress2);

      var customerPhone = document.createElement('h4');
      var phone = customers[i].phone;
      customerPhone.textContent = phone;
      customerPhone.className = 'phone';
      console.log(phone);
      document.body.appendChild(customerPhone);


}
      }




  );
});
