import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.31.1 */
import {
	SvelteComponent,
	append,
	attr,
	create_component,
	destroy_component,
	detach,
	element,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../web_modules/svelte/internal.js";

import P2DTest from "./P2DTest.js";
import P3DTest from "./P3DTest.js";

function create_fragment(ctx) {
	let div;
	let p3dtest;
	let t;
	let p2dtest;
	let current;
	p3dtest = new P3DTest({});
	p2dtest = new P2DTest({});

	return {
		c() {
			div = element("div");
			create_component(p3dtest.$$.fragment);
			t = space();
			create_component(p2dtest.$$.fragment);
			attr(div, "class", "App svelte-1krci7m");
		},
		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(p3dtest, div, null);
			append(div, t);
			mount_component(p2dtest, div, null);
			current = true;
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(p3dtest.$$.fragment, local);
			transition_in(p2dtest.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(p3dtest.$$.fragment, local);
			transition_out(p2dtest.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(div);
			destroy_component(p3dtest);
			destroy_component(p2dtest);
		}
	};
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export default App;