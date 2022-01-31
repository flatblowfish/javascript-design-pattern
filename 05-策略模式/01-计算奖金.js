/*
##########################################################
# 计算奖金，不同的奖金算法可以互相替换
##########################################################
*/
/*
 * 使用对象属性来标记不同的策略
*/
var strategies = {
    "S": function( salary ){
        return salary * 4;
    },
    "A": function( salary ){
        return salary * 3;
    },
    "B": function( salary ){
        return salary * 2;

    }
};
var calculateBonus = function( level, salary ){
    return strategies[ level ]( salary );
};

console.log( calculateBonus( 'S', 20000 ) ); // 输出：80000
console.log( calculateBonus( 'A', 10000 ) ); // 输出：30000
/*
 * 使用高阶函数来标记不同的策略
 * 在 JavaScript 这种将函数作为一等对象的语言里，策略模式已经融入到了语言本身当中，我们经常用高阶函数来封装不同的行为，并且把它传递到另一个函数中。
*/
var S = function( salary ){
    return salary * 4;
};
var A = function( salary ){
    return salary * 3;
};
var B = function( salary ){
    return salary * 2;
};
var calculateBonus = function( func, salary ){
    return func( salary );
};
console.log( calculateBonus(S, 20000 ) ); // 输出：80000
console.log( calculateBonus(A, 10000 ) ); // 输出：30000
