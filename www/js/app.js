// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ksSwiper','ionic'])

  .run(function($ionicPlatform,$http) {
    $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });


  
     $http ({
           method: 'jsonp',
           url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=g&language…ponents=country:VN&sensor=true&key=AIzaSyATOX9rL_ULV-Q_e2kImu9wYgK2AToOteQ'
         }).then(function successCallback(response) {
  
           console.log(response);
         })
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab', {
          url: '/tab',
          abstract: true,
        templateUrl: 'templates/tabs.html',
      })

      .state('tab.profile', {
          url: '/profile',
          views:{
              'profile':{
                  templateUrl: 'templates/profile.html',
                  controller: 'ProfileCtrl'
              }
          }
      })

      .state('tab.instagram', {
          url: '/instagram',
          views: {
              'instagram': {
                  templateUrl: 'templates/instagram.html',
                  controller: 'InstagramCtrl'
              }
          }
      })

    $urlRouterProvider.otherwise('/tab/profile');
  })
