$(document).ready(function() {
    $('#ask-btn').click(function() {
        activeNode = "<div class='ask block'><div class='yes'>"+addNode+"</div><div class='no'>"+addNode+"</div></div>";
        $('.add').toggleClass('active');
    });
    $('#print-btn').click(function() {
        activeNode = "<div class='print block'></div>";
        $('.add').toggleClass('active');
    });
});

var activeNode = null;
var addNode = "<div class='add' onclick='addClick(this)'></div>";
function withAdd(node) {
    return addNode + node + addNode;
}
function addClick(t) {
    console.log(t);
    if ($(t).hasClass('active')) {
        $('.add').toggleClass('active');
        $(t).replaceWith(withAdd(activeNode));
    }
}
