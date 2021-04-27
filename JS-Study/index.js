
// 严格模式
// 'use strict'
// 匿名自我调用的函数
(function () {
    var x = 'hello!!!'
    console.log('这是自调函数' + x);
})();

// 自执行函数
// for (let index = 0; index < 5; index++) {
//     // (function(i){
//     //     setTimeout(() => {
//     //        console.log('current index = ' + i); 
//     //     }, index * 100);
//     // })(index);
//     void function(i){
//         setTimeout(() => {
//             console.log('current index = ' + i); 
//          }, index * 100);
//     }(index)
// }

// document.querySelector('html').onclick = function(){
//     alert('点击了html');
// }

// ※※※※※※※ this指的是：调用函数的那个对象  ※※※※※※※

document.querySelector('p').onclick = pGesture;

function pGesture(e) {
    console.log('gesture ===' + JSON.stringify(e));
}

let tit = document.querySelector('h2');
tit.textContent = '这个是标题';

let myImage = document.querySelector('img');
// let myImage2 = document.getElementsByClassName('img_view')
// console.log(myImage2.src = '');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    console.log('点击了');
    if (mySrc === '../img/pic-2.png' || mySrc.match('pic-2')) {
        myImage.setAttribute('src', '../img/pic-1.png');
    } else {
        myImage.setAttribute('src', '../img/pic-2.png');
    }
    // window.alert("弹出提示");

    // alert("any");


}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h2')
myButton.onclick = setUserName;

// DODO: 存储方式cookie、localstorage、sessionstorage、sql、cache Manifest
function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    } else {
        // 存储方式1
        localStorage.setItem('name', myName);
        var name = localStorage.getItem('name');

        myHeading.textContent = 'Mozilla,' + myName;
    }
    // 存储方式2
    localStorage.userId = '123';
    console.log('用户ID是 === ' + localStorage.userId);

    // localStorage.removeItem('userId');
    // localStorage.clear();
    // localStorage.key('123');

    for(var i=0;i<localStorage.length;i++){  
        var sitename = localStorage.key(i);  
        var siteurl = localStorage.getItem(sitename);  
        console.log('localStorage key=' + sitename + 'value=' + siteurl);
    }  

    // 临时存储 页面关闭后自动删除
    // sessionStorage

}

// html中写定方法，js中不需要再次查找元素并指定方法
function btnClick() {
    console.log('映射按钮');
}

var person =
{
    "firstname": "Hohn",
    "lastname": "Doe",
    id: 5566,
    fullName: function () {
        return this.firstname + " " + this.lastname;
    }
};
document.write(person.firstname + "<br>");
document.write(person["lastname"] + "<br>");
document.write(person.fullName());

document.write("<br><br> 循环：标签方式 <br>");

var cars = ["BMW", "Volvo", "Saab", "Ford"];
hh:
{
    document.write(cars[0] + "<br>");
    document.write(cars[1] + "<br>");
    document.write(cars[2] + "<br>");
    break hh;
    document.write(cars[3] + "<br>");
    document.write(cars[4] + "<br>");
    document.write(cars[5] + "<br>");
}

function checkNanInput() {
    var inpuVal = document.getElementsByClassName("Nan_Input")[0].value;
    var errInfo = document.getElementsByClassName('div_info')[0];
    //    getElementById()
    try {
        if (inpuVal == "") {
            throw "值是空的"
        }
        else if (isNaN(inpuVal)) {
            throw '不是数字'
        }
        else {
            var nm = Number(inpuVal);
            if (nm > 10) {
                throw '数字大于10'
            } else if (nm < 0) {
                throw '数字小于0'
            }
        }
    } catch (error) {
        errInfo.innerHTML = '错误' + error + '.';
    }
    finally {
        // errInfo.innerHTML = inpuVal;
    }
}

// 在 JavaScript 中, 对象 使用 名字作为索引,JavaScript 会把数组重新定义为标准对象{}。
var new_person = [];
new_person["firstName"] = "John";
new_person["lastName"] = "Doe";
new_person["age"] = 46;
document.write(JSON.stringify(new_person.firstName))
// var obj = JSON.parse(text); 

function validateForm() {
    var nameEle = document.forms['myForm']['fname'];
    var nameVa = nameEle.value;
    if (nameVa == '' || nameVa == null || typeof nameVa == undefined) {
        alert(nameEle.placeholder)
        return false;
    }
}

// 未引入jQuery
// $.get("https://www.runoob.com/try/ajax/demo_test.php",function(data,status){
//     alert("数据: " + data + "\n状态: " + status);
// });

// 异步操作
// .then() 可以将参数中的函数添加到当前 Promise 的正常执行序列，.catch() 则是设定 Promise 的异常处理序列，.finally() 是在 Promise 执行的最后一定会执行的序列。 
// .then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列：
new Promise(function (resolve, reject) {
    var a = 0;
    var b = 1;
    if (b == 0) {
        reject('数据异常');
    } else {
        resolve(a / b);
    }
}).then(function (value) {
    console.log('a / b = ' + value);
    return '333'
}).then(function (value2) {
    console.log('value2 = ' + value2);
}).catch(function (err) {
    console.log('catch' + err);
}).finally(function () {
    console.log('End');
});
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("First");
//         resolve();
//     }, 1000);
// }).then(function () {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Second");
//             resolve();
//         }, 4000);
//     });
// }).then(function () {
//     setTimeout(function () {
//         console.log("Third");
//     }, 3000);
// });

