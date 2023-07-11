#whatILearned 
# Stack Organizer

-    dont rush a feature, try to think of something that fits in the whole thing

-    dont make a feature that has a lot of contact points

> if you are getting information and showing it in the page, dont make 3 connection types, reducers hooks that all fetch the data, instead make the contact point rely on eachother

-    ask why something is the way that it is, _can we make so this hook doesnt fetch the data and formats and show the data?_

use lodash for things

use faker to make random data so you arent working with 3 rows

> you might have problems that arent visible when you dont have that many data, what if a row has the same title twice? what if the same user has more than 2 rows on a certain table?

you **should** take the time to refactor your code

> if you program 5 days of the week, in the end of the week/after each feature, try to refactor it, organize it, use things that you already programmed it,
> once you finish a feature, it works, you can focus on making it better without worrying if itll work

when you are writing a hook, use context to have a mega bank

when storing data, try to name everything the same, not title, name, cat_name...

### when create a feature, it should be able to

get
set
add
remove

use typescript
use typescript
use typescript

dont use different projects for server and frontend if you are by yourself, you will only have more headache and not that much positive things

usememo instead of useState is really good if you are using a state management library and just storing the ids

## Have one way to do anything, dont think you are going to need to pass the id or post.id, it gets worse the more the project grows

make more providers and hold state in them
