const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var i = 0;

while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

for (let i = ingredients.length - 1; i >= 0; i--) {
  const element = ingredients[i];
  console.log(element);
}

