'use strict'

module.exports = str => {
  const match = str.match(/(?:(?:(best|worst)(?: (\d+))? ),?(?: *(?:of|from) )?)?(?:(\d+)?d(\d+))( *(?: *(?:[+-] *\d+))+)*/)
  let [input, type, take, dices=1, sides, mod=''] = match
  take = Number(take) || undefined
  dices = Number(dices)
  sides = Number(sides)
  mod = (mod.match(/(\+ *(\d+)|- *\d+)/g)||[]).map((i) => i.replace(/ +/g, '')).reduce((a,b) => Number(a)+Number(b), 0)
  const sign = mod >= 0 ? '+' : '-'
  return { input, type, take, dices, sides, sign, mod }
}
