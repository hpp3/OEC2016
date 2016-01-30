$(document).ready(function() {
    $('#ask-btn').click(function() {
        activeNode = "<div class='ask block'><span class='delete' onclick='delClick(this)'>X</span><input class='cond' type='text' value='1==0'>?<div class='yes'>"+addNode+"</div><div class='no'>"+addNode+"</div></div>";
        toggleActive();
    });
    $('#for-btn').click(function() {
        activeNode = "<div class='for block'><span class='delete' onclick='delClick(this)'>X</span>Repeat <input class='val for-inp' type='text' value='2'> times<div class='loop'>"+addNode+"</div></div>";
        toggleActive();
    });
    $('#repeat-btn').click(function() {
        activeNode = "<div class='repeat block'><span class='delete' onclick='delClick(this)'>X</span><input class='cond' type='text' value='1==0'>:<div class='loop'>"+addNode+"</div></div>";
        toggleActive();
    });
    $('#print-btn').click(function() {
        activeNode = "<div class='print block'><span class='delete' onclick='delClick(this)'>X</span></div>";
        toggleActive();
    });
    $('#recipe-btn').click(function() {
        activeNode = "<div class='recipe block'><span class='delete' onclick='delClick(this)'>X</span>define <input class='name' type='text' placeholder='subRoutine' value=''>:<div class='body'>"+addNode+"</div></div>";
        toggleActive();
    });
    $('#call-btn').click(function() {
        activeNode = "<div class='call block'><span class='delete' onclick='delClick(this)'>X</span>Use Subroutine <input class='name' type='text' placeholder='subRoutine' value=''></div>";
        toggleActive();
    });
    $('#assign-btn').click(function() {
        activeNode = "<div class='assign block'><span class='delete' onclick='delClick(this)'>X</span><input class='val' type='text' placeholder='post-it note = value' value=''></div>";
        toggleActive();
    });
    $('#editor').html(addNode);
    $('#del-btn').click(function() {
        $('#editor').html(addNode);
    });
});

var activeNode = null;
var active = false;
var addNode = "<div class='add' onclick='addClick(this)'></div>";

function toggleActive() {
    if (!active) {
        $('.add').toggleClass('active');
        active = true;
    }
}
function withAdd(node) {
    return addNode + node + addNode;
}
function addClick(t) {
    if ($(t).hasClass('active')) {
        $('.add').toggleClass('active');
        active = false;
        $(t).replaceWith(withAdd(activeNode));
    }
}
function delClick(t) {
    $(t).parent().prev().remove(); //remove extra add
    $(t).parent().remove();
}
