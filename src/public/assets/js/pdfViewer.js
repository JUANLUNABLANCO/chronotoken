'use strict';

$(document).ready(function () {
	var myState = {
		pdf: null,
		currentPage: 1,
		zoom: 1,
	};

	var currentPageInput = document.getElementById('current_page');
	var goPreviousBtn = document.getElementById('go_previous');
	var goNextBtn = document.getElementById('go_next');
	var zoomInBtn = document.getElementById('zoom_in');
	var zoomOutBtn = document.getElementById('zoom_out');
	var currentZoomInput = document.getElementById('current_zoom');

	// hacerlo para recibir cualquier pdf desde cualquier botón
	pdfjsLib.getDocument('./assets/documents/WHITEPAPER_CHRONOTOKEN.pdf').then((pdf) => {
		myState.pdf = pdf;
		render();
	});
	// pages control
	goPreviousBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.currentPage == 1) return;
		myState.currentPage -= 1;
		currentPageInput.value = myState.currentPage;
		render();
	});
	goNextBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.currentPage > myState.pdf._pdfInfo.numPages) return;

		myState.currentPage += 1;
		currentPageInput.value = myState.currentPage;
		render();
	});
	currentPageInput.addEventListener('change', (e) => {
		console.log('change');
		if (myState.pdf == null) return;

		var desiredPage = currentPageInput.valueAsNumber;

		if (desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
			myState.currentPage = desiredPage;
			currentPageInput.value = desiredPage;
			render();
		} else {
			currentPageInput.value = 1;
			myState.currentPage = 1;
			render();
		}
	});
	// zoom control
	zoomInBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.zoom == 2) return;
		myState.zoom += 0.25;
		currentZoomInput.value = 100 * myState.zoom;
		render();
	});
	zoomOutBtn.addEventListener('click', (e) => {
		if (myState.pdf == null || myState.zoom == 0.25) return;
		myState.zoom -= 0.25;
		currentZoomInput.value = 100 * myState.zoom;
		render();
	});

	function render() {
		myState.pdf.getPage(myState.currentPage).then((page) => {
			// canvasPdf
			var canvasPdf = document.getElementById('pdf_renderer');
			var ctx = canvasPdf.getContext('2d');
			// zoom
			var viewport = page.getViewport(myState.zoom);
			// canvasPdf measures
			canvasPdf.width = viewport.width;
			canvasPdf.height = viewport.height;

			// render
			page.render({
				canvasContext: ctx,
				viewport: viewport,
			});
		});
	}
});
