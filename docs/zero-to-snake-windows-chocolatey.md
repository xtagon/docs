---
layout: card
title: Zero to snake for Windows (using Chocolatey)
categories: [doc]
---

This document takes you from a blank Windows 10/8/7 computer to a running snake that you can view in your browser.
The programming language used in this document is NodeJS, a JavaScript based language.

These steps are only validated on Google Chrome, so please download and use that as your browser or your mileage may vary.

## Step 1 - Environment setup

The following sets up useful utilities and tools to help us in our snake journey.

### 1.1 Install Chocolatey

We want to install the chocolately package manager because it makes all the other things we want to do in step 1 much
easier.

Windows 10

- Open a terminal on your windows machine by right clicking the start menu and choosing `Windows PowerShell (Admin)`

Windows 7

- Open a terminal on your windows machine by cilcking the start menu and typing 'power' and choosing `Windows PowerShell`

Copy & paste the following command to install a package manager called Chocolately onto your computer.

```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

If you see any errors, stop and ask someone. If this step doesn't work correctly nothing else will work right and you'll
end up in a tangle. As a general rule, never copy & paste random commands into your terminal, it's very dangerous. :)

---

### 1.2 Install Git

Git is a version command tool to allow us to check out the NodeJS starter snake from Github.com

```bash
choco install git -y
```

---

### 1.3 Install Unzip

```bash
choco install unzip -y
```

## Step 2 - Install NodeJS

NodeJS is the programming language we will use build our snake.

```bash
choco install nodejs -y
```

## Step 3 - Run the Engine

The engine is the piece of software that talks to your snake and asks it what moves to make next based on the current
state of the game. It also comes pre-packaged with a UI to see your snake running.

### 3.1 Download the engine

```bash
mkdir battlesnake-engine
cd battlesnake-engine
```

Go to https://github.com/battlesnakeio/engine/releases/latest and download the engine zip file for windows and move it
into the directory `battlesnake-engine`

Unzip the file

```bash
unzip engine*
```

---

### 3.2 Run the engine in dev mode

Dev mode means that the engine will run a simple browser application that you can connect to your snake.

```bash
.\engine dev
```

Open a browser and go to <a href="http://localhost:3010/">http://localhost:3010/</a>

This will give you a web based environment to test your snake locally before you put it on the Internet.

Of course, we don't yet have a snake to test and that is what the next step is all about.

## Step 4 - Run your snake

### 4.1 - Download the NodeJS starter snake

Starter snakes are housed in a version control system on github.com. You don't need a github account to download the
snake.

Open a new PowerShell window so we can keep the engine running in the other one.

In the new PowerShell lets download the starter snake with the git command:

```bash
git clone git://github.com/battlesnakeio/starter-snake-node.git
```

## The snake will now exist in a directory called `starter-snake-node`

### 4.2 - Install the snake's dependencies

```bash
cd starter-snake-node
npm install
```

### 4.3 - Run the snake

```bash
npm start
```

The command `nodemon` means that if you modify any files the snake will reload which will save you lots of time.

Your snake is now running on localhost port 5000. (http://localhost:5000)

If you go back to the engine browser page you can add your snake and see it go up directly into a wall and die by pasting
in the snake url of `http://localhost:5000` and clicking Start Game.

## Step 5 - Make your snake smart

Now you can open up your snake code and start playing around with it to make it do something more exciting than hitting a
wall.

Open up the index.js file in the starter-snake-node directory and see what you can get it to do. Every time you save
this file, your snake will reload and you can watch the new behaviour in the engine based browser from step 3.

## Step 6 - Deploy it to the Internet

Have a look at the `README.md` file in your starter-snake-node directory for instructions on deploying to Heroku.
