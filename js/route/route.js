app.config(["$routeProvider",function($routeProvider){
    $routeProvider
        .when('/main',{
            templateUrl:"views/mainview.html",
            controller:"main"
        })
        .when('/class',{
            templateUrl:"views/classview.html",
            controller:"class"
        })
        .when('/list',{
            templateUrl:"views/listview.html",
            controller:"list"
        })
        .when('/detail',{
            templateUrl:"views/detailview.html",
            controller:"detail"
        })
        .otherwise({
            redirectTo:'/main'
        });
}])