const app = angular.module('angularApp', [])

angular.module('angularApp')
    .controller('hiController', ['$scope', function($scope, $rootScope) {
        
        $scope.name = ''

        $scope.sayHello = function() {
            $scope.greeting = 'Hello ' + $scope.name
        }
    }])
    .controller('itemController', ['$scope', function($scope) {
        
        $scope.groceryList = function() {
            $scope.items = ['Avocados', 'Bananas', 'Coffee', 'Dairy', 'Eggs', 'Fish'];
        }
    }]);
