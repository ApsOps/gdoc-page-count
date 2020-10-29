var favicon=new Favico({
    animation:'none'
});

function setPageCountBadge() {
	pageCount = document.getElementsByClassName('docs-print-block kix-page-bottom').length
	favicon.badge(pageCount)
}

window.onload = setPageCountBadge
