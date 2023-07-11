# Bubble Sort

#algorithms 

it is an inplace sorting algorithm

```js
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];

				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

console.log(bubbleSort([1, 2, 5, 32, 1, 5, 78, 2, 2, 4, 76]));
```
