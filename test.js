var bitcoin = require("bitcoinjs-lib");
var hit = 0;
var tryN = 0;

while(hit < 1) {
	var keyPair = bitcoin.ECPair.makeRandom();
	var address = keyPair.getAddress();
	var pkey = keyPair.toWIF()

	var vanity = address.substring(0, 5);
	console.log(tryN + " " + vanity)
	if(vanity == "1SeanM" || vanity == "1Sean") {
		// Set vanity == to whatever particular vanity you'd like to see
		// Keep in mind this is extremely CPU intensive
		console.log(address + " " + pkey);
		hit = 2;
	}
	tryN++;
}

