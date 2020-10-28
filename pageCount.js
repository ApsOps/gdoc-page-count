var favicon=new Favico({
    animation:'none'
});

function setPageCountBadge() {
	pageCount = document.getElementsByClassName('jfk-tooltip-contentId')[0].textContent.split('of')[1].trim()
	favicon.badge(pageCount)
}

window.onload = setPageCountBadge
