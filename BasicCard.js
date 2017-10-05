function BasicCard(front,back) {
	
	this.front = front;
	this.back = back;
}

var arrayBasicData = ["What was the first year for the Chevrolet Corvette?-1953", 
                      "What does equinox mean with respect to earth?-length of light or dark is the same in a day", 
                      "What does solstice mean with respect to earth?-longest or shortest amount of daylight", 
                      "Why is there a small hole in a cd rom door?-manually open door",
                      "What year was 9/11?-2001",
                      "What does SQL stand for?-StructuredQueryLanguage",
                      "What does cdrom stand for?-compact disc read only memory",
                      "What is the zipcode for BeverlyHills?-90210"];

module.exports.arrayBasicData = arrayBasicData;
module.exports.BasicCard = BasicCard;