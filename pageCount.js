var favicon=new Favico({
    animation:'none'
});

function setPageCountBadge() {
	pageCount = document.getElementsByClassName('docs-print-block kix-page-bottom').length
	favicon.badge(pageCount)
}

window.onload = setInterval(setPageCountBadge, 1000)
