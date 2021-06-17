<!-- Square UnhBoxed Hackathon - Tournament feature extension -->
# Square UnBoxed Hackathon - Tournament feature extension
Repository for creating the tournament feature extension for Square's base ecosystem.

<!-- General Housekeeping -->
## General Housekeeping
To ensure all of our code works well and does not cluster and corrup things, here are a few rules which will be implemented to the repo:
(These are also good practises anyway so try and follow them!)

### Creating Branches
If you want to work on a feature, please create a repository with your initials and the feature that is to be implemented.
E.g. `git checkout -b jtan/awesome-feature`

### How to git: the definitive guide
Here's  a rough checklist of what you should do with your branch whenever you're working on it:
- Before work:
1. `git checkout main`
2. `git pull`
3. `git checkout your-initials/awesome-feature`

- When starting work:
Remember to always commit! No need to *push*  but be sure to push often so all of us can help and review the code!

Occasioanally, you would want to do the following:
1. `git fetch --all`
2. `git rebase origin/master`

This will keep your branch updated to the latest changes in master. This will prevent any merge conflicts (most of them anyway) from corrupting your branch.
**PLEASE** do this.  Once you have commited enough and want to push your changes do:
3. `git push --force`

If you do not and did a `git pull` it will try to merge what you have from the old log, apply the new features then update master with all those changes again!
So be careful not to burn the git tree!

*Note: the master branch will hereon out be protected and be the default branch for the entirety of this project sayeth the Lord (me, Joon)*

### About merging into master
Since we're aiming to win and don't want to rot code with some future commit, there will be *protection rules* for merging into master.
If **ANY** feature is to be merged into master it must be both **reviewed** and **approved** before going in. We don't want premature merging which may break code.

<!-- Requirements -->
## Requirements
Be sure to check the requirements to make sure you're on track on completing the tasks at hand!

Link: https://miro.com/app/board/o9J_lAeOMjM=/
