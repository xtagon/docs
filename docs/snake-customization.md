---
layout: card
title: Customize your Snake Avatar
categories: [doc]
---


Make your snake unique by assigning it a color, head, and tail as part of your response to the Battlesnake API's `start` request. Read more about the `start` endpoint on our [API Docs here](https://docs.battlesnake.io/snake-api.html#tag/endpoints/paths/~1start/post)

### Example response to POST /start

```
{
	"color": "#736CCB",
	"headType": "beluga",
	"tailType": "sharp"
}
```

---

## Color

Specify a `color` for a snake using any HEX code (like this: `#736CCB`).

---

## Heads and Tails

Choose a head and tail for your snake by passing the names in as the `headType` and `tailType`. If you do not specify a head or tail type the "regular" versions will be used.

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