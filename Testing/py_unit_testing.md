#python #testing
# Python Unit testing

## Assert 

test that a condition is met. If the condition evaluates to `False`, an `AssertionError` is raised

```python
def times_ten(number):
     return number * 100

result = times_ten(20)
assert result == 200, 'expected times_ten(20) to return 200, instead got ' + str(result)
```

## Unit testing

Assertion statements are a good start to ensuring the programs are being tested, however they dont tell us **what** we should test. we can start by testing the smallest unit of a program

```python
def times_ten(number):
     return number * 100

def test_multiply_ten_by_zero():
     assert times_ten(0) == 0, 'expected times_ten(0) to return 0'
```

## Python unit test framework
