 (function() {
     function CollectionCtrl() {
       this.albums = Fixtures.getCollection(12);
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();