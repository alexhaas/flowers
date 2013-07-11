$(function() {

	var $flowers = $('#flowers');
	var $flowerCount = $('#flowerCount');

	function incrementFlowers() {
		$flowerCount.text(parseInt($flowerCount.text(), 10) + 1);
	}

	setInterval(incrementFlowers, 2000);

});