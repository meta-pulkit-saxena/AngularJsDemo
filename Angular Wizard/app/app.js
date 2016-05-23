// app.js
// create our angular app and inject ngAnimate and ui-router
// =============================================================================
app = angular.module('formApp', ['ngAnimate', 'ui.router'])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })

        // url will be /form/interests
        .state('form.type', {
            url: '/type',
            templateUrl: 'form-type.html'
        })

        // url will be /form/payment
        .state('form.register', {
            url: '/register',
            templateUrl: 'form-register.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form/profile');
})

// our controller for the form
// =============================================================================

