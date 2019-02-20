---
layout: card
title: Zero to snake for Windows
categories: [doc]
---

This document will allow you to start developing a Battlesnake snake AI on a Windows 10/8/7 computer.

JavaScript is the language we will use build our snake and NodeJS is the runtime that is used to execute server-side JS code to run the snake server.

These steps can be completed in the browser of your choice, but have been validated in the Edge browser.

## Environment Setup

### Step 1 - Git (download and install)

Git is a version command tool to allow us to "checkout" the NodeJS starter snake from Github.com.

Start by going to the [Git website](https://git-scm.com/downloads) and downloading the Windows version. Go to your Downloads folder, double-click on the the downloaded EXE file, and follow the installation steps. The installation will ask you a few questions during the process:

- You can configure which Components get installed during the setup, but for now leave everything in this screen checked as-is.
- When asked what Editor you want as your default to be used by Git, select your currently installed/favourite code editor from the dropdown or leave it as "Vim".
- When asked about adjusting your PATH, don't change it and click Next.
- Use the OpenSSL Library when asked and click Next.
- For configuring line ending conversions, choose "Checkout as-is, commit Unix-style line endings" and click Next.
- Don't change the terminal emulator, click Next.
- Don't change the extra options when asked, click Install then click Finish.

Once Git is installed, you should see (and be able to search for) a new application called `Git Bash`. This is a minimal linux-style `bash` terminal console. Don't worry about the details of it, just know that we'll be using this to execute commands in the following steps.

## Step 2 - NodeJS (download and install)

To download the NodeJS runtime, visit [the download site](https://nodejs.org/en/download/) and get the LTS Windows installer.

Once downloaded, run the installation file. There is zero configuration for this installer so click Next and Yes until NodeJS is installed.

To verify that NodeJS is available in your terminal console, open a new Git Bash window. Type `node --version` which will print out the current version of `node` available.

## Step 3 - Battlesnake Engine

The Engine is the piece of software that talks to your snake and asks it what moves to make next based on the current state of the game. It is available as a pre-packaged binary file complete with an interface to view and test your snake as you work on it.

### 3.1 Download the `engine` binary

Navigate to a directory somewhere on your machine that you will use to download the Engine binary to, then make a new folder there called `battlesnake-engine`. In the `Git Bash` window from before, execute:

```bash
mkdir battlesnake-engine
cd battlesnake-engine
```

Go to <https://github.com/battlesnakeio/engine/releases/latest> and download the `Windows_x86_64.zip` file.

Once downloaded, open Windows Explorer and navigate to your Downloads folder. Right-click and extract the downloaded ZIP file, then move the contents of the extracted folder into the directory created above.

---

### 3.2 Run the Engine

Engine has a "dev" mode allows you to access a development environment that runs completely local to your machine. Running the Engine in this way allows you to make quick iterations to your snake before putting it up on <https://play.battlesnake.io>.

Open the `Git Bash` console window from the previous step and execute the following command:

```bash
./engine.exe dev
```

Minimize the console window then open your browser and go to the following URL: <http://localhost:3010>

What you should see is a web-based environment to test your snake locally before you put it on the Internet. Of course, we don't yet have a snake to test and that is what the next step will accomplish. Minimize this browser window as we'll use it later.

## Step 4 - Run your snake

### 4.1 - Download the NodeJS starter snake

Starter snakes are housed in a version control system on <https://github.com/battlesnakeio>. You don't need a github account to download the NodeJS starter snake, however it is strongly encouraged to use a form of version control when developing your snake.

Open a new `Git Bash` console window so we can keep the engine running in the previous one. In the new console window, download the NodeJS starter snake using git with the following command:

```bash
git clone git://github.com/battlesnakeio/starter-snake-node.git
```

The NodeJS starter snake will now exist in a directory called `starter-snake-node`.

---

### 4.2 - Install dependencies

```cmd
cd starter-snake-node
npm install
```

---

### 4.3 - Run the snake

Now that you've installed the dependencies, you should be able to run the starter snake as-is with:

```cmd
npm start
```

**Note:** If a Windows Firewall window pops up at this point, click Allow Access.

If everything has gone well so far, open your browser again to <http://localhost:3010> and add your snake by pasting in the snake url of `http://localhost:5000` and clicking "Start Game". You will see it go up directly into a wall and die because it currently has zero logic to handle moves.

## Step 5 - Make your snake smart

Now you can start modifying your snake's code and making it do something more exciting than hit a wall.

Open the `index.js` file in the starter-snake-node directory in your favourite text editor to see what you can get it to do. This is where the logic for you snake will live! Every time you save this file, your snake will reload and be available for play at <http://localhost:3010>.

## Step 6 - Deploy it to the Internet

Have a look at the `README.md` file in your starter-snake-node directory for instructions on deploying to Heroku, or other providers if you choose.
