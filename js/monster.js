window.onload = function() {
    parse();
}

function parse() {
	var editor = document.getElementById("editor");
	console.log(editor.innerHTML);
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
			eval_str += "if (" + elem.getAttribute("cond") + ") {\n";
			var yes = find_class_child(elem, "yes");
			var no = find_class_child(elem, "no");
			eval_str += helper(yes);
			eval_str += "} else {\n" + helper(no) + "}\n";
		} else if (elem.classList.contains("print")) {
			eval_str += "print " + elem.getAttribute("val") + "\n";
		}
	}
	return eval_str;
}
