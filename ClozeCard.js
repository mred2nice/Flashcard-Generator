function ClozeCard(text,back,fullText) {

	if (fullText.indexOf(back) == -1) {
		throw new Error("Cloze deletion does not appear in input text.")
	}

	this.partial = text;
  	this.cloze = back;
  	this.fullText = fullText;
}

var arrayClozeData = ["...was the first year for the Chevrolet Corvette.-1953",
                      "When...is when an equinox occurs.-light and dark are the same length in a day",
                      "A solstice means days have the...-shortest or longest amount of daylight",
                      "The small hole in a cd rom door is used to...-manually open it",
                      "9/11 occurred in the year...-2001",
                      "SQL stands for...-structured query language",
                      "CDrom stands for...-compact disc read only memory",
                      "...is the zipcode for BeverlyHills.-90210"]

module.exports.arrayClozeData = arrayClozeData;
module.exports.ClozeCard = ClozeCard;


