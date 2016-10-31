(function() {

  'use strict';

  angular
    .module('myApp.components.conversations', [])
    .controller('conversationsController', conversationsController);

  conversationsController.$inject = ['conservationsService'];

  function conversationsController(conversationsService) {
    /*jshint validthis: true */
    console.log('conversationsController hit');
    this.test = 'conversationsController hit'

    // this.suffix = '?limit=20&offset=20'
    conversationsService.getConversations()
    .then((res) => {
      console.log(res);
      this.convos = res;
    });
  }

})();

/*
  1. members.controllers passes string to concat onto end of API string
*/
