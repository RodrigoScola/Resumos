function rot13(str) {
  let string = str.toUpperCase().split('');
  let newArr =[];

  for(let i = 0;i < string.length;i++) {
    if(string[i].match(/\w/)) {
      newArr.push(replacement(string[i]))
    } else {
      newArr.push(string[i]);
    }
  }

function replacement(char) {
  switch(char) {
    case 'A':
      char = 'N'
      break

    case 'B':
      char = 'O'
      break

    case 'C':
      char = 'P'
      break

    case 'D':
      char = 'Q'
      break

    case 'E':
      char = 'R'
      break

    case 'F':
      char = 'S'
      break

    case 'G':
      char = 'T'
      break

    case 'H':
      char = 'U'
      break

    case 'I':
      char = 'V'
      break

    case 'J':
      char = 'W'
      break

    case 'K':
      char = 'X'
      break

    case 'L':
      char = 'Y'
      break

    case 'M':
      char = 'Z'
      break

    case 'N':
      char = 'A'
      break

    case 'O':
      char = 'B'
      break

    case 'P':
      char = 'C'
      break

    case 'Q':
      char = 'D'
      break

    case 'R':
      char = 'E'
      break

    case 'S':
      char = 'F'
      break

    case 'T':
      char = 'G'
      break

    case 'U':
      char = 'H'
      break

    case 'V':
      char = 'I'
      break

    case 'W':
      char = 'J'
      break

    case 'X':
      char = 'K'
      break

    case 'Y':
      char = 'L'
      break

    case 'Z':
      char = 'M'
      break

  }
  return char;
}






  console.log(newArr.join(''))

  
    return newArr.join('');
  }
  
  rot13("SERR PBQR PNZC");