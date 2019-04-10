const router = require("express").Router();

router.get("/:from-:to", (req, res) => {
	let a = parseInt(req.params.from);
	let b = parseInt(req.params.to);
	let nums = [];
	if (a > b) {
		let t = a;
		a = b;
		b = t;
	}
	for (let x = a; x <= b; x++) {
		nums.push(x);
		//nums+=`<div>${x}</div>`;
	}
	res.render("numbers", { title: "numbers", numbers: nums });
	//res.send(html);
});

module.exports = router;
