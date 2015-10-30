(function() {
  'use strict';

  angular
    .module('fluencyLabs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
