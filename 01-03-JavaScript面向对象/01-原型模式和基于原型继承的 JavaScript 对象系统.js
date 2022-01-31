var Plane = function(){
    this.blood = 100;
    this.attackLevel = 1;
    this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

var clonePlane = Object.create( plane );
console.log( clonePlane );  // 输出：Object {blood: 500, attackLevel: 10, defenseLevel: 7}
console.log( clonePlane.blood );

// 在不支持Object.create 方法的浏览器中，则可以使用以下代码：
Object.create = Object.create || function( obj ){
    var F = function(){};
    // 也就是 clonePlane 对象的属性从 obj 上找到
    F.prototype = obj;
    return new F();
}
