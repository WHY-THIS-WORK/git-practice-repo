const bmiCalc = (h, w) => {
  const bmi = w / (h * h);

  return bmi;
};

const alexBMIHigher = () => {
  const aB = bmiCalc(1.75, 75);
  const bB = bmiCalc(1.82, 82);

  if (aB > bB) return true;
  else return false;
};

console.log(alexBMIHigher());
