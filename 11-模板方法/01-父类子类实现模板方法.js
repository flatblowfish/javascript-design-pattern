/*
##########################################################
#  模板方法：冲泡饮料
#  咖啡和茶的冲泡过程是大同小异的
#  1） 原料不同。一个是咖啡，一个是茶，但我们可以把它们都抽象为“饮料”。
#  2） 泡的方式不同。咖啡是冲泡，而茶叶是浸泡，我们可以把它们都抽象为“泡”。
#  3） 加入的调料不同。一个是糖和牛奶，一个是柠檬，但我们可以把它们都抽象为“调料”。
##########################################################
*/
var Beverage = function(){};
Beverage.prototype.boilWater = function(){
    console.log( '把水煮沸' );
};
Beverage.prototype.brew = function(){}; // 空方法，应该由子类重写
Beverage.prototype.pourInCup = function(){}; // 空方法，应该由子类重写
Beverage.prototype.addCondiments = function(){}; // 空方法，应该由子类重写
// 这就是父类中的模板方法，作为一个算法模板，指导子类中的算法步骤
Beverage.prototype.init = function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
};
// 冲泡咖啡
var Coffee = function(){};
Coffee.prototype = new Beverage();

Coffee.prototype.brew = function(){
    console.log( '用沸水冲泡咖啡' );
};
Coffee.prototype.pourInCup = function(){
    console.log( '把咖啡倒进杯子' );

};
Coffee.prototype.addCondiments = function(){
    console.log( '加糖和牛奶' );
};
var Coffee = new Coffee();
Coffee.init();
// 冲泡柠檬茶
var Tea = function(){};
Tea.prototype = new Beverage();
Tea.prototype.brew = function(){
    console.log( '用沸水浸泡茶叶' );
};
Tea.prototype.pourInCup = function(){
    console.log( '把茶倒进杯子' );
};
Tea.prototype.addCondiments = function(){
    console.log( '加柠檬' );
};
var tea = new Tea();
tea.init();
