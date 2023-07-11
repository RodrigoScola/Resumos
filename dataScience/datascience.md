#dataScience #python 
tuples 
    hold data in order
    has an index    
    immutable
    create by pairing 
    
zipping tuples
    tuples are commonly created by zipping list together with zip()
    two lists us_cookies, in_cookies
    top_pairs = list(zip(us_cookies, in_cookies);
    print (top_pairs)

unpacking tuples 
    unpacking tuples is a very expressive way for working with data 
        us_1, in_1 = top_pairs[0];
        print(us_1) <- this returns 'Chocolate Chip'
        ptrint(in_1) <-this returns 'Punjabi'

unpacking in loops 
    for us_cookie, in_cookie in top_pairs:
    print(us_cookie);
    print(in_cookie);

Enumerating positions 
    another useful tuple creation method is the enumerate() function
    enumeration is used in loops to return the position and the data in that position while looping 

        for ix, item in enumerate(top_pairs):
            us_cookie , in_cookie = item
            print(idx, us_cookie, in_cookie)
                //this returns
                //(0, 'chocolate chip','punjabi');
                //(1,'brownies','fruit cake rusk')

sets    
    unique
    unordered
    mutable

creating a set
    cookies_eaten_today = ['chocolate chip','peanut butter'];
    types_of_cookies_eaten = set(cookies_eaten_today);
modifying sets 
    .add() adds single elements
    .update() merges in another list
removing data from sets 
    .discard() safely removes an element from the set by value
    .pop() removes and returns an arbitrary element from the set (KeyError when empty);

the .union() returns a set of all the names found in the set you used the method on plus any sets passed as arguments to the method. You can also look 
for overlapping data in sets by using the .intersection() on a set and passing another set as an argument
    to make it work you first have to determine the first collection then use .union(newCollectionName)
        allNames = baby_names_2011.union(baby_names_2014);
    to check for the differences
    differences = baby_names_2011.difference(baby_names_2014)

using dictionaries
    creating and looping through dictionaries 
        hold data in key/value pairs
        nestable (use a dictionary as the value of a key within a dictionary);
        iterable
        created by dict() or {}
            art_galleries = {}
                for name, zip_code in galleries:
                    art_galleries[name] = zip_code

    printing in the loop
        for name imn art_galleries
    
safely dinding by key (cont);
 .get() allows you to safely access a key without error or exception handling 
 if a key is not in the dictionary , .get() returns none by default or you can supply a value to return 
    art_galleries.get('louvre','not found') <- returns 'Not Found'
    art_galleries.get('Zarrre Andre Gallery') <- returns '10011'

you can add parameters in dictionary 
    for rank in sorted(names_by_rank,reverse = True)[:10]