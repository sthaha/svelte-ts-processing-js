<script>

import Button from "../ui/Button.svelte"

import {testDuration} from "./test-timer/store.ts"

import TimePicker from "./test-timer/TimePicker.svelte"
import RunningTimer from "./test-timer/RunningTimer.svelte"

export let location = ""

let started = false
const start = () => started = true;
const done = () => started = false;


</script>


<div class="flex h-screen-0.80 p-8 white bg-gray-100 shadow-xl items-center flex-col">
  <RunningTimer on:done={done} />
  <!--

  {#if !started }
  <TimePicker />
  <Button enabled={ $testDuration > 0 } class="mt-4 w-32 " on:click={start}>
    <span slot="contents"> Start </span>
  </Button >
  {:else}
    <RunningTimer on:done={done} />
  {/if}
  -->
</div>
