/*
##########################################################
# 在 JavaScript 中使用原型继承来模拟传统的类式继承时
# 并没有编译器帮助我们进行任何形式的检查
# 我们也没有办法保证子类会重写父类中的“抽象方法”，只能选择在运行期，抛出Error来检查。
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
// Tea.prototype.addCondiments = function(){
//     console.log( '加柠檬' );
// };
var tea = new Tea();
tea.init();
