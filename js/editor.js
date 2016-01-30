$(document).ready(function() {
    $('#ask-btn').click(function() {
        activeNode = "<div class='ask block'><input class='cond' type='text' value='1==0'>?<div class='yes'>"+addNode+"</div><div class='no'>"+addNode+"</div></div>";
        $('.add').toggleClass('active');
    });
    $('#for-btn').click(function() {
        activeNode = "<div class='for block'>Repeat <input class='val for-inp' type='text' value='2'> times<div class='loop'>"+addNode+"</div></div>";
        $('.add').toggleClass('active');
    });
    $('#repeat-btn').click(function() {
        activeNode = "<div class='repeat block'><input class='cond' type='text' value='1==0'>:<div class='loop'>"+addNode+"</div></div>";
        $('.add').toggleClass('active');
    });
    $('#print-btn').click(function() {
        activeNode = "<div class='print block'></div>";
        $('.add').toggleClass('active');
    });
    $('#assign-btn').click(function() {
        activeNode = "<div class='assign block'><input class='val' type='text' placeholder='post-it note = value' val=''></div>";
        $('.add').toggleClass('active');
    })
    $('#editor').html(addNode);
    $('#del-btn').click(function() {
        $('#editor').html(addNode);
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
