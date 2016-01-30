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
    $('#for-btn').click(function() {
        activeNode = "<div class='for block'>Repeat <input class='val for-inp' type='text' value='2'> times<div class='loop'>"+addNode+"</div></div>";
        $('.add').toggleClass('active');
    });
    $('#repeat-btn').click(function() {
        var options = ['num==0'];
        activeNode = "<div class='repeat block'><select class='cond'>";
        options.forEach(function(each) {
            activeNode += "<option>" + each + "</option>";
        });
        activeNode += "</select><div class='loop'>"+addNode+"</div></div>";
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
