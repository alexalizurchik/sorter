class Sorter {
  constructor() {
    this.arr = [];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indOfElemNeedToSort) {
    let elemNeedToSort = [];

    for (let i = 0; i < indOfElemNeedToSort.length; i++) {
      elemNeedToSort.push(this.arr[indOfElemNeedToSort[i]]);
    }

    if (this.compareFunction) {
      elemNeedToSort.sort(this.compareFunction);
    } else {
      elemNeedToSort.sort(compareNumbers);
    }

    indOfElemNeedToSort.sort(compareNumbers);

    for (let i = 0; i < indOfElemNeedToSort.length; i++) {
      this.arr[indOfElemNeedToSort[i]] = elemNeedToSort[i];
    }

    return this.arr;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

function compareNumbers(a, b) {
  return a - b;
}

module.exports = Sorter;
