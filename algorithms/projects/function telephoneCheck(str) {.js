//i am sorry for this, this is the worst code that ive written and i spent a day on it :sadge:
function telephoneCheck (str) {
// to see if the number is long enough to be a correct phone number
    let stripped = str.replace(/[^0-9]/g,'');
//defaulting every possibility to write the number, including - and ()
    let phoneNum = str.replace(/\s[-]/g,'')
//to see if we have complete parenthesis and not just one of them
    var arr = [];
//if a number is written with ( in the beginning and ) in the end
if (phoneNum[0] == '(' && phoneNum[phoneNum.length -1] == ')') {
        return false
      }
//to see if the number has a country code and if the code is 1
    else if (stripped.length == 11) {
      if (phoneNum[0] == '1') {
        if (balanced(phoneNum)) {
            return true
        } else {
            return false
        }
      } else {
        return false;
      }
//this is if the number doesnt have a country code
    } else if (stripped.length == 10) {
    if (balanced(phoneNum)){
        return true
    } else {
        return false
    }
    } else {
      return false
    }
    function balanced (num) {
//to see if we have both parenthesis and not just one
        for(let i = 0;i < num.length;i++) {
            if (num[i] == ")" ) {
                arr.push(num[i]) 
            } 
            else if (num[i] =="(") {
              arr.push(num[i])
            }
//if the number has more than one parenthesis 
        }  if (arr.length >= 3){
          return false
//to make sure that the number of parenthesis is even
        }else if (arr.length % 2 ==0 ) {
          return true;
        }
    }
}
telephoneCheck('(555)5(55?)-5555')
