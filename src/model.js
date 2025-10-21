// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {filter,each,range,map,sumBy,maxBy,shuffle} from "lodash-es"
import {square} from "lattices"
const L = param.L;
const dt = param.dt;
const M = param.M;
const N = param.N;

// typically objects needed for the explorable
// are defined here

var agents = [];
const G = square(M).boundary("dirichlet").scale(param.L);
const sites = G.nodes;

const dx = L/(2*M+1);
const dy = L/(2*M+1);
const x0 = -L/2;
const y0 = -L/2;

const c2l = (x,y,x0,y0,dx,dy,M) => { 
	const m = Math.floor((x-x0)/dx);
	const n = Math.floor((y-y0)/dy);
	return n*(2*M+1)+m
}

console.log(c2l(-12.3,5.67,x0,y0,dx,dy,M))

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const wiggle_agents = () => {
	each(agents,a => {
		var theta = Math.random()*2*Math.PI;
		var dx = param.random_movement.widget.value()*Math.cos(theta)
		var dy = param.random_movement.widget.value()*Math.sin(theta)
		var x_new = (a.x + dx);
		var y_new = (a.y + dy);

		if (x_new < -L/2 || x_new > L/2) dx *= -1;
		if (y_new < -L/2 || y_new > L/2) dy *= -1;
		a.x += dx;
		a.y += dy;
	})

}


const activate = () => {
	let susceptible = filter(agents,a=>{return a.state==0 && a.type == "normal"});
	
	each(susceptible,a=>{
		let ix = c2l(a.x,a.y,x0,y0,dx,dy,M);
		let local_c = sites[ix].cAMP;
		
		if(local_c > param.activation_threshold.widget.value()){
			a.state = 1;
			a.stepped = false;
		}
	})
}

const recover = () => {
	let active = filter(agents,a=>{return a.state==1 });
	each(active,a=>{
		if (a.clock>10){
			a.state = 2;
		}
	})
}

const sensitize = () => {
	let recovered = filter(agents,a=>{return a.state==2 });
	each(recovered,a=>{
		if (a.clock>param.recovery_time.widget.value()){
			a.state = a.type == "pacemaker" ? 1 : 0;
			a.clock = 0;
		}
	})
}

const pacemaker = () => {
	if (param.switch_off_pacemaker.widget.value() == true){
		agents.forEach(function(d){
			d.type="normal"
		})
		
	} else {
		agents.forEach(function(d,i){
			d.type = i == N-1 ? "pacemaker" : "normal";
			if (i==N-1) {d.state=1}
		})
	}
}

const pulse = () => {
	let active = filter(agents,a=>{return a.state==1});
	each(active,a=>{
		let ix = c2l(a.x,a.y,x0,y0,dx,dy,M);
		sites[ix].cAMP=param.cAMP_pulse_strength.widget.value();
	})
}

const diffuse_cAMP = () => {
	each(sites,d=>{
			d.dcAMP = 
			param.cAMP_diffusion.widget.value() * dt * ( -d.neighbors.length*d.cAMP + sumBy(d.neighbors,x=>{return x.cAMP}));		
	})	
	each(sites,d=>{
		d.cAMP += d.dcAMP;
		d.cAMP = d.cAMP < 0 ? 0 : d.cAMP
		d.cAMP = d.cAMP * (1-Math.pow(10,param.cAMP_life_time.widget.value()));
	})
}

const iterate_cAMP = () => {
	diffuse_cAMP()
	diffuse_cAMP()
	diffuse_cAMP()
	diffuse_cAMP()	
	each(sites,d=>{
		d.cAMP = d.cAMP * (1-Math.pow(10,param.cAMP_life_time.widget.value()));
	})	
}


const chemotax = () => {

	const movers = filter(agents,a=> {
		let ix = c2l(a.x,a.y,x0,y0,dx,dy,M);
		return sites[ix].cAMP > param.movement_threshold.widget.value() && a.stepped == false && a.state==1
	})

	each(movers,a=>{
		const ix = c2l(a.x,a.y,x0,y0,dx,dy,M);
		const nn = sites[ix].neighbors;
		shuffle(nn);
		const target = maxBy(nn,a=>a.cAMP);
		const dxx = target.x - a.x
		const dyx = target.y - a.y
		a.x += param.responsiveness.widget.value() * dxx;
		a.y += param.responsiveness.widget.value() * dyx;
		a.stepped = true;
	})
	
}

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;
	
	each(sites,s=> {s.cAMP = 0;});
	agents = map(range(N), (i) => { 
		return {
			type: i == N-1 ? "pacemaker" : "normal",
			index:i,
			x:i == N-1 ? 0 : (L)*(Math.random()-0.5),
			y:i == N-1 ? 0 : (L)*(Math.random()-0.5),
			state:i == N-1 ? 1 : 0,
			clock:0
		};
	});
	pacemaker();
	
	// make agents	
	

};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {	
	param.tick++;	
	wiggle_agents();
	activate();
	recover();
	sensitize();
	each(filter(agents,a=>{return a.state>0}),d=>{d.clock+=1});
	pulse();
	iterate_cAMP();
	chemotax();	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	pacemaker();
}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,sites,initialize,go,update}
