---
title: "Building this Website"
description: "Learning to Code from a ButteryTheme Meteor"
icon: "Webcam"
publishedAt: 2024-02-12
draft: false
---

## Project Overview

This is a sample markdown file to test the **building** section in the site.


Pushing a project to git, wether it be github or gitlab, is an essential part of working with code.
It helps create save points on the project, which allows us to see what we have built over time.

However, like all coding things, it is kind of unclear as to how to do this when starting,
it also has some commands native to terminal, which is the best method of going about it, and even though I have done it a number of times, I often forget!

So here are the commands, in order, when changes have been made to a project in VS code, as is designated in the coloring of files in the sidebar list.


1 First, open your terminal in the project directory and check which files have changed:

git status

This will show you all modified, added, or untracked files.


2 Add Your Changes

To stage all modified files, run:

git add .

If you only want to add specific files, use:

git add filename.ext


3 Commit Your Changes

Now, commit your changes with a meaningful message:

git commit -m "Fix build errors and prepare for deployment"

Replace the message with something relevant to your update.


4 Push to GitHub

If this is an existing repository that you have already set up:

git push origin main

If your branch is named something other than main (e.g., master or develop), adjust the command accordingly:

git push origin <branch-name>


5 (Optional) If This Is a New Repo

If you haven’t pushed this project before, you’ll need to set up the remote first:

git remote add origin https://github.com/your-username/repository-name.git
git branch -M main
git push -u origin main




git commit -m "Updated dates and fixed building section and markdown issues"
