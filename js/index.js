$(function() {

	var $game = $('#game');
	var $flowers = $('#flowers');
	var $flowerCount = $('#flowerCount');

	var $prepareFlowersButton = $('<button />');
	$prepareFlowersButton.text('prepare a dozen flowers');

	var $preparedFlowers = $('<div>you have prepared <span id="preparedFlowersCount">0</span> dozen flowers.</div>');

	function incrementFlowers() {
		var flowerCount = parseInt($flowerCount.text(), 10);
		$flowerCount.text(flowerCount + 1);
		if (flowerCount >= 12) {
			$prepareFlowersButton.prop('disabled', false);
			if (!$prepareFlowersButton.is(':visible')) {
				$game.append($prepareFlowersButton);
			}
		}
	}

	setInterval(incrementFlowers, 500);

	$prepareFlowersButton.on('click', function() {
		if (!$preparedFlowers.is(':visible')) {
			$game.append($preparedFlowers);
		}
		$('#preparedFlowersCount').text(parseInt($('#preparedFlowersCount').text(), 10) + 1);
		var flowerCount = parseInt($flowerCount.text(), 10);
		$flowerCount.text(flowerCount - 12);
		if (flowerCount < 12) {
			$prepareFlowersButton.prop('disabled', true);
		}
	});

});