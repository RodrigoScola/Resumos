# Arrays

> const a = [] is not an array

### what is an array?

an array is a contiguous amount of space, which contains a certain amounts of bytes

#### Array buffer

```js
const a = new ArrayBuffer(6); // ArrayBuffer{ [Uint8Contents]: <00 00 00 00 00 00>, bytelength: 6 }

const a8 = new Uint8Array(a);

a8[0] = 45;

a; // ArrayBuffer { [Uint8Contents] : <2d 00 00 00 00 00>, byteLength: 6}

const a16 = new Uint16Array(a);

a16[2] = 0x4545; // ArrayBuffer { [Uint8Contents] : <2d 00 00 00 45 45>, byteLength: 6}
```

the `a8` or `a16` are only views of the `arrayBuffer`

#### Why the index position of a8 and a16 are different?

because the index position is based on the unit of the array, since they are different units, they go to different lengths
