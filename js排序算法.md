 排序是数据结构主要内容，并不限于语言主要在于思想；大学曾经用C语言研究过一段时间的排序实现， 这段时间有空用JS再将排序知识点熟悉一遍。

### 冒泡排序 
 时间复杂度度为O（n²）
 原理：冒泡排序比较任何两个相邻的项，如果第一个项比第二个大，则交换它们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名。
 ```js
 function bubbleSort(arr) {
        if(arr.length<=1) return arr;
        let flag;// 设置一个flag判断排序是否完成
        let len = arr.length;
        let result = arr.slice();// 设置数组副本
        for (let i = 0; i < len - 1; i++) {
            flag = true;
            for (let j = 0; j < len - i - 1; j++) {
                if (result[j] > result[j + 1]) {
                    // ES6结构赋值很方便地交换两个数的值
                    [result[j],result[j+1]] = [result[j+1],result[j]];
                    flag = false;
                }
            }
            // 如果在某次的排序中没有出现交换的情况，
            // 那么说明在无序的元素现在已经是有序了，就可以直接返回了。
            if (flag) return result;
        }
    }
 ```
### 插入排序
最普通的排序算法。时间复杂度度为O（n²）
原理：插入排序每次排一个数组项，假定第一项已经排好序了，接着，它和第二项进行比较，如果第二项比第一项大则待在原位，否则插入到第一项之前，以此类推。
```js
function insertionSort(arr){
        let temp;
        let len = arr.length;
        let result = arr.slice() // 设置数组副本
        for(let i = 1;i<len;i++){// 假设第一个位置已经排好位置了
            temp = result[i];// 把当前数据保存下来
            j = i - 1;
            while(j>=0 && temp < result[j]){
                result[j+1] =result[j];
                j--;
            }
            result[j+1] =temp;// 找到合适的位置插入
        }
        return result;
    }
```
### 选择排序 
选择排序算法是一种原址比较排序算法。时间复杂度度为O（n²）
原理: 选择排序大致的思路是找到数据结构中的最小值并将其放在第一位，接着找到第二小的值并将其放在第二位，以此类推。
```js
function selectionSort(arr) {
        let indexMin;//设置一个最小值
        let len = arr.length;
        let result = arr.slice();// 设置数组副本
        for (let i = 0; i < len; i++) {
            indexMin = i;
            for (j = i + 1; j < len; j++) { // 内循环记录array[i]后面最小的index位置
                if (result[j] < result[indexMin]) indexMin = j;
            }
            if (indexMin !== i) [result[indexMin], result[i]] = [result[i], result[indexMin]];// ES6结构赋值很方便地交换两个数的值
        }
        return result;
    }
```
### 归并排序
归并排序是一种分治算法。其时间复杂度为O（nlogⁿ）
原理：将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
```js
function mergeSort(arr) {
  let result = arr.slice(0);

  // 递归调用合并函数
  function sort(arr) {
    let length = arr.length,
    mid = Math.floor(length * 0.5),
    left = array.slice(0, mid),
    right = array.slice(mid, length);

    if (length === 1) {
      return array;
    }
    return merge(sort(left), sort(right));
  }

  // 合并 两有序的数组
  function merge(left, right) {
    var result = [];

    while (left.length || right.length) {

      if (left.length && right.length) {

        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result;
  }

  return sort(result);
}
```
### 快速排序
快速排序也许是最常用的排序算法了，它的时间复杂度为O（nlogⁿ），且它的性能通常比其他的复杂度O（nlogⁿ）的排序算法要好。和归并排序一样，快速排序也使用分治的方法，将原始数组分为较小的数组（但它没有像归并排序那样将他们分割开）。
原理：快速排序简单来讲就是我们选定一个数，然后比它小的都放在它左边，大于等于它的都放在它右边，那么这个时候对这个数来讲他的位置已经排到了正确的地方了，接下来要做的就是在它的左右两边分别再进行类似操作。
```js
function quickSort(arr) {
        if (arr.length <= 1) return arr;
        let leftArr = [];
        let rightArr = [];
        let tempArr = arr.slice();
        let pivot = tempArr[0];// 定义一个基准
        // 实现排序并数组去重
        for (let i = 0; i < tempArr.length; i++) {
            if (tempArr[i] < pivot) leftArr.push(tempArr[i]);
            if (tempArr[i] > pivot) rightArr.push(tempArr[i]); 
            // 如果不想去重可以把if改成else重复的就会放在rightArr里
        }
        return [].concat(quickSort(leftArr),pivot,quickSort(rightArr));
    }
```