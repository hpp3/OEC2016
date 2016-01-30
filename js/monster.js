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
	var eval_str = 'var OUTPUT = "";\n' + helper(editor) + 'OUTPUT;';
    console.log(eval_str)
	console.log(eval(eval_str));
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
			eval_str += 'OUTPUT += "Batman fed the monster\\n";\n';
			//eval_str += "print " + helper(elem) + "\n";
		} else if (elem.classList.contains("assign")) {
			eval_str += helper(elem) + ";\n";
		} else if (elem.classList.contains("for")) {
			var loopName = guid();
			var times = elem.getAttribute("val");
			eval_str += "for (var " + loopName + "=0; " + loopName + "<" + times + "; " + loopName + "++) {\n";
			eval_str += helper(elem);
			eval_str += "}\n";
		} else if (elem.classList.contains("repeat")) {
			var cond = find_class_child(elem, "cond");
			var body = find_class_child(elem, "loop");
			eval_str += "while (!(" + cond.options[cond.selectedIndex].text + ")) {\n";
			eval_str += helper(body);
			eval_str += "}\n";
		} else if (elem.classList.contains("val")) {
			eval_str += $(elem).val();
		} else if (elem.classList.contains("cond")) {
			eval_str += elem
		} else if (elem.classList.contains("recipe")) {
			eval_str += "function " + elem.getAttribute('val') + '() {\n';
			eval_str += helper(elem);
			eval_str += '}\n';
		} else if (elem.classList.contains("run")) {
			eval_str += elem.getAttribute('val') + '();\n';
		}
	}
	return eval_str;
}
