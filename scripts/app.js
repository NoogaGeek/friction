'use strict';
/* global app:true */

var app = angular.module('angNewsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/models', {
        templateUrl: 'views/model/list.html',
        controller: 'ModelController'
      })
      .when('/models/create', {
        templateUrl: 'views/model/create.html',
        controller: 'ModelController'
      })
      .when('/models/:modelId', {
        templateUrl: 'views/model/view.html',
        controller: 'ModelController'
      })
      .when('/models/update/:modelId', {
        templateUrl: 'views/model/update.html',
        controller: 'ModelController'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/users/:username', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/users/edit/:username', {
        templateUrl: 'views/profile-edit.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FIREBASE_URL', 'https://friction-io.firebaseio.com/');
