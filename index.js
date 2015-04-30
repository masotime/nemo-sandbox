'use strict';

var Nemo = require('nemo');

// need nemo var because it is referenced in callback - talk about bad APIs
var nemo = Nemo({
  driver: {
    browser: 'ie'
  },
  'data': {
    'baseUrl': 'https://www.paypal.com'
  }
}, function (err) {
  // always check for errors!
  if (err) {
    return console.log('Error during Nemo setup', err.stack);
  }

  nemo.driver.get(nemo.data.baseUrl);
  nemo.driver.getCapabilities().
    then(function (caps) {
      console.info('Nemo successfully launched', caps.caps_.browserName);
    }).then(function() {
  	  //return nemo.driver.quit();  	
    }).then(function() {
    	console.log('successful completion');
    }, function (e) {
    	console.error(e.stack);
    });
  
});