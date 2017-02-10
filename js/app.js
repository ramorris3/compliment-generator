var app = angular.module('loveApp', [])

.controller('MainCtrl', function($scope) {

  var names = [
    'Nicky',
    'Nick',
    'Coli',
    'My lover',
    'My wife',
    'My sweetheart',
    'Nicole'
  ];

  var adjectives = [
    'most beautiful',
    'loveliest',
    'most intelligent',
    'brightest',
    'sexiest',
    'foxiest',
    'most attractive',
    'most gorgeous',
    'freshest',
    'most incredible',
    'most bodacious',
    'only perfect',
    'most wonderful',
    'funniest',
    'most pleasant',
    'most caring',
    'most compassionate',
    'sweetest',
    'most inimitable',
    'most graceful',
    'most fulfilling',
    'most womanly',
    'most sparkling',
    'most luscious',
    'most irresistible',
    'most seductive',
    'whitest'
  ];

  var has_nouns = [
    'booty',
    'body',
    'hair',
    'smile',
    'curves',
    'face',
    'eyes',
    'hands',
    'legs',
    'laugh',
    'teeth'
  ];

  var is_nouns = [
    'fox',
    'mother',
    'wife',
    'lover',
    'companion',
    'girl',
    'woman',
    'artist',
    'GF',
    'friend',
    'sweetheart'
  ];

  var superlatives = [
    'to ever grace this planet.',
    'in the universe.',
    'ever.',
    'in history.',
    'I will ever see.',
    'I will ever have the pleasure to know.',
    'I will ever know.',
    'that has ever existed.',
    'in the history of forever.',
    'in America.',
    'in the world.',
    'in the room.'
  ];

  var randElem = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  // template: _name_ is/has the most _adjective_
  // _noun_ _superlative_

  $scope.generateCompliment = function() {
    if (Math.random() < 0.5) {
      $scope.compliment = randElem(names) + ' has the ' + randElem(adjectives)
        + ' ' + randElem(has_nouns) + ' ' + randElem(superlatives);
    } else {
      $scope.compliment = randElem(names) + ' is the ' + randElem(adjectives)
        + ' ' + randElem(is_nouns) + ' ' + randElem(superlatives);
    }
  };

  $scope.generateCompliment();

});
