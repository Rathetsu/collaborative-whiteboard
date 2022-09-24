//This file is only for saving the whiteboard to RAM so the Whiteboard will be gone after server restart.
// TODO: Save the Whiteboard state to a file to persist state after server restart.

var savedBoards = {};
module.exports = {
	handleEventsAndData: function (content) {
		var tool = content["t"]; //Tool witch is used
		var wid = content["wid"]; //whiteboard ID
		var username = content["username"];
		if (tool === "clear") { //Clear the whiteboard
			delete savedBoards[wid];
		} else if (tool === "undo") { //Undo an action
			if (savedBoards[wid]) {
				for (var i = savedBoards[wid].length - 1; i >= 0; i--) {
					if (savedBoards[wid][i]["username"] == username) {
						var drawId = savedBoards[wid][i]["drawId"];
						for (var i = savedBoards[wid].length - 1; i >= 0; i--) {
							if (savedBoards[wid][i]["drawId"] == drawId && savedBoards[wid][i]["username"] == username) {
								savedBoards[wid].splice(i, 1);
							}
						}
						break;
					}
				}
			}
		} else if (tool === "line" || tool === "pen" || tool === "rect" || tool === "circle" || tool === "eraser" || tool === "addImgBG" || tool === "recSelect" || tool === "eraseRec") { //Save all this actions
			if (!savedBoards[wid]) {
				savedBoards[wid] = [];
			}
			delete content["wid"]; //Delete id from content so we don't store it twice
			savedBoards[wid].push(content);
		}
	},
	loadStoredData: function (wid) { //Load saved whiteboard
		if (!savedBoards[wid]) {
			return [];
		}
		return savedBoards[wid];
	}
}