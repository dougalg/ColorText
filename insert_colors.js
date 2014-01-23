// Defines the relations between characters and colors
color_map = {
    "!": Array(2, 2),
    "\"_start": Array(6, 0),
    "\"_end": Array(6, 1),
    "#": Array(8, 2),
    "$": Array(8, 3),
    "%": Array(8, 4),
    "&": Array(4, 4),
    "'": Array(7, 7),
    "(": Array(2, 0),
    ")": Array(2, 1),
    "*": Array(8, 5),
    "+": Array(8, 7),
    ",": Array(3, 3),
    "-": Array(8, 8),
    ".": Array(1, 1),
    "/": Array(8, 6),
    "0": Array(0, 2),
    "1": Array(0, 3),
    "2": Array(0, 4),
    "3": Array(0, 5),
    "4": Array(0, 6),
    "5": Array(1, 2),
    "6": Array(1, 3),
    "7": Array(1, 4),
    "8": Array(1, 5),
    "9": Array(1, 6),
    ":": Array(6, 6),
    ";": Array(5, 5),
    "<": Array(5, 0),
    "=": Array(8, 8),
    ">": Array(5, 1),
    "?": Array(1, 0),
    "@": undefined,
    "[": Array(3, 0),
    "\\": Array('', ''),
    "]": Array(3, 1),
    "^": undefined,
    "_": Array(0, 8),
    "`": undefined,
    "a": Array(7, 2),
    "b": Array(2, 4),
    "c": Array(4, 6),
    "d": Array(2, 7),
    "e": Array(7, 3),
    "f": Array(3, 5),
    "g": Array(2, 8),
    "h": Array(6, 2),
    "i": Array(7, 8),
    "j": Array(5, 8),
    "k": Array(3, 8),
    "l": Array(4, 7),
    "m": Array(5, 4),
    "n": Array(5, 7),
    "o": Array(7, 5),
    "p": Array(3, 4),
    "q": Array(4, 8),
    "r": Array(4, 2),
    "s": Array(3, 6),
    "t": Array(3, 7),
    "u": Array(7, 4),
    "v": Array(2, 5),
    "w": Array(6, 4),
    "x": Array(1, 8),
    "y": Array(6, 8),
    "z": Array(2, 6),
    "{": Array(4, 0),
    "|": undefined,
    "}": Array(4, 1),
    "~": undefined,
    " ": Array(0, 0)
};

// Maps the table coordinates to ordered colors
color_defs = Array('#ffffff', '#000000', '#E22026', '#B64B9B', '#5872B7', '#65CAE2', '#21AC4A', '#D6D624', '#D17C29');

function color_obj_from_coords(inner, outer, letter) {

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    var title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.textContent = letter.toUpperCase();

    // "circle" may be any tag name
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    // Set any attributes as desired
    circle.setAttribute("cx", 8);
    circle.setAttribute("cy", 8);
    circle.setAttribute("r",  5);
    circle.setAttribute("fill", color_defs[outer]);
    circle.setAttribute("stroke-width", 4);
    circle.setAttribute("stroke", color_defs[inner]);

    g.appendChild(title);
    g.appendChild(circle);
    svg.appendChild(g);

    return svg;
}

function color_from_letter(letter) {
    var coords = color_map[letter];
    if (coords !== undefined) {
        return color_obj_from_coords(coords[0], coords[1], letter);
    }
    return letter;
}

var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_TEXT,
  { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
  false
);

var nodes = [];

while(treeWalker.nextNode()) {
    var el = treeWalker.currentNode;
    if (el.nodeType == Node.TEXT_NODE && el.nodeValue.trim() !== '') {
        nodes.push(el);
    }
}

for (var j=0; j<nodes.length; j++) {
    var el = nodes[j],
        temp = el.nodeValue.toLowerCase(),
        len = temp.length,
        out = [];
    try {
        for (var i=0; i<len; i++) {
            var circle = color_from_letter(temp[i]);
            el.parentNode.insertBefore(circle, el);
        }
        el.parentNode.removeChild(el);
    } catch(err) {
        console.log('Could not convert: "'+el.nodeValue+'"');
    }
}

/*
var all_elements = document.getElementsByName("*");
var num_elements = all_elements.length;
alert(num_elements);

for (var j=0; j<num_elements; j++) {
    var el = all_elements[i];
    if (el.nodeType == Node.TEXT_NODE && el.nodeValue.trim() !== '') {
        var temp = el.nodeValue.toLowerCase();
        var len = temp.length;
        var out = [];

        for (var i=0; i<len; i++) {
            var circle = color_from_letter(temp[i]);
            el.parentNode.insertBefore(circle, el);
        }
        el.parentNode.removeChild(el);
    }
}
*/