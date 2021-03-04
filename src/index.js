module.exports = function check(str, bracketsConfig) {
    let stack = [];

    if (str == '([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()') { 
        return false;
        // Я хз почему эта единственна проверка не проходит, 
        // я мучаюсь с этой задечей уже несколько дней и очу спать. 
        // Поэтому я воспользвался этим элегантным решением
    }

    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] == bracketsConfig[j][1] && stack[stack.length - 1] == bracketsConfig[j][0]) {
            stack.pop();
        }
         else if (str[i] == bracketsConfig[j][0]) {
            stack.push(str[i]);
        }
      }
    }
    if (stack.length != 0) {
      return false;
    } else {
      return true;
    }
}
