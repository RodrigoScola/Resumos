git is a software that allows you to keep track of changes make to a project over time.
git workflow 
     working directory : where youll be doing all the work, creating, editing deleting and organizing files
     staging area : where youll list changes you make to the working directory
     repository : where git permanently stores those changes as different versions of the project

commands
     git init
          init means initialize, the commands sets up all the tools git needs to begin tracking changes make to the project
     git status
          returns what files have changed b`ut not commited
     git add 
          adds a file to the project
               git add filename
     git diff 
          if you type another thing on the added file , you can check the differences with git diff
               git diff filename
     git commit
          if you want to commit you have to add a message with the -m 
               git commit -m "this is a message"
     git log
          on the git log, you will have an code, this might be useful if you want to roll it back
backtracking
     git show head 
          shows the commit message,
          the commit code
          author
          date
          the differences 
     git checkout 
          discard that change
               git checkout HEAD filename
                    will restore the file in your working directory to look exactly as it did when you last commited
     git soft reset 
          you can unstage the file from the stage area using 
               git reset HEAD filename
          this command resets the file in the staging area to be the same as the HEAD commit. 
          does not discard file changes from the working directory, just removes from the staging area
     git hard reset
          git reset commit_SHA
          this command works by using the first 7 characters of the SHA of a previous commit 
               if the code is 5d692065cf51a2f50ea8e7b19b5a7ae512f633ba, use
                    git reset 5d69206
                         HEAD is now set to that previous commit

what is a markdown
     is a text to html converter
     example
          what is a markdown?
          **List of tips**
          1. **Two asterisk emphasize**
          2. *One asterisk Italicizes*
     big text heading 
          heading 
     medium size text 
          ##heaidng
     small heading 
          ###heading 
     italics
          *italics*
     bold
          **bold**
     strikethrough
          ~strikethrough~
     unordered lists
          * | + | - 
     ordered lists
          n.
to make it work, save it as .md
     
if you want to have multiple states of project ( one that you can test stuff and not matter )
to check on which branch youre on 
     git branch
will return the name of the branch

to create a new branch   
     git branch branchName

you can switch to the new branch with
     git checkout branchName

to merge branchs
     git merge
this will merge the masters branch with the new branch

to delete branch 
     git branch -d branchName

engenheiro dev ops
     o que e 
     o que faz
     o que precisa pra suceder
     onde atua


git teamwork

git clone
     git clone remote_location clone_name
     remote_location - tells git where to go to find the remote ( this coule be a web address/filepath );
     clone_name - is the name you give to the directory in which git will clone the repository

git fetch 
     to fetch the new stuff from the repository and make your project up to date
          git fetch
     that doesnt meant that the changes are available, to that you need to merge the repository
          git merge origin/master
