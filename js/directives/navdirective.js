angular.module("mynav",[])
    .directive('navbtn',[function(){
        return{
            restrict:"AE",
            replace:'true',
            templateUrl:'views/navView.html',
            scope:true,
            controller:function($scope){
                var temp = 0;
                $scope.contShow = false;
                $scope.caidanShow = false;
                $scope.setShow = function(e) {
                    $scope.contShow=true;
                    if (e.target.nodeName.toLowerCase() == 'li') {
                        $scope.btnIndex = e.target.dataset.index;
                        $scope.caidanShow = true;
                    }
                };
                $scope.setHide = function(e){
                    $scope.contShow=false;
                    temp = $scope.btnIndex;
                    $scope.btnIndex = -1;
                    $scope.caidanShow = false;
                };

                $scope.setCont = function () {
                    $scope.contShow=true;
                    $scope.btnIndex = temp;
                    $scope.caidanShow = true;
                };
                $scope.nav = {
                    cont:[
                        {
                            src:"img/guopin.png",
                            name:"果品",
                            caidan:[
                                "苹果","香蕉","橘子","樱桃","草莓"
                            ]
                        },
                        {
                            src:"img/shucai.png",
                            name:"蔬菜",
                            caidan:[
                                "西红柿","白菜","黄瓜","茄子","芹菜","西蓝花"
                            ]
                        },
                        {
                            src:"img/guwu.png",
                            name:"谷物",
                            caidan:[
                                "大米","小米","玉米面","大豆","面粉"
                            ]
                        },
                        {
                            src:"img/qindan.png",
                            name:"禽蛋",
                            caidan:[
                                "鸡蛋","鸭蛋","鹌鹑蛋","鹅蛋"
                            ]
                        },
                        {
                            src:"img/qita.png",
                            name:"其他",
                            caidan:[
                                "豆制品","香油","醋","酱油","食用盐"
                            ]
                        }
                    ]
                };
            }
        }
    }])