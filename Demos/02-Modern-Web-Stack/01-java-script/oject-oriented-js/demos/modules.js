//# sourceURL=modules.js
debugger;

//Immediately-Invoked Function Expression (IIFE)

var PersonGlobal = {
  name: null,
  init: function(personName) {
    this.name = personName;
  },
  sayName: function() {
    console.log("Hi, i am " + this.name);
  }
};

(function() {
  var Person = {
    name: null,
    init: function(personName) {
      this.name = personName;
    },
    sayName: function() {
      console.log("Hi, i am " + this.name);
    }
  };

  debugger;
  Person.init("Josef");
  Person.sayName();
})();

//Revealing Module Pattern - Encapsulation with public interface
debugger;

var worker = (function(personName) {
  var name = personName;
  var wealth = 0;
  console.log("A new worker was born!");
  console.log("I am " + name + " & my current balance is " + wealth);

  function writeBalance() {
    console.log("my current balance equals " + wealth);
  }

  return {
    workfor: function(amount) {
      wealth += amount;
      writeBalance();
    }
  };
})("Franz");

debugger;
worker.workfor(1000);
console.log("Trying to acces wealth: " + worker.wealth);

//Namespaces
debugger;

var VoucherEditor = {};
VoucherEditor.Modul1 = (function() {
  console.log("Modul1 in Namespace VoucherEditor");
})();
VoucherEditor.Modul2 = (function() {
  console.log("Modul2 in Namespace VoucherEditor");
})();

//Extensible Modules

/* Basic Module */
var Modul = (function() {
  /* ... private objects ... */

  return {
    methode1: function() {
      console.log("methode 1 from module");
    }
  };
})();

/* extending the basic module */
(function(modul) {
  /* ... private objects ... */
  /* extending the base module */
  modul.methode2 = function() {
    console.log("methode 2 from module");
  };
})(Modul);

debugger;
Modul.methode1();
Modul.methode2();
