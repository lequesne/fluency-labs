(function() {
  'use strict';

  angular
    .module('fluencyLabs')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope, $rootScope) {

    console.log('init MainController');

    $rootScope.beakers = [
      {
        id: 1,
        title: 'Custom Scroll bar',
        categories: [
          'UI',
          'Scrollers'
        ],
        description: 'this is the description',
        preview: 'image.png',
        iframeURL: 'http://codepen.io/nicoptere/pen/QjrOYB/'
      },
      {
        id: 2,
        title: 'Drop down input',
        categories: [
          'inputs',
          'forms'
        ],
        description: 'this is the description',
        preview: 'image.png',
        iframeURL: 'http://codepen.io/nicoptere/pen/QjrOYB/'
      }
    ];

    $scope.filter = 'All';

    $scope.newCollection = {
      name: '',
      description: '',
      beakers: []
    };

    $scope.addOrRemoveBeaker = function(beaker){

      var beakerIndex = $.inArray(beaker, $scope.newCollection.beakers);

      if ( beakerIndex > -1 ) {
        //remove from collection
        console.log('remove from collection');
        $scope.newCollection.beakers.splice(beakerIndex, 1);

      } else {
        //add to collection
        console.log('add to collection');
        $scope.newCollection.beakers.push(beaker);
      }

      console.log($scope.newCollection.beakers);

    }

    $scope.isAdded = function(beaker){

      var beakerIndex = $.inArray(beaker, $scope.newCollection.beakers);

      if ( beakerIndex > -1 ) {
        return true;

      } else {
        return false;
      }

    }

  }
})();
