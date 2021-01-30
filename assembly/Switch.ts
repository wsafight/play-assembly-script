export function switchSurprise(a: i32): i32 {
  let response = -1;

  // Using a mix of braces and not using braces
  // to show that both syntaxes are supported here.
  switch (a) {
    case 1:
      response = 100;
      break;
    case 2: {   // Cases can also use braces
      response = 200;
      break;
    }
    case 3:
    // Fall Through to the next case
    case 4:
      response = 400;
      break;
    default: {
      response = 0;
    }
  }

  return response;
}
