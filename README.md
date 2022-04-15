This repository contains the code for the lab's website hosted on Github pages and can be accessed at [https://cuadvancelab.github.io](https://cuadvancelab.github.io)

## Helpful links
- Bootstrap. Learn [bootstrap](https://getbootstrap.com/). Boostrap is used for fast styling to avoid styling things like buttons from scratch. This reduced the amount of custom styles written.  

## Deployment Information
This website is hosted on Github pages
Here is a short [guide](https://pages.github.com/)

## Making Changes to the Website - To be updated
1. Fork this repository 
2. Clone the forked repo to get a local copy on your system
3. Cd in the repo
4. From your web browser open the `index.html` or start a simple python3 server with `python3 -m http.server` in the project directory
5. Check the branch you are on: `git branch`
6. Create a new branch to work on your changes: `git branch <First-current-time>`. Or name the branch according to the change you are making
7. Make your changes, you have to refresh the page to see your changes
8. Check files that have changed: `git status`
9. Add changed files: `git add <file>` or `git add -A`
10. Commit changes: `git commit -m "your message"`
11. Push changes to your forked repo:  `git push`
12. Go back to your repository where you created your fork and follow the instructions on [github](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) to create a pull request (PR). Note, the 'head branch' should be the branch you made your changes in (the branch you created above). The 'base branch' should be 'master'. Don't forget to add a little description of your changes. Code maintainers will review the changes and merge it
13. Once merged, the changes should reflect on the website 

Note: On subsequent changes, you have this repo already in your local machine and a fork on your github repository. To keep the forked repository up to date with the original repository, follow these [instructions](https://stackoverflow.com/questions/39819441/keeping-a-fork-up-to-date)

