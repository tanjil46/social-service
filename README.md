# MCQ TEST
# 1
let greeting;
greetign = {};
console.log(greetign);
### Answer:{}
#### Explanation:first there was no value o greeting,when greeting={} its mean greeting value is {}.{} is not undentified object it can defined.


# 2  

## function sum(a, b) {
  return a + b;
}

sum(1, "2");

### Answer:'12'

#### Explanation:cause number and string can not be Calculated in the question there is 1 which is number but 2 is a string so they will be concatenate eact other.
.

# 3
## function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

### Answer:Hi there, undefined

#### Explanation:in the function  when sayHi() called there was not given any parameter .for missing of parameter (name) parameter value=undenfied.

# 4
## const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

### Answer:A: ['🍕', '🍫', '🥑', '🍔']

#### Explanation:info= favoriteFood: 🍕. then (info.favoriteFood=🍝) value won`t change in arry method when you intend to add index or remove index you have use push,pop property but in above those was not use so index will not change.  

# 5

## let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

### Answer:C: 3


#### Explanation: a value is considered truthy if it evaluates to true in a boolean context. Values like 1, 2, and 3 are truthy because they are not equal to 0.
















