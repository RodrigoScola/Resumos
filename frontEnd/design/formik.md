# Formik

formik is a form library that does a lot of the boilerplate for us

### useFormik

* `initialValues` the form parameter names such as email, name...

* `onSubmit` what the form needs to do after it submits

```js
const formik = useFormik({
     initialValues: {
          email: '',
     },
     onSubmit: values => {
          alert(Json.stringify(values,null,2))
     }
});
```

### input 

on each input we have to pass some parameters

* `name` with the same name in initialValues

* `onChange` with the value of `formik.handleChange`

* `value` with the value of `formik.values.inputname`

## Validation

to have validation in a form, pass it in the `validade` keywork on the `useFormik` hook

an example from the [tutorial](https://formik.org/docs/tutorial)

```js
const validate = values => {
     const errors = {}

     if (!values.firstName) {
          errors.firstName = 'Required'
     } else if (values.firstName.length > 15){
          errors.firstName = "Must be 15 characters or less'
     }
      if (!values.email) {
          errors.email = 'Required';
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
     }
     return errors
}
```
