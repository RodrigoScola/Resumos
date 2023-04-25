# O notation

As your input grows, how fast does computation or mamory grow?

Why/How to favor one algorithm to another one?

Lets say that you are looping through an array of numbers and you want to see if the number is on the results array, which option should you choose?

```ts
const allNumbers: numbers[] = new Array(10000).map((number, index) => Math.floor(Math.random() * number));

const results: number[] = [];

for (const number in allNumbers) {
	let inResults = false;
	for (const resultNumber in results) {
		if (number == resultNumber) {
			inResults = true;
		}
	}
	if (inResults == false) results.push(number);
}
```

```ts
const allNumbers: numbers[] = new Array(10000).map((number, index) => Math.floor(Math.random() * number));
const results = new Set(allNumbers);
```

> One took 4.076 seconds and another took 0.574 ms, ill let you judge wich one it is

-    Growth is Respect to the input

-    Constants are dropped

If your algorithm has 2 loops in them, but they are not nested. The algorithm is still O(n)

```ts
for (let i = 0; i < 200; i++) {
	console.log(i);
}
for (let i = 0; i < 200; i++) {
	console.log(i);
}
```

-    Worst case is _usually_ what is measured
