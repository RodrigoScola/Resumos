
#c

always include the `#include` <stdio.h>
variables always need to be specified the type of it
    float
    int 
    double
    char
    string 
arrays
    will need to be specified the length first of how many things will be stored in there
        then y ou can manually set the data on each one 
            to set an array
                int arrayName [10];
on multidimensional arrays you have to specify the value for each
    and declaring you have to declare the maximum value on each
        int grades[2][5];
        it will take 2 main arrays and 5 elements on each array
you can calculate averages by making a for loop and adding the result in an variable then divide that variable by the indexnumber

to define strings 
    char * name = "John Smith" ;
that method cannot be altered, to make a string that can be altered
    char name[] = "John Smith";
    to print string 
        char name[] = "Jogn string";
        printf("%s",name);
using the function strlen(name) returns the string length
the function strncmp() compares two strings are returns 0 if its equal or a different number if they are different 
    char * name = "John";
    if (strncmp(name,"John",4)== 0 ) {
        printf("Hello,John\n");
    } else {
        printf("you are not john");
    }

string concatenation 
    the function strncat appends first n characters of src string to the destinationstring where n is mun (n, length (src)) the arguments 
    passed are destinantion string, source string and n - maximnun number of characters to be appended 

        char dest[20] = "Hello";
        char src = "World";
        strncar(dest,src,3);
        printf("%s",dest)
        strncat(dest,src,20);
        printf("%s\n",dest)

when you are trying to divide a number by an integer, you have to put (float ) first
    result = 1/(float)i


static variables 
    if you want a global vairable you can use the static keyword 
        int runnerCount() {
            static int count = 0;
            return count++;
        }
        int main() {
            printf("%d",runner()); //1
            printf("%d",runner()); //2
        }
    
static functions are just for the file that they are located on


pointers 
    are variables that play an important role in c 
    pointers are a simple integer variable that holds the memory adress that points to a value 

    char * name = "John";
        Allocates a local (stack) variable called name that ponts to a single character;
        initializes the name argument to point to where the J char resides
    if we try to acess the name variable as an array, it will work and will return the ordinal value of the character J, since the name variable actually ponts exactly to the beginning of the string

dereferencing 
    act of referring to where the pointer points, instead of the memory adress 

    //defining a variable
    int a = 1;
    //defining a pointer variable  and point it to a using the & operator
    int * pointer_a = &a;

    using the & operator to point at the variable a we can referr to it using the deferencing operator. we can also change the contents of the dereferenced variable 
    {
        int a = 1;
        int * pointer_a = &a;

        //changing the value of a;
        a += 1;
        //changing the value of a again;
        *pointer_a += 1;
        //will print 3;
        printf("The value of a is now %d\n", a);
    }    

function arguments by reference 
    its altering the value from the adress and not from the value itself 
    you can see it as if its a global variable and you are just altering it 
        void addone(int *n) {
            //n is local variable wich only exists within the function scope, therefore incrementing has no effect
            n++;
        }
        void addone(int *n) {
            //n is a pointer here which point to a memory adress outside the function scope
            (*n)++; 
        }
        addone(&n);

pointers to structures 
    lets say we want to create a function which moves a pont forward in both x and y, instead of sending two pointers we can now 
    send the only pointer to the function of the point structure 
    however if we wish to dereference a structure and acess one of its internal members we have a shorthand syntax for that 
        void move (point * p) {
            p->x++;
            p->y++;
        }

dynamic allocation
    store data without initially knowing the size of the data in the time we write the program 
    to allocate memory dynamically, you need to have a pointer ready to store the location of the memory
        dynamically allocate a person structure 
            typedef struct {
                char * name;
                int age;
            } person;
            to allocate a new person in the myperson argument 
                person * myperson = (person *) malloc(sizeof(person));
            this tells the compiler that we want to dynamically allocate just enough to hold a person struct in memory and then return a pointer of type person to the newly allocated data.
            to access the persons members you use the -> 
                myperson->name = "John";
                myperson->age = 30;
        when youre done with the allocated memory 
            free(struct);

arrays and pointers
    each array element has an address
        &arr[i] gives the memory location of the element of the arr;
        *(parr + i) gives the value of the arr element 

dynamic memory allocation for arrays 

char *pvoewls = (char *)malloc(5 *sizeof(char));
pvoewls[0] = 'A';
*(pvoewls + 1) =  'E';
they are the same thing

//allocate memory for nrows pointers 
    char **pvoewls = (char **)malloc(nrows * sizeof(char *));
    pvowels[0] = (char *) malloc(ncols * sizeof(char));
    pvowels[1] = (char *) malloc(ncols * sizeof(char));
    pvoewls[0][1] = 'A';

    printf("%d",pvoewls[0][1]);

recursion
    when a function calls itself 

files 

when working with files you declare a pointer of type file 
    FILE *name
to open a file 
    ptf = fopen("path",'mode');

modes 
    w - write mode, if file doesnt exist in the location, it creates one and opens it 
    r - has to exists in the location and read in the binary mode
    w - writing in binary mode 
    a - append to the end of file 
    r+ - reading and writing 

add a "b" to the modes to do the binary mode 

closing a file 
    fclose(ptf) 

reading and writing to a text file 
    for reading and writing to a text file, fprintf, fscanf 

    write to a text file 
        {
            int num; 
            FILE *file ;
            file = fopen("filepath","w");
            scanf("%d",&num);
            fprintf(file, num);
        }
    read from a file 
        {
            int num ;
            FILE *file;
            file = fopen("filepath","r");
            fscanf(file, "%d",&num);
            printf("%d",num);
        }
    getting data from fseek 
        fseek(file, -sizeof(struct), SEEK_END);
        for(n = 1; n < 5; n++) {
            fread(&num, sizeof(struct), 1, file);
            fseek(file, -2*sizeof(struct), SEEK_CUR);
        }
the function fscanf returns the num of elems read, if theres no elems left it returns eof so you can make a loop by doing 
    while(fscanf(arq,"%d", &num)!== EOF){ 

    }

binary data 
    