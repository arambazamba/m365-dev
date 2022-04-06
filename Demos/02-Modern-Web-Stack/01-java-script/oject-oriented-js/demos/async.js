//# sourceURL=crud.js

function getVouchers() {
  debugger;

  var url = 'http://localhost:3000/vouchers';
  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(msg) {
      console.log('query successful, data received: ' + JSON.stringify(msg));
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function getVoucher() {
  debugger;

  var url = 'http://localhost:3000/vouchers/1';
  $.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(msg) {
      console.log('query successful, data received: ' + JSON.stringify(msg));
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function insertVoucher() {
  debugger;

  var url = 'http://localhost:3000/vouchers';
  var data = JSON.stringify({ Text: 'Inserted by WebApi', Date: new Date() });

  $.ajax({
    type: 'POST',
    data: data,
    url: url,
    contentType: 'application/json; charset=utf-8',
    success: function(msg) {
      console.log('query successful, data received: ' + JSON.stringify(msg));
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function updateVoucher() {
  debugger;

  var id = 1003;
  var url = 'http://localhost:3000/vouchers/' + id;
  var vtu = JSON.stringify({
    ID: id,
    Text: 'Updated by WebApi',
    Date: '2016-04-22T16:59:32.086',
    Amount: 99,
    Paid: true,
    Expense: false
  });
  $.ajax({
    type: 'PUT',
    data: vtu,
    url: url,
    contentType: 'application/json; charset=utf-8',
    success: function(msg) {
      console.log('query successful, voucher updated - id:' + id);
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function deleteVoucher() {
  debugger;

  var id = 3003;
  var url = 'http://localhost:3000/vouchers/' + id;
  $.ajax({
    type: 'DELETE',
    url: url,
    contentType: 'application/json; charset=utf-8',
    success: function(msg) {
      console.log('query successful, voucher deleted');
    },
    error: function(msg) {
      console.log(msg.responseText);
    }
  });
}

function promisesES6() {
  debugger;

  function mockAsyncTask(working) {
    // Return a Promise
    return new Promise((resolve, reject) => {
      // Mock async
      setTimeout(() => {
        if (working) {
          resolve({ result: { working: true } });
        } else {
          reject('Err message: xyz');
        }
      }, 1000);
    });
  }

  mockAsyncTask(true)
    .then(data => console.log('Mock Task Succeeded with data: ', data))
    .catch(err => console.log('Mock Task failed with err msg: ', err));
}

function closureWithTimeout() {
  debugger;

  var i = 0;
  for (i; i < 3; i++) {
    setTimeout(function() {
      console.log('counter value in inner function is ' + i);
    }, 1000);
    console.log('counter value in outer function is ' + i);
  }
  console.log('outer function finished');
}

function usingFetch() {
  debugger;

  //helpful reference: https://davidwalsh.name/fetch
  var url = 'http://localhost:3000/vouchers';

  //classic fetch - no config
  fetch(this.url)
    .then(resp => {
      console.log('Response received from fetch', resp);
      return resp.json();
    })
    .then(data => {
      console.log('Data received from fetch', data);
    });

  //fetch using config with custom header
  var data = { Text: 'Inserted by WebApi', Date: new Date() };

  var headers = new Headers();
  headers.set('Content-Type', 'application/json; charset=utf-8');

  var cfg = {
    method: 'POST',
    headers: headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(data)
  };

  fetch(url, cfg).then(resp => {
    console.log('Data received from fetch using config:');
    console.log(resp.json()); //Find Data in PromiseValue
  });
}

function postFetch() {
  debugger;

  let vouchersapi = 'https://localhost:5000http://localhost:3000/vouchers';

  let data = {
    Date: '01.01.2016',
    Amount: 100,
    Text: 'Posted Voucher',
    Paid: false
  };

  let options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  fetch(vouchersapi, options)
    .then(function(res) {
      if (res.ok) {
        return res.statusText;
      } else {
        throw Error(`Request rejected with status ${res.status}`);
      }
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function asyncAwait() {
  debugger;

  function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }

  async function doCalc(nbrA, nbrB) {
    var a = doubleAfter2Seconds(nbrA);
    var b = doubleAfter2Seconds(nbrB);
    return (await a) + (await b);
  }

  doCalc(10, 20).then(data => {
    console.log(`result is ${data}`);
  });
}

function usingFetchAwait() {
  debugger;
  async function getFetchedVouchers() {
    let response = await fetch('demos/vouchers.json');
    let voucher = await response.json();
    console.log('Data received using fetch - await');
    console.log(voucher);
  }

  getFetchedVouchers();
}
