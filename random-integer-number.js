function RandomIntegerNumber() {
  var hi, lo, sign = 1;

  do {
    hi = Math.random() * (1 << 26) | 0,
    lo = Math.random() * (1 << 26) | 0;

    if (hi >= (1 << 25)) {
      sign = -1;
      hi -= 1 << 25;
    }
  } while (hi === 0 && lo === 0);

  return sign * (hi * (1 << 26)) + lo;
}

module.exports = RandomIntegerNumber;
