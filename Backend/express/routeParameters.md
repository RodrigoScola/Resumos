# Route Parameters

##### Get more information from dynamic paths

#### Example

```js
app.get("/sorcerers/:sorcererName", (req, res, next) => {
	const sorcerer = Sorcerers[req.params.sorcererName]
	res.send(sorcerer.info)
})
app.get("/sorcerers/:sorcererName/spellHistory", (req, res, next) => {
	const sorcerer = Sorcerers[req.params.sorcererName]
	res.send(sorcerer.history)
})
```

> In the code above we nee to extract the request parameter `:sorcererName` from the url in both instances, and end up duplicating the necessary code so that it appears in both routes.

When working with routes that require parameters we might find ourselves in a position where multiple different routes require the same parameters and use it to identify the same data

#### param()

express is midful of the pain point of replicated parameter matching code and has a method for this issue.

When a specific parameter is present on a route, we can write a function that will perform the necessary lookup and attach it to the req in subsequent middleware that is run

```js
app.param("spellId", (req, res, next, spellId) => {
	try {
		const found = spellBook.reduce((spell, currentSpell) => {
			if (currentSpell.id == spellId) spell = currentSpell
			return spell
		}, null)
		if (found) {
			req.spell = found
			return next()
		}
		next(new Error("your magic spell was not found in any of our tomes"))
	} catch (error) {
		next(error)
	}
})
```

> In the code above we intercept any request to a route handler with the :spellId parameter. not that in the app.param spellId does not have the : and the actual id is passed on the 4th argument

Inside the app.param, you should use the fourth argument as the params value, not a key from the req.params obj

#### Merging parameters

When you want to create something complex in software you model out the base components and use composition to create the relationships

When you are building web endpoints we might want to acess some property of a complex object. In order to do it in express we can design a nested router, invoked within another router, to pass params the parent router has access to we pass a special config when defining the router

```js
const sorcererRouter = express.Router()

const familiarRouter = express.Router({ mergeParams: true })

sorcererRouter.use("/:sorcererId/familiars", familiarRouter)

sorcererRouter.get("/", (req, res, next) => {
	res.status(200).send(sorcerers)
})

sorcererRouter.param("sorcererId", (req, res, next, sorcererId) => {
	try {
		const sorcerer = getSorcererById(sorcererId)
		req.sorcerer = sorcerer
		next()
	} catch (err) {
		next(err)
	}
})


familiarRouter.get('/',(req,res,next) => {
     const familiars = getFamiliars(req.sorcerer.id)
     res.send({
          message: `Sorcerer ${req.sorcerer} has familiars ${familiars}`
          sorcerer: req.sorcerer,
          familiars: familiars
     })
})
```

> In the code aboce we define two endpoints the `/sorcerer` and the `/sorcerer/:sorcererId/` familiars. The familiars are nested into the sorcerer endpoint, indicating the relashionship that a sorcerer has multiple familiars

Take careful note of `{ mergeParams: true }` argument tell express that the familiarRouter should have access to parents passed into its parent Router, the sorcererRouter. we then tell express that the path for the familiarRouter is the same as the path for the sorcererRouter with the additional path `/:sorcererId/familiars`

We can create a family of routes (router) build by appending routes to familiarRouter's base `/sorcerer/:sorcererId/familiars`
