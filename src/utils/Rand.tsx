export const Rand = {
  num: Math.random,
  between: (max: number, min = 0, round = false, inclusive = false) => {
    let num = Math.random() * (max - min) + min;
    if (inclusive && round) num = Math.round(num);
    else if (round) num = Math.floor(num);
    return num;
  },
  choice<T>(...options: T[]) {
    options = options.flat() as T[];
    return options[Math.floor(Math.random() * options.length)];
  },
};
