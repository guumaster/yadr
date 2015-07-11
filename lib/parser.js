
let parser = function(str) {

  let match = str.match(/(?:(?:(best|worst)(?: (\d+))? ),?(?: *of )?)?(?:(\d+)?d(\d+))( *(?: *(?:[+-] *\d+))+)*/);
  let [, type, take=1, dices=1, sides, mod=''] = match;
  take = Number(take);
  dices = Number(dices);
  sides = Number(sides);
  mod = (mod.match(/(\+ *(\d+)|- *\d+)/g)||[]).map((i) => i.replace(/ +/g, '')).reduce((a,b) => Number(a)+Number(b), 0);
  let sign = mod >= 0 ? '+' : '-';
  return { type, take, dices, sides, sign, mod };
};

function format({roll, plus, label, total, best, worst}) {
  plus = plus !== undefined && plus !== 0 ? `${plus>0?'+':''}${plus}` : '';
  let strLabel = `${label}`;
  let mod, typeLabel = '';

  if (best) {
    typeLabel = 'best';
    mod = best;
  }

  if (worst) {
    typeLabel = 'worst';
    mod = worst;
  }

  if (mod) {
    let modRoll = mod ? ` ${typeLabel}${mod.length > 1 ? ' ' + mod.length : ''} (${mod})` : '';
    return `${total} from ${strLabel}. [${modRoll}${plus||''} from (${roll})]`
  }

  if (roll.length === 1) {
    return `${total} from ${strLabel}. `;
  }

  return `${total} from ${strLabel}. [ from (${roll})${plus||''}]`;

}

export { parser, format };
