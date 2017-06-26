// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

const customers = document.getElementById('customers');
const url = 'https://randomuser.me/api/?results=12';



var customersList = document.getElementById('customers');


fetch(url).then(function(response){
    response.json().then(function(data){
      var customers = data.results;
      for (var i = 0; i < customers.length; i++){
      console.log(customers[i]);
      var customerDiv = document.createElement('div');


      
      var customerPic = document.createElement('li');
      var picture = customers[i].picture.large;
      console.log(picture);
      var output = document.getElementById('customers', picture);

      var customerName = document.createElement('li');
      var name = customers[i].name.first + " " + customers[i].name.last;
      console.log(name);

      var customerEmail = document.createElement('li');
      var email = customers[i].email;
      console.log(email);

      var customerAddress = document.createElement('li');
      var address = customers[i].location.street;
      console.log(address);

      var customerAddress2 = document.createElement('li');
      var address2 = customers[i].location.city + ", " + customers[i].location.state + customers[i].location.postcode;
      console.log(address2);

      var customerPhone = document.createElement('li');
      var phone = customers[i].phone;
      console.log(phone);
      customers.innerHTML += customers[i].phone;












}
      }
  );
});
