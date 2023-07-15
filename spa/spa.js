function createCustomer(name, bill, bookingsArr = []) {
  var customerObj = {
    name: name,
    bill: bill,
    bookings: bookingsArr,
  };
  return customerObj;
}

function greeting(customerObj) {
  if (customerObj.bookings.length === 0) {
    return `${customerObj.name}! Welcome to Happy Spa`;
  } else {
    return `${customerObj.name}! Welcome back to Happy Spa`;
  }
}

function createService(service, cost) {
  if (service === undefined) {
    return "Please provide service name and cost.";
  }
  var serviceObj = {
    name: service,
    cost: cost,
  };
  return serviceObj;
}

function bookServices(nameObj, serviceObj) {
  nameObj.bookings.push(serviceObj.name);
  nameObj.bill += serviceObj.cost;
  return nameObj;
}

function applyGiftCard(services, num) {
  var servicesArr = [];
  for (var i = 0; i < services.length; i++) {
    if (services[i].price <= num) {
      servicesArr.push(services[i].name);
    }
  }
  return servicesArr;
}

module.exports = {
  createCustomer,
  greeting,
  createService,
  bookServices,
  applyGiftCard,
};
