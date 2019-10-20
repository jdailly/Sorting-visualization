export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const duplicateArr = array.slice();
  mergeSortHelper(array, 0, array.length - 1, duplicateArr, animations);
  return animations;
}

export function getBubbleSortAnimation(a) {
  const animations = [];
  if (a.length <= 1) return a;
  var swapp;
  var n = a.length - 1;
  var x = a;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i] > x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        animations.push([i, i + 1]);
        animations.push([i, i + 1]);
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  duplicateArr,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(duplicateArr, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(duplicateArr, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, duplicateArr, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  duplicateArr,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (duplicateArr[i] <= duplicateArr[j]) {
      animations.push([k, duplicateArr[i]]);
      mainArray[k++] = duplicateArr[i++];
    } else {
      animations.push([k, duplicateArr[j]]);
      mainArray[k++] = duplicateArr[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, duplicateArr[i]]);
    mainArray[k++] = duplicateArr[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, duplicateArr[j]]);
    mainArray[k++] = duplicateArr[j++];
  }
}


function swap(items, leftIndex, rightIndex, animations) {

  animations.push([leftIndex, rightIndex]);
  animations.push([leftIndex, rightIndex]);
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;

}


function partition(items, left, right, animations) {
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j, animations);
      i++;
      j--;
    }
  }
  return i;
}

export function getQuickSortAnimation(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(items, left, right, animations) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right, animations);
    if (left < index - 1) {
      quickSortHelper(items, left, index - 1, animations);
    }
    if (index < right) {
      quickSortHelper(items, index, right, animations);
    }
  }
  return animations;

}
