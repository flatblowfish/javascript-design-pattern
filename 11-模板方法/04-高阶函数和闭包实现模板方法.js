/*
##########################################################
#  高阶函数和闭包实现模板方法
##########################################################
*/
var Beverage = function( param ){
    var boilWater = function(){
        console.log( '把水煮沸' );
    };
    var brew = param.brew || function(){
        throw new Error( '必须传递brew 方法' );
    };
    var pourInCup = param.pourInCup || function(){
        throw new Error( '必须传递pourInCup 方法' );
    };
    var addCondiments = param.addCondiments || function(){
        throw new Error( '必须传递addCondiments 方法' );
    };
    var F = function(){};
    F.prototype.init = function(){
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    };
    // 返回的是一个function对象，F.prototype.init引用了boilWater()、brew()这些函数。形成一个闭包，返回了一个有模板方法的对象。
    return F;
};
var Coffee = Beverage({
    brew: function(){
        console.log( '用沸水冲泡咖啡' );
    },
    pourInCup: function(){
        console.log( '把咖啡倒进杯子' );
    },
    addCondiments: function(){
        console.log( '加糖和牛奶' );
    }
});

var Tea = Beverage({
    brew: function(){
        console.log( '用沸水浸泡茶叶' );
    },
    pourInCup: function(){
        console.log( '把茶倒进杯子' );
    },
    addCondiments: function(){
        console.log( '加柠檬' );
    }
});
var coffee = new Coffee();
coffee.init();
var tea = new Tea();
tea.init();
