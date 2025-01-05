const calculadora = require("../../models/calculadora")

test ("somar 2 + 2, deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4)
})

test ("somar 5 + 100, deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105)
})

test ("somar cafe + 100, deveria retornar 105", () => {
  const resultado = calculadora.somar(10,  "100");
  expect(resultado).toBe("Erro")
})

test ("multiplicar 2 * 3 = 6", () => {
  const resultado = calculadora.x (2, 3);
  expect (resultado).toBe (6);
})

test ("multiplicar azeite * 100", () => {
  const res = calculadora.x ("azeite", 100);
  expect(res).toBe("Erro")
})