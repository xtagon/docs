---
title: Writing Your First Snake in Ruby
permalink: /tutorials/ruby
layout: card
---

This document takes you from a blank Ubuntu computer to a running snake that you can view in your browser. This tutorial may be adapted to Windows and MacOS in many places, although you would need to install the dependencies using your operating system's package manager, instead of `apt`.

The programming language used in this document is Ruby.

These steps are only validated on Google Chrome, so please download and use that as your browser.

## Step 1 - Environment setup

The following sets up useful utilities and tools to help us in our snake journey.

Open a terminal.

---

### 1.1 Install Git

Git is a version command tool to allow us to check out the Ruby starter snake from Github.com

```bash
sudo apt install git -y
```

---

### 1.2 Install Jq

JQ is a command line utility for interacting with the JSON format.

```
sudo apt install jq -y
```

---

### 1.2 Install curl

Curl for connecting and downloading things from the Internet.

```
sudo apt install curl -y
```

## Step 2 - Install Ruby

Ruby is the programming language we will use build our snake.

It is recommended to install Ruby using a version manager.

A good Ruby version manager is [rbenv](https://github.com/rbenv/rbenv) or [asdf](https://github.com/asdf-vm/asdf) with [asdf ruby](https://github.com/asdf-vm/asdf-ruby).

You also might be able to install Ruby directly, although this means you'll
only be able to have one version installed. How to do this depends on your
operating system. See [Installing
Ruby](https://www.ruby-lang.org/en/documentation/installation/) if you choose
to go this route.

## Step 3 - Run the Engine

The engine is the piece of software that talks to your snake and asks it what moves to make next based on the current
state of the game.  It also comes pre-packaged with a UI to see your snake running.

### 3.1 Download the engine

On Linux-based systems, you can download and unpack the latest release this way:

```bash
mkdir battlesnake-engine
cd battlesnake-engine
wget -qO- `curl -s https://api.github.com/repos/battlesnakeio/engine/releases/latest \
    | jq -r ".assets[] | select(.name) | .browser_download_url" | grep Linux | grep 64` \
    | tar zxv
```

On Windows or MacOS, you may need to download and unpack the latest release manually from the [Releases on Github](https://github.com/battlesnakeio/engine/releases)

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

### 4.1 - Download the Ruby starter snake

Starter snakes are housed in a version control system on github.com. You don't need a github account to download the
snake.

Lets download it with the git command:

```bash
git clone git@github.com:battlesnakeio/starter-snake-ruby.git
```

The snake will now exist in a directory called `starter-snake-ruby`

---

### 4.2 - Install the snake's dependencies

```bash
cd starter-snake-ruby
gem install bundler
bundle install
```

### 4.3 - Run the snake

```bash
foreman start web
```

Your snake is now running on localhost port 5000: [http://localhost:5000](http://localhost:5000)

If you go back to the engine browser page you can add your snake and see it go up directly into a wall and die by pasting
in the snake url of `http://localhost:5000` and clicking Start Game.

After you start the game, the board will be displayed. Use the arrow keys to advance forward or backward one turn at a time, or press Enter/Return to play the game to the end. If the keyboard shortcuts don't work, click the board once to make sure it has focus and try again.

## Step 5 - Make your snake smart

Now you can open up your snake code and start playing around with it to make it do something more exciting than hitting a
wall.

Open up the web.rb file in the starter-snake-ruby directory and see what you can get it to do.  Every time you save
this file, you will need to stop the server with Ctrl+C and re-start it with `foreman start web` to reload your snake code.

## Step 6 - Deploy it to the Internet

Have a look at the `README.md` file in your starter-snake-ruby directory for
instructions on deploying to Heroku, and for more up-to-date tips on how to run
the Ruby starter snake.
