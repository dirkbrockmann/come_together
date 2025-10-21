// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {agents,sites} from "./model.js"
import styles from "./styles.module.css"
import {each,range,map,mean} from "lodash-es"

const L = param.L;
const M = param.M;
const N = param.N

const cmax = param.cAMP_pulse_strength.widget.value();
//const cmax = 1;



const X = d3.scaleLinear().domain([-L/2,L/2])
const Y = d3.scaleLinear().domain([-L/2,L/2])
const C = d3.scaleSqrt().domain([0,cmax]).range(["#F6FFFE","rgb(0,0,255)"])

const ca1 = ["rgb(100,100,100,0.7)","rgba(100,100,100,0.7)","rgba(100,100,100,0.7)"]
const ca2 = ["rgba(150,150,150,.7)","darkred","rgba(100,100,100,0.7)"]

const C2_agents = d3.scaleOrdinal().domain([0,1,2]).range(ca1)
const C1_agents = d3.scaleOrdinal().domain([0,1,2]).range(ca2)

var W,H,ctx;

const draw_camp = () => {	
	ctx.clearRect(0, 0, W, H);
	each(sites,s =>{
		const c = s.cell();
		ctx.fillStyle=C(s.cAMP);
		ctx.strokeStyle = C(s.cAMP);
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x)-2,X(c[2].y)-X(c[0].y)-2)
		
	})		
}

const draw_agents = () => {
	each(agents,d => {
		ctx.beginPath();
		ctx.fillStyle=d.type == "pacemaker" ? "red" : param.show_cell_state.widget.value() ? C1_agents(d.state) : C2_agents(d.state);
		const factor = d.type == "pacemaker" && d.state==1 ? 2 : 1
	  	ctx.arc(X(d.x),Y(d.y),factor*param.agentsize,0,2*Math.PI);
		ctx.fill();
	  	ctx.closePath();
	})
}


const initialize = (display,config) => {

	W = config.display_size.width;
 	H = config.display_size.height;
	X.range([0,W]);
	Y.range([0,H]);
	ctx = display.node().getContext('2d');
	ctx.clearRect(0,0,W,H);

	if(!param.hide_cAMP.widget.value()) {draw_camp()};
	if(!param.hide_cells.widget.value()) {draw_agents()};
};

const go = (display,config) => {
	ctx.clearRect(0,0,W,H);
	if(!param.hide_cAMP.widget.value()) {draw_camp()};
	if(!param.hide_cells.widget.value()) {draw_agents()};
}

const update = go;


export {initialize,go,update}
