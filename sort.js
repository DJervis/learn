/**
 * js排序算法
 */

arr.sort(function(a, b){
  return a - b;
})

// 冒泡排序
function bubbleSort(arr) {
  var arr = arr || [];
  var len = arr.length, tmp, i, flag = false;
  while(len > 0) {
    for(i = 0; i < len - 1; i++) {
      if(arr[i] > arr[i+1]) {
        tmp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = tmp;
        flag = true;
      }
    }
    if(!flag) {
      break
    }
    len--;
  }
  return arr;
}

// 快速排序
function quickSort(arr) {
  var arr = arr || [];
  if(arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length/2),
    left = [],
    right = [],
    pivot = arr.splice(pivotIndex, 1)[0];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
}

// 插入排序
function insertSort(arr) {
  var arr = arr || [];
  var len = arr.length, tmp, i, j;
  for(i = 0; i < len; i++) {
    tmp = arr[i];
    for(j = i; j > 0 && arr[j-1] > tmp; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = tmp;
  }
  return arr;
}

// 希尔排序
function shellSort(arr) {
  var arr = arr || [];
  var len = arr.length, tmp, i, j, gap;
  for(gap = Math.floor(len/2); gap > 0; gap = Math.floor(gap/2)) {
    for(i = gap; i < len; i++) {
      for(j = i - gap; j >= 0 && arr[j] > arr[j+gap]; j -= gap) {
        tmp = arr[j];
        arr[j] = arr[j+gap];
        arr[j+gap] = tmp;
      }
    }
  }
  return arr;
}
