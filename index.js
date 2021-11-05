function superbowlWin(arr) {
	const obj = (arr.find(function(s) {return s["result"] === "W"}));
	if (obj) return obj["year"];
}
