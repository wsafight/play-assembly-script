class MyValue {
  value: i32;

  constructor(value: i32) {
    this.value = value;
  }
}

// Using a class type here, as some types are not nullable
function getMyValue(isAble: boolean): MyValue | null {
  let myValue = new MyValue(24);

  if (isAble) {
    return myValue;
  } else {
    return null;
  }
}

export function positiveAddWithMyValue(a: i32): i32 {
  let myValue = getMyValue(a > 0);
  if (myValue == null) {
    return -1;
  } else {
    return a + myValue.value;
  }
}