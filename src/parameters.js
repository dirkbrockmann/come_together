// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:4000,
		M:40,
		L:81,
		agentsize: 2.0,
		dt:0.1,
	
		responsiveness: {
			range:[0.1,0.5],
			default:0.3
		},
		random_movement: {
			range:[0,0.5],
			default:0.1
		},
		recovery_time:{
			range : [10,40],
			default : 20
		},
		cAMP_pulse_strength: {
			range:[100,300],
			default:200
		},
		cAMP_life_time: {
			range:[0,-2],
			default:-1.13
		},
		cAMP_diffusion:{
			range : [0,1],
			default : 0.64
		},
		activation_threshold:{
			range : [2,10],
			default : 9.15
		},
		movement_threshold: {
			range:[2,20],
			default:15
		},
		hide_cells: {
			default: false
		},
		hide_cAMP: {
			default: false
		},
		show_cell_state: {
			default: false
		},
		switch_off_pacemaker: {
			default: false
		},
		advanced_settings: {
			default: false
		}
}

