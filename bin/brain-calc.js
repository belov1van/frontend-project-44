import readlineSync from 'readline-sync';
console.log('What is the result of the expression');
export function calculate(expression) {
// Функция дл вычисления выражения с использованием eval()
  try {
    // Значение expression передается функции eval(),
    // которая вычисляет его и возвращает результат
    var result = eval(expression);
    return result;
  } catch (error)
}
