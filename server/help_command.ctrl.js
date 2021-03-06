const commands = require("require-all")({
	dirname: __dirname + "/commands",
	filter: /(.+help)\.js$/
});
const flat = require("flat");
const _ = require("lodash");

const commandsFlat = flat(commands);
const c2 = _.values(commandsFlat);

module.exports = {

	processHelpCommands: function(command, message, args, dry=false) {
		handled = false
		//console.error("INFO  : ", c2)
		c2.forEach(fn => {
			handled = handled || fn(command, message, args, dry)});
		if(!handled){
		console.error("WARN>>: ", "Command was not handled:", command, args)
		}
	}
};
