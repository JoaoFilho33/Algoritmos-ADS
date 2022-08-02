//Um sistema de equações lineares do tipo ///// , pode ser resolvido segundo mostrado abaixo 
//
//Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y

import {print, input} from '../io_utils.js'
const a = Number(input('Informe o coeficiente a: '))
const b = Number(input('Informe o coeficiente b: '))
const c = Number(input('Informe o coeficiente c: '))
const d = Number(input('Informe o coeficiente d: '))
const e = Number(input('Informe o coeficiente e: '))
const f = Number(input('Informe o coeficiente f: '))



const x = ((c * e) - (b * f)) / ((a * e) - (b * d))
const y = ((a * f) - (c * d)) / ((a * e) - (b * d))

print(`O valor de x é ${x} e o de y é ${y}`)

//const c = (a * x) + (b * y)
//const f = (d * x) + (b * y)
