---
layout: card
title: Customize your Snake Avatar
categories: [doc]
---


Make your snake unique by assigning it a color, head, and tail in your response to the Battlesnake API's `start` request. 

### A response to start with these specifications:

```
{
	"color": "#736CCB",
	"headType": "beluga",
	"tailType": "curled"
}
```
#### Will customize your snake like this!

<div class="row p-10">
	<svg class="align-self-center ml-3 mr-1 w-40" fill="#736CCB" style="transform:rotateY(180deg);" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	    <path d="M23 48c2 12 2 26 4 26 0 0-2 0 0 0s1-19-1-28c-1-10-2-19-1-28S31 1 42 0c10-1 19 5 25 12 5 7 7 11 8 21l1 12c0 3-2 17-1 21 1 5 8 7 8 7 8 3 16-1 17 1 0 2-3 5-8 6-11 3-24 6-30-4-4-8-2-18-2-26-1-9-1-20-6-28-2-3-6-5-9-4s-2 4-2 6c0 20 9 42 2 61-4 8-11 16-21 15l-4-1-2-1c-3-2-6-2-9-2-4 1-5 4-9 4V0c17 2 22 38 23 48z"/>
	</svg>
	<svg class="align-self-center mr-1 w-40" fill="#736CCB" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
	    <path d="M0 0h100v100H0z"/>
	</svg>
	<svg class="align-self-center w-40" fill="#736CCB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
	  <path d="M0 100h56L32 88l-5-14 73 2-10-48L50 0H0zm23-61a9 9 0 1 1-10 10 9 9 0 0 1 10-10z"/>
	</svg>
</div>


---

## Assign a Color

Specify the `color` for a snake using a HEX code (like this: `#736CCB`).

---

## Choose a head and tail

Find your favorite snake head and tail from the options below and use the name in the parameters `headType` and `tailType`. If you do not specify a head or tail type the "regular" version will be used. 

<div class="row">
	<div class="col-12 col-sm-5 p-25 card-body">
		<h5 class="card-header"><strong>Snake Heads</strong></h5>
		<ul class="list-group">
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/regular.svg" fill="#736CCB" alt="regular snake head"/>
				<p class="mb-0">"regular"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/beluga.svg" alt="beluga snake head"/>
				<p class="mb-0">"beluga"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/bendr.svg" alt="bendr snake head"/>
				<p class="mb-0">"bendr"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/dead.svg" alt="dead snake head"/>
				<p class="mb-0">"dead"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/evil.svg" alt="evil snake head"/>
				<p class="mb-0">"evil"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/fang.svg" alt="fang snake head"/>
				<p class="mb-0">"fang"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/pixel.svg" alt="pixel snake head"/>
				<p class="mb-0">"pixel"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/safe.svg" alt="safe snake head"/>
				<p class="mb-0">"safe"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/sand-worm.svg" alt="sand-worm snake head"/>
				<p class="mb-0">"sand-worm" </p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/shades.svg" alt="shades snake head"/>
				<p class="mb-0">"shades"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/silly.svg" alt="silly snake head"/>
				<p class="mb-0">"silly"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/smile.svg" alt="smile snake head"/>
				<p class="mb-0">"smile"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/head/tongue.svg" alt="tongue snake head"/>
				<p class="mb-0">"tongue"</p>
			</li>
		</ul>
	</div>
	<div class="col-12 col-sm-5  p-25 card-body">
		<h5 class="card-header"><strong>Snake Tails</strong></h5>
		<ul class="list-group">
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/regular.svg" alt="regular snake head"/>
				<p>"regular"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/block-bum.svg" alt="block-bum snake head"/>
				<p>"block-bum"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/bolt.svg" alt="bolt snake head"/>
				<p>"bolt"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/curled.svg" alt="curled snake head"/>
				<p>"curled" </p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/fat-rattle.svg" alt="fat-rattle snake head"/>
				<p>"fat-rattle"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/freckled.svg" alt="freckled snake head"/>
				<p>"freckled"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/hook.svg" alt="hook snake head"/>
				<p>"hook"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/pixel.svg" alt="pixel snake head"/>
				<p>"pixel"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/round-bum.svg" alt="round-bum snake head"/>
				<p>"round-bum</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/sharp.svg" alt="sharp snake head"/>
				<p>"sharp"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/skinny.svg" alt="skinny snake head"/>
				<p>"skinny"</p>
			</li>
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<img class="align-self-center mr-3 w-40" src="/assets/images/snake/tail/small-rattle.svg" alt="small-rattle snake head"/>
				<p>"small-rattle"</p>
			</li>
		</ul>
	</div>
</div>

### Futher Reading

Check out the [Battlesnake API Docs](/snake-api.html) for more on information and examples on interacting with the Battlesnake API.
