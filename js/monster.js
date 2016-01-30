window.onload = function() {
	document.getElementById("run-btn").addEventListener('click', function() {
		parse();
	})
}

function guid() {
	return 'd' + Math.floor(Math.random()*1000001);
}

function parse() {
	var editor = document.getElementById("editor");
	console.log(editor);
	var eval_str = helper(editor);
	console.log(eval_str);
}

function find_class_child(dom, className) {
	for (var i = 0; i < dom.children.length; i++) {
		if (dom.children[i].classList.contains(className)) {
			return dom.children[i];
		}
	}
}

function helper(dom) {
	var eval_str = "";
	for (var i = 0; i < dom.children.length; i++) {
		var elem = dom.children[i];
		if (elem.classList.contains("ask")) {
			var cond = find_class_child(elem, "cond");
			eval_str += "if (" + cond.options[cond.selectedIndex].text + ") {\n";
			var yes = find_class_child(elem, "yes");
			var no = find_class_child(elem, "no");
			eval_str += helper(yes);
			eval_str += "} else {\n" + helper(no) + "}\n";
		} else if (elem.classList.contains("print")) {
			eval_str += "print " + helper(elem) + "\n";
		} else if (elem.classList.contains("assign")) {
			eval_str += elem.getAttribute("val") + ";\n";
		} else if (elem.classList.contains("repeat")) {
			var loopName = guid();
			var times = elem.getAttribute("val");
			eval_str += "for (var " + loopName + "=0; " + loopName + "<" + times + "; " + loopName + "++) {\n";
			eval_str += helper(elem);
			eval_str += "}\n";
		} else if (elem.classList.contains("while")) {
			eval_str += "while (" + elem.getAttribute("val") + ") {\n";
			eval_str += helper(elem);
			eval_str += "}\n";
		} else if (elem.classList.contains("val")) {
			eval_str += elem.getAttribute("value");
		} else if (elem.classList.contains("cond")) {
			eval_str += elem
		}
	}
	return eval_str;
}
