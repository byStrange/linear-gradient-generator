const app_ = {
    color: 'linear-gradient(35deg, rgb(255,0,0), rgb(0,255,0))'
};

function replaceItem() {
    app_.color = app_.color.replace('linear-gradient', '<span class="st-lg">$&</span>');
    app_.color = app_.color.replace(/[(]/gi, '<span class="st-br" data-open-br="true">$&</span>');
    app_.color = app_.color.replace(/[)]/gi, '<span class="st-br" data-close-br="true">$&</span>');
    app_.color = app_.color.replace(/rgb/gi, '<span class="st-rgb" id="color">$&</span>');
    app_.color = app_.color.replace(/[0-9]/gi, '<span class="st-num">$&</span>');
    app_.color = app_.color.replace(/deg/gi, '<span class="st-deg">$&</span>');
    app_.color = app_.color.replace(/[,]/gi, '<span class="st-char">$&</span>');
}
replaceItem();

var a;

function color() {
    a = `linear-gradient(35deg, rgb(${round(random(255))},${round(random(255))}, ${round(random(255))}), rgb(${round(random(255))},${round(random(255))}, ${round(random(255))}))`;
    return a;
};

function setColor() {
    document.body.style.background = color();
    app_.color = a;
    replaceItem();
    $color.innerHTML = app_.color;
};
$generate.on('click', function() {
    setColor()
});
$copier.on('click', function() {
    t = document.createElement('input');
    t.value = $color.innerText;
    document.body.appendChild(t);
    t.select();
    document.execCommand('copy');
    t.remove();
});
$result.on({
    mousedown: function() {
        $main.css('opacity', 0);

    },
    mouseup: function() {
        $main.css('opacity', 1)
    },
})
setColor();

function _f_() {
    $g.css({
        width: $row.css('width')
    })
    $copier.css({
    	height: $row.css('height')
    })
}
window.onresize = _f_
window.onclick = _f_
window.onresize()
