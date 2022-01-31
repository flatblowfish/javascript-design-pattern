/*
###########################################################
# js 中面向对象的三种写法
# 只有闭包中的私有变量是外部直接访问不到的，更加安全
###########################################################
*/
/*
 * 使用json创建对象
*/
var extent = {
    value: 0,
    call: function(){
        this.value++;
        console.log( this.value );
    }
};

extent.call(); // 输出：1
extent.call(); // 输出：2
extent.call(); // 输出：3
console.log(extent.value); // 输出：3
/*
 * 原型链创建对象
*/
var Extent = function(){
    this.value = 0;
};

Extent.prototype.call = function(){
    this.value++;
    console.log( this.value );
};

var extent = new Extent();

extent.call(); // 输出：1
extent.call(); // 输出：2
extent.call(); // 输出：3
console.log(extent.value); // 输出：3
/*
 * 闭包创建对象
*/
var extent = function(){
    var value = 0;
    return {
        call: function(){
            value++;
            console.log( value );
        }
    }
};

var extent = extent();
extent.call(); // 输出：1
extent.call(); // 输出：2
extent.call(); // 输出：3
console.log(extent.value); // 输出：undefined
