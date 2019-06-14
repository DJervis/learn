/*
1、关系型数组转换成树形结构对象
关系型数组
    var obj = [
        { id:3, parent:2 },
        { id:1, parent:null },
        { id:2, parent:1 },
    ]
期望结果：
    o = {
      obj: {
        id: 1,
        parent: null,
        child: {
          id: 2,
          parent: 1,
          child: {
              id: ,3,
              parent: 2
          }
        }
      }
    }
*/
function treeObj(obj) {
  return obj.sort((a, b) => b.parent - a.parent)
      .reduce((acc, cur) => (acc ? { ...cur, child: acc } : cur));
}

/*
2、输入一段只含有数字和字符串的字符串，则取出各个数字，获得最大值。
*/
var str = 'fjdkal542fjd8fkds1jk8kk90';
function getMaxnum(str) {
  var arr = str.match(/\d+/g)
  return Math.max.apply(null, arr)
}
console.log(getMaxnum(str))

/* 
3、输入n个数字，这n个数字不能重复，如果有连续的数字，则使用类似1-4的方法表示，没有，则直接表示
*/
var arr = [1,2,3,4,6,7,8,9,10,14,16,19,11,13];
function line(arr) {
  var result = [];
  var tmp;
  // 连续的为一数组，不连续的为一数组
  /*while(tmp = arr.shift()) {
    if(result.length == 0) {
      result.push([tmp]);
      continue;
    }
    var cur = result[result.length-1];
    if(tmp == cur[cur.length-1]+1) {
      // 连续时
      cur.push(tmp)
    } else {
      result.push([tmp])
    }
  }*/
  var tmpArr = [];
  arr.reduce(function(acc, cur){
    tmpArr.push(acc)
    if(cur-acc != 1) {
        result.push(tmpArr)
        tmpArr = []
    }
    return cur
  })
  console.log(result)
  for(var i=0; i<result.length; i++) {
    if(result[i].length >= 3) {
      var len = result[i].length;
      result[i] = result[i][0]+'-'+result[i][len-1];
    } else {
      result[i] = result[i].join(',');
    }
  }
  console.log(result.join(','))
  return result.join(',')
}
line(arr)

/*
输入：
1、第一行为公路划分的段数N
2、接下来N行，每行三个正整数，分别是起始点，终止点（前后两段一定保证是连续的），和限速值（单位：公里/小时）
3、紧接是要计算的起始点A，和终止点B

输出：
1、输出为一行，即从A到B需要的最少时间（单位：小时）,精确到小数点后两位
*/
/**
 * 计算最短时间
 * info：记录每段起始点、终点、限速的数组
 * start：起始点 20
 * end：终止点 60
 */
var info = [
  [0, 30, 10],
  [30, 40, 20],
  [40, 80, 20],
  [80, 100, 5]
];
function getMinTime(info, start, end) {
  var startId, endId, result = 0;
  if(start < 0 || start > 100 || end > 100) {
    return '超出范围'
  }
  info.forEach((item, idx) => {
    if(start > item[0]) startId = idx;
    if(end > item[0]) endId = idx;
  })
  // console.log(startId, endId)
  info.forEach((item, idx) => {
    if(idx > startId && idx < endId) {
      result += (item[1]-item[0])/item[2]
    }
  })
  // console.log(result)
  result += (info[startId][1] - start) / info[startId][2];
  result += (end - info[endId][0]) / info[endId][2];
  
  result = result.toFixed(2);
  // console.log(result)
  return result
}
getMinTime(info, 20, 60)

/* js实现栈 出栈 入栈等 
  入栈：NumberStack.push(num) 、出栈：NumberStack.pop() 、找出栈中第n大的数：NumberStack.max(n)
*/
function NumberStack() {
  this.stack = []; //存储栈
  this.maxStack = []; //辅助栈，从小到大的排序
}
NumberStack.prototype.push = function(num){
  if(Object.prototype.toString.call(num)!="object Number") return false;
  this.stack.push(num);
  if(!this.maxStack.length) {
    this.maxStack.push(num)
  } else {
    let len = this.maxStack.length;
    for(let i=0; i<len; i++) {
      if(num < this.maxStack[i]) {
        this.maxStack.splice(i, 0, num);
        break;
      }
    }
  }
}
NumberStack.prototype.pop = function(){
  let num = this.stack.pop();
  this.maxStack.splice(this.maxStack.indexOf(num), 1);
}
NumberStack.prototype.max = function(n){
  if(n < 1 || n > this.maxStack.length) return false;
  return this.maxStack[this.maxStack.length - n];
}

/** jS编写一个求和函数sum，使输入sum(2)(3)或输入sum(2,3)，输出结果都为5;然后再扩展sum(2)(3)(4), sum(2,3,4), sum(2,3)(4)等*/
function sum() {
  var num = arguments[0];
  if(arguments.length == 1) {
    return function(sec) {
      return num + sec;
    }
  } else {
    var num = 0;
    for(var i=0; i<arguments.length; i++) {
      num += arguments[i];
    }
    return num;
  }
}

/** 函数柯里化 */
var curry = function(fn) {
  var args = [].slice.call(arguments, 1);
  return function() {
    var newArgs = args.concat([].slice.call(arguments));
    if(newArgs.length < fn.length) {
      return curry.call(this, fn, ...newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}
