---
title: "Building this Website – Meteor"
description: "Learning to Code from a ButteryTheme Meteor"
icon: "Hammer"
publishedAt: 2024-02-12
draft: false
---

## Project Overview

This is a sample markdown file to test the **building** section for our website.


Pushing a project to git, whether it be github or gitlab, is an essential part of working with code.
It helps create save points on the project, which allows us to see what we have built over time.

However, like many things we learn when we start coding, it is kind of unclear as to how to do this when we are starting,
We have commands we can use in our terminal, the best method of going about it. Even though I have done it a number of times, I often forget! !

So here are the commands we use, in order, 
when changes have been made to a project in VS code, as we see designated in the coloring of files on our sidebar list i.e. yellow, green, red.


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


6 Beginning our Terminal with pointing to our file.

When we begin our build we point with the following: 

    cd /Users/spencerdwight/Documents/personal-site/meteor

Great!


7 Running our file on our localhost with the command 

    npm run dev

This creates a developer environment ? where we can test features, before we deploy our site. We debug a lot of issues here.


8 Checking our build before deployment with 

    npm run build

The benefit of npm run build is we can soft launch our build beyond our localhost, without overpopulating our deployment.