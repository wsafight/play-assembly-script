class Animal<T> {
  static ONE: i32 = 1;

  static add(a: i32, b: i32): i32 {
    return a + b + Animal.ONE
  }

}

export function staticOne(): i32 {
  return Animal.ONE;
}

export function staticAdd(a: i32, b: i32): i32 {
  return Animal.add(a, b);
}
