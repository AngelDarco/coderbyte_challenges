export default function BracketMatcher(str: string) {
  const obj = { "(": 0, ")": 0 };
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element === "(") obj["("]++;

    if (element === ")") {
      obj["("]--;
      if (obj["("] < 0) return 0;
    }
  }
  return obj["("] === 0 ? 1 : 0;
}

console.log(BracketMatcher("(coder)(byte))")); // 0

console.log(BracketMatcher("(c(oder)) b(yte)")); // 1

console.log(BracketMatcher("the color re(d))()(()")); // 0

console.log(BracketMatcher("()()")); // 1

console.log(BracketMatcher("()()(((")); // 0
