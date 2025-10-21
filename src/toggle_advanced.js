import parameters from "./parameters.js"
export default (controls) => {
	
	if (parameters.advanced_settings.widget.value() == true) {
		controls.select("#slider_"+parameters.cAMP_life_time.widget.id()).transition().style("opacity",null)
		controls.select("#slider_"+parameters.cAMP_life_time.widget.id()).selectAll("*").style("pointer-events",null)
		controls.select("#slider_"+parameters.cAMP_diffusion.widget.id()).transition().style("opacity",null)
		controls.select("#slider_"+parameters.cAMP_diffusion.widget.id()).selectAll("*").style("pointer-events",null)
		controls.select("#slider_"+parameters.activation_threshold.widget.id()).transition().style("opacity",null)
		controls.select("#slider_"+parameters.activation_threshold.widget.id()).selectAll("*").style("pointer-events",null)
		controls.select("#slider_"+parameters.movement_threshold.widget.id()).transition().style("opacity",null)
		controls.select("#slider_"+parameters.movement_threshold.widget.id()).selectAll("*").style("pointer-events",null)

	} else {
		controls.select("#slider_"+parameters.cAMP_life_time.widget.id()).transition().style("opacity",0)
		controls.select("#slider_"+parameters.cAMP_life_time.widget.id()).selectAll("*").style("pointer-events","none")
		controls.select("#slider_"+parameters.cAMP_diffusion.widget.id()).transition().style("opacity",0)
		controls.select("#slider_"+parameters.cAMP_diffusion.widget.id()).selectAll("*").style("pointer-events","none")
		controls.select("#slider_"+parameters.activation_threshold.widget.id()).transition().style("opacity",0)
		controls.select("#slider_"+parameters.activation_threshold.widget.id()).selectAll("*").style("pointer-events","none")
		controls.select("#slider_"+parameters.movement_threshold.widget.id()).transition().style("opacity",0)
		controls.select("#slider_"+parameters.movement_threshold.widget.id()).selectAll("*").style("pointer-events","none")

	}	
}