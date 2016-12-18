
(function(){
var app = angular.module('store', [ ]);

app.controller('StoreController', function(){
  this.products = gems;
});

var gems =[
{
name: 'Dodechathedron',
price: 3.21,
description: ' only one ',
canPurchase: true

},
{
  name: 'Crystal gem',
  price: 10.21,
  description: ' shine on. ',
  canPurchase: true
},
{
  name:'Quezal',
  price: 1.24,
  description: "feather",
  canPurchase: true
}


];
})();
