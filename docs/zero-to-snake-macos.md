---
layout: card
title: Zero to Snake for macOS
categories: [doc]
---

This document takes you from a blank MacOS computer to a running snake that you can view in your browser.
The programming language used in this document is NodeJS a JavaScript based language.

These steps are only validated on Google Chrome, so please download and use that as your browser.

## Step 1 - Environment setup

The following sets up useful utilities and tools to help us in our snake journey.

### 1.1 Install Brew

We want to install the brew package manager because it makes all the other things we want to do in step 1 much easier.

Open a terminal on your mac by pressing `Command + Space` and typing in `terminal` and pressing enter.

Copy & paste the following command to install a package manager called Brew onto your computer.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

If you see any errors, stop and ask someone.  If this step doesn't work correctly nothing else will work right and you'll
end up in a tangle. As a general rule, never copy & paste random commands into your terminal, it's very dangerous. :)

---

### 1.2 Install Git

Git is a version command tool to allow us to check out the NodeJS starter snake from Github.com

```bash
brew install git
```

---

### 1.3 Install Jq

JQ is a command line utility for interacting with the JSON format.

```bash
brew install jq
```

---

### 1.4 Install Wget

wget is a command line utility for getting the web.

```bash
brew install wget
```

## Step 2 - Install NodeJS

NodeJS is the programming language we will use build our snake.

```bash
brew install nodejs
```

## Step 3 - Run the Engine

The engine is the piece of software that talks to your snake and asks it what moves to make next based on the current
state of the game.  It also comes pre-packaged with a UI to see your snake running.

### 3.1 Download the engine

```bash
mkdir battlesnake-engine
cd battlesnake-engine
wget -qO- `curl -s https://api.github.com/repos/battlesnakeio/engine/releases/latest \
    | jq -r ".assets[] | select(.name) | .browser_download_url" | grep Darwin | grep 64` \
    | bsdtar -xvf-
```

---

### 3.2 Run the engine in dev mode

Dev mode means that the engine will run a simple browser application that you can connect to your snake.

```bash
./engine dev
```

Open a browser and go to <a href="http://localhost:3010/">http://localhost:3010/</a>

This will give you a web based environment to test your snake locally before you put it on the Internet.

Of course, we don't yet have a snake to test and that is what the next step is all about.

## Step 4 - Run your snake

### 4.1 - Download the NodeJS starter snake

Starter snakes are housed in a version control system on github.com. You don't need a github account to download the
snake.

Lets download it with the git command:

```bash
git clone git://github.com/battlesnakeio/starter-snake-node.git
```

The snake will now exist in a directory called `starter-snake-node`

---

### 4.2 - Install the snake's dependencies

```bash
cd starter-snake-node
npm install -g nodemon
npm install
```

### 4.3 - Run the snake

```bash
nodemon index.js
```

The command `nodemon` means that if you modify any files the snake will reload which will save you lots of time.

Your snake is now running on localhost port 9001.  (http://localhost:9001)

If you go back to the engine browser page you can add your snake and see it go up directly into a wall and die by pasting
in the snake url of `http://localhost:9001` and clicking Start Game.

## Step 5 - Make your snake smart

Now you can open up your snake code and start playing around with it to make it do something more exciting than hitting a
wall.

Open up the index.js file in the starter-snake-node directory and see what you can get it to do.  Every time you save
this file, your snake will reload and you can watch the new behaviour in the engine based browser from step 3.

## Step 6 - Deploy it to the Internet

Have a look at the `README.md` file in your starter-snake-node directory for instructions on deploying to Heroku.
