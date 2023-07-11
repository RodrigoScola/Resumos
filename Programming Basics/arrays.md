#programming_basics

        arrays
        
        python

        arrayName = []          
        C#
    For the times that you know how many inputs will be
        string[] stringName = {
            "first title",
            "second title",
            "Third title"
        };
    if you know how many inputs will it be, but there will be user input
        string[] stringName = new string[number]
        (getting the input)
        for (int i = 0; i < varName.lenght; i++) {
            console.Readline();        
        }
        (displaying the input)
        for (int i = 0; i <varName.lenght; i++) {
            console.WriteLine(varName[i]);
        }
    if you dont know how many inputs will it have, but there will be user input
        list<string> stringname = new list<string>();
        (getting the input);
        stringname.add("what you want to add");
        (removing the input);
        stringname.remove("what you want to remove");
        stringname.removeat(the number on the index that you want to be removed)
        (displaying the input)
        for (int i = 0; i < stringname.count; i++) {
            console.writeline(stringname[i]);
        }
Arrays
    you can store multiple data on arrays
     myArray = ["hello", 60, 6.25];
    you can store other arrays in arrays
        my array = ["123", 80]["bulls there", 031];
    you can append data into an array with the push/unshift command
        var arr1 = [1,2,3];
        arr1.push(4);
        var arr1 = [1,2,3,4];
        .shift adds an element in front of a list
    you can remove data into an array with the pop/shift command
        pop always removes the last element of an array.
        shift always removes the first element of an array.
    you can get data from an array using .slice
to create a new function the syntax is 
    function newfunction(){ 
        console.log("hello world");
    }

you can replace data in an array using splice to take it out the element and adding , + the thing you want to add