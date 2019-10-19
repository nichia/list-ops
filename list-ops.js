//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.list = list;
  }

  append(appList) {
    const newList = [...this.list];
    console.log(`append`, this.list, appList.list, newList);
    for (let ele of appList.list) {
      newList.push(ele);
    }
    console.log(newList);
    return new List(newList);
  }

  concat(appList) {
    const newList = [...this.list];
    console.log(`concat`, this.list, appList.list, newList);
    for (let ele of appList.list) {
      newList.push(ele);
    }
    console.log(newList);
    return newList;
  }

  filter() {}

  map() {}

  length() {}

  foldl() {}

  foldr() {}

  reverse() {}
}
