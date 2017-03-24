angular.module('app')
    .config(function($stateProvider, $urlRouterProvider, AccessLevels) {
        $stateProvider
            .state('anon', {
                abstract: true,
                data: {
                    access: AccessLevels.anon
                },
                views: {
                    'navbar@': {
                        templateUrl: 'anon/navbar.html',
                        controller: 'NavbarController'
                    }
                }
            })
            .state('anon.home', {
                url: '/',
                views: {
                    'content@': {
                        templateUrl: 'anon/home.html',
                        controller: 'MainController'
                    }
                }
            })
            .state('anon.login', {
                url: '/login',
                views: {
                    'content@': {
                        templateUrl: 'anon/login.html',
                        controller: 'LoginController'
                    }
                }
            })
            .state('anon.tokyo', {
                url: '/tokyo',
                views: {
                    'content@': {
                        templateUrl: 'anon/tokyo.html',
                        controller: 'tokyoController'
                    }
                }
            })
            .state('anon.bresil', {
                url: '/bresil',
                views: {
                    'content@': {
                        templateUrl: 'anon/bresil.html',
                        controller: 'bresilController'
                    }
                }
            })
            .state('anon.groenland', {
                url: '/groenland',
                views: {
                    'content@': {
                        templateUrl: 'anon/groenland.html',
                        controller: 'groenlandController'
                    }
                }
            })
            .state('anon.paris', {
                url: '/paris',
                views: {
                    'content@': {
                        templateUrl: 'anon/paris.html',
                        controller: 'parisController'
                    }
                }
            });
        $stateProvider
            .state('user', {
                abstract: true,
                url: '/user',
                views: {
                    'navbar@': {
                        templateUrl: 'user/navbar.html',
                        controller: 'NavbarController'
                    }
                },
                data: {
                    access: AccessLevels.user
                }
            })
            .state('user.dashboard', {
                url: '/dashboard',
                views: {
                    'content@': {
                        templateUrl: 'user/dashboard.html',
                        controller: 'DashboardController'
                    }
                }
            })
            .state('user.profile', {
                url: '/profile',
                views: {
                    'content@': {
                        templateUrl: 'user/profile.html',
                        controller: 'ProfileController'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');
    });