/*
    简化以上代码
    这种返回值为一个 Promise 对象的函数称作 Promise 函数，它常常用于开发基于异步操作的库。
*/
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('current message = ' + message);
            resolve();
        }, delay);
    })
}

print(1000, 'first').then(() => {
    return print(4000, 'second');
    // 可以通过throw跳转catch终端之后的then执行
    // throw 'error'
}).then(() => {
    print(3000, 'thrid');
});

// 最简化方法
async function asyncFunc() {
    // await print(1000, '1');
    // await print(4000, '2');
    // await print(3000, '3');

    // try {
    //     await new Promise(function (resolve, reject) {
    //         throw "Some error"; // 或者 reject("Some error")
    //     });
    // } catch (err) {
    //     console.log(err);
    //     // 会输出 Some error
    // }

    let value = await new Promise(
        function (resolve, reject) {
            resolve("Return value");
        }
    );
    console.log(value);
}
asyncFunc();

var maxNum = findMax(1, 2, 3, 4, '10', 5, 5, 6, 1);
console.log('finmax = ' + maxNum);

function findMax() {
    // arguments 所有参数数组
    var i, max = arguments[0];
    if (arguments.length < 2) {
        return max;
    }

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// 闭包
var num = 15;
var fn1 = function (x) {
    if (x > num) {
        console.log('闭包当前值 = ' + x);
    }
}
/*
    函数fn1作为参数传入立即执行函数中，在执行到fn2(30)的时候，30作为参数传入fn1中
    这时候if(x>num)中的num取的并不是立即执行函数中的num，
    而是取创建函数的作用域中的num这里函数创建的作用域是全局作用域下，所以num取的是全局作用域中的值15，
    即30>15，打印30
*/
void function (fn2) {
    var num = 100;
    fn2(30);
}(fn1);

/*
 * 参数：
 *     obj：要绑定事件的对象
 *     eventStr：事件(注意：这里不要on)
 *      callback：回调函数
 */
function bind(obj, eventStr, callback) {
    if (obj.addEventListener) {
        //大部分浏览器
        obj.addEventListener(eventStr, callback, false);
    } else {
        //IE8及以下
        obj.attachEvent("on" + eventStr, function () {
            //在匿名函数中调用回调函数
            callback.call(obj);
        });
    }
}

function Students(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
    this.outputInfo  = function() {
        document.write('name = ' + this.name +  '<br\>' + 'height = ' + this.height + '<br\>');
    }
}

// JavaScript prototype（原型对象）
function SomeOne(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
//    方式1 给构造器添加新的属性或者方法
// 不可直接使用SomeOne.nationality 不生效
SomeOne.prototype.nationality = "English";
SomeOne.prototype.fullName = function(){
    return this.firstName + " " + this.lastName + " " + this.nationality; 
}

// //  方式2
var mother = new SomeOne("jiang", "wenying", 60, "black");
// mother.nationality = 'Chinese';
console.log(mother.fullName());

var d3 = new Date(79,5,24,11,33,0)
console.log('日期是' + d3);

// 定时器
var timers = setInterval(() => {
    console.log('yyyyyyy');
}, 2000);

setTimeout(() => {
    clearInterval(timers);
    // clearTimeout(timeout);
}, 5000);

// cookie
document.cookie = '{username:hwf}';
// document.cookie = "''; expires=Thu, 01 Jan 1970 00:00:00 GMT";
var x = document.cookie;
console.log('current cookie is ' + x);


// 创建元素
var para = document.createElement("p");
var node = document.createTextNode("这是一个新段落。");
para.appendChild(node);
// para.innerHTML = "这是一个新段落。";
var element = document.getElementById("div1");
element.appendChild(para);

// 删除元素
// var child=document.getElementById("p1");
// child.parentNode.removeChild(child);

// 替换元素
// var parent=document.getElementById("div1");
// var child=document.getElementById("p1");
// var para=document.createElement("p");
// var node=document.createTextNode("这是一个新的段落。");
// para.appendChild(node);
// parent.replaceChild(para,child);

// onload = function(){
//     console.log('123123123123123123');
// }

// a标签数量
// document.anchors.length;

// form标签数量
// document.forms.length;

// img标签数量
// document.images.length;

// 获取cookie
// document.write(document.cookie);

// 获取域名
// document.write(document.domain);

// 获取完整的URL
// document.write(document.URL);

// ？id="123" 不确定对不对
// document.write(document.URL.search);

// 获取最后一次修改时间
// document.write(document.lastModified);

// 获取引用地址
// document.write(document.referrer);

// 打开输入流，并修改文档
/*
 function createDoc(){
	var doc=document.open("text/html","replace");
	var txt="<!DOCTYPE html><html><body>学习 HTML DOM 很有趣!</body></html>";
	doc.write(txt);
	doc.close();
}
*/ 

var fruist = ["Banana", "Orange", "Apple", "Mango", "111"];
var x = fruist.entries();
for (let index = 0; index < 5; index++) {
    var arr = x.next().value;
    console.log(arr);
    console.log(arr[1]);
}