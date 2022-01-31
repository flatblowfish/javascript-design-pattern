/*
##########################################################
#  父类中加入一个钩子，父类中的模板方法会根据钩子来变换执行步骤，从而赋予子类来决定模板方法走向的能力
##########################################################
*/
var Beverage = function(){};
var Beverage = function(){};
Beverage.prototype.boilWater = function(){
    console.log( '把水煮沸' );
};
Beverage.prototype.brew = function(){
    throw new Error( '子类必须重写brew 方法' );
};
Beverage.prototype.pourInCup = function(){
    throw new Error( '子类必须重写pourInCup 方法' );
};
Beverage.prototype.addCondiments = function(){
    throw new Error( '子类必须重写addCondiments 方法' );
};
Beverage.prototype.customerWantsCondiments = function(){
    return true; // 默认需要调料
};
// 这就是父类中的模板方法，作为一个算法模板，指导子类中的算法步骤
Beverage.prototype.init = function() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    if (this.customerWantsCondiments()) { // 如果挂钩返回true，则需要调料
        this.addCondiments();
    }
}

// 冲泡咖啡
var CoffeeWithHook = function(){};
CoffeeWithHook.prototype = new Beverage();
CoffeeWithHook.prototype.brew = function(){
    console.log( '用沸水冲泡咖啡' );
};
CoffeeWithHook.prototype.pourInCup = function(){
    console.log( '把咖啡倒进杯子' );
};
CoffeeWithHook.prototype.addCondiments = function(){
    console.log( '加糖和牛奶' );
};
// 这个客户不想加调料
CoffeeWithHook.prototype.customerWantsCondiments = function(){
    return false;
};
var coffeeWithHook = new CoffeeWithHook();
coffeeWithHook.init();
