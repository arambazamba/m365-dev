//# sourceURL=variables.js

function firstVariables() {
  debugger;

  console.log('Changed');
  //string
  var teststring = 'some string';
  console.log(teststring[7]); // shows letter 'r'
  console.log(teststring.charAt(5)); // shows letter 's'
  console.log(teststring.charAt(1)); //shows letter 'e'
  console.log(teststring.substring(1, 3)); //shows 'es'

  //array
  var arr = [1, 3, 4];
  console.log(arr.length); // shows 3
  arr.push(7); // appends 7 to end of array
  console.log(arr[3]); // shows 7

  //string operations
  var string1 = 'fat ';
  var string2 = 'cats';
  console.log(string1 + string2); // fat cats
}

function types() {
  debugger;

  var strJohn = typeof 'John'; //string
  var objJohn = typeof { name: 'John', age: 34 }; //object

  var str = String(123);
  str = (123).toString();
  var x = 9.656;
  x.toFixed(2); // returns 9.66
  parseInt('10.33'); // returns 10
}

function arrays() {
  debugger;

  var strArray = ['Alex', 'Soi', 'Giro'];
  var arr = new Array();
  arr.push(99);
  arr.push(8);
  arr.push(12);
  arr.push(88);

  arr.sort();

  arr.forEach(function(el) {
    console.log(el);
  });
  //Check sorting here - sort sorts alphabetically by default
  arr.sort(function(a, b) {
    return a - b;
  });

  arr.sort((a, b) => a - b);

  console.log('sorting again using a function');
  arr.forEach(function(el) {
    console.log(el);
  });
  var popped = arr.pop();
  console.log(
    'Removed item: ' +
      popped +
      ' - Current last item in array: ' +
      arr[arr.length - 1]
  );

  var nbrArray = [1, 2, 3, 4, 5];
  console.log(nbrArray.length);

  var female = ['Cecilie', 'Lone'];
  var male = ['Emil', 'Tobias', 'Linus'];
  var children = female.concat(male);
  console.log('All childs: ' + children.join(';'));
}

function paramPassing() {
  debugger;
  //How does the param that was passed behave?
  //How does the original variable behave?

  var nbr = 100;
  var name = 'alex';

  function prependDash(el) {
    el = '#' + el;
    return el;
  }

  var modNbr = prependDash(nbr);
  var modName = prependDash(name);

  function addNbr(el) {
    return (el += 1);
  }

  function addItem(el) {
    return (el.Value += 1);
  }

  var item = { Name: 'Item A', Value: 99 };

  var newItem = addItem(item);
  var newNbr = addNbr(nbr);
}

function aboutScope() {
  debugger;

  var x = 10;

  function math() {
    var pi = 3.14;
  }

  console.log(x);
  console.log(math.pi);

  var Person = function(name) {
    var Name = name; //not accessible from outside
    this.FirstName = name;
    this.sayName = function() {
      console.log(Name);
      console.log(this.Name); //undefined
      console.log(this.FirstName);
    };
  };

  //FirstName, LastName acessible, Name not
  var hugo = new Person('hugo');
  hugo.sayName();
  console.log(hugo.FirstName);
  console.log(hugo.Name);
}

function dialogs() {
  debugger;

  alert('Some text here');

  var isSure = confirm('Are you sure?');
  if (isSure) {
    console.log('you are sure');
  } else {
    console.log('you are not sure');
  }

  var amount = prompt('enter amount', 10);
  if (amount != null) {
    console.log('you entered ' + amount);
  }
}
