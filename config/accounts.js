var configsArray = [];
var config;

// 1st Account (you can boost many accounts as you want)
config = {};
config.username = ''; // Account username
config.password = ''; // Account password
config.sharedSecret = ''; // Shared secret (2FA only), leave it blank for steam guard code
config.enableStatus = true; // Set it to false if you want to stay invisible
config.gamesAndStatus = [
	// Your custom status
	// 320 hl2dm / 220 hl2 / 10 cs1.6 / 380 hl2ep1 / 420 hl2ep2 / 400 port / 620 port2
	730]; // IDs of the games, separated by comma

config.replyMessage = ''; // Leave it blank for no reply message
config.receiveMessages = false; // Do you want to log the messages that you receive in the terminal?
config.saveMessages = false; // Do you want to save the messages that you receive in a file? 
configsArray.push(config);

module.exports = configsArray;
