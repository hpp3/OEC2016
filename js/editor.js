$(document).ready(function() {
    $('#ask-btn').click(function() {
        var options = ['1==1', '1==0'];
        activeNode = "<div class='ask block'><select class='cond'>";
        options.forEach(function(each) {
            activeNode += "<option>" + each + "</option>";
        });
        activeNode += "</select>?<div class='yes'>"+addNode+"</div><div class='no'>"+addNode+"</div></div>";
        $('.add').toggleClass('active');
    });
    $('#repeat-btn').click(function() {
        var options = ['num=0?'];
        activeNode = "<div class='repeat block'><select class='cond'>";
        options.forEach(function(each) {
            activeNode += "<option>" + each + "</option>";
        });
        activeNode += "</select>?<div class='no'>"+addNode+"</div></div>";
        $('.add').toggleClass('active');
    });
    $('#print-btn').click(function() {
        activeNode = "<div class='print block'><input class='val' type='text' value='1'></div>";
        $('.add').toggleClass('active');
    });
});

var activeNode = null;
var addNode = "<div class='add' onclick='addClick(this)'></div>";
function withAdd(node) {
    return addNode + node + addNode;
}
function addClick(t) {
    if ($(t).hasClass('active')) {
        $('.add').toggleClass('active');
        $(t).replaceWith(withAdd(activeNode));
    }
}
