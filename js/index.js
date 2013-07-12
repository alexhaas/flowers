$(function() {

	var $game = $('#game');
	var $flowers = $('#flowers');
	var $flowerCount = $('#flowerCount');

	var flowerCount = 0;
	var preparedFlowersCount = 0;

	var $prepareFlowersButton = $('<button />');
	$prepareFlowersButton.text('prepare a dozen flowers');

	var $preparedFlowers = $('<div>you have prepared <span id="preparedFlowersCount">0</span> dozen flowers.</div>');

	function incrementFlowers() {
		flowerCount++;
		$flowerCount.text(flowerCount);
		if (flowerCount >= 12) {
			$prepareFlowersButton.prop('disabled', false);
			if (!$prepareFlowersButton.is(':visible')) {
				$game.append($prepareFlowersButton);
			}
		}
	}

	setInterval(incrementFlowers, 1000);

	$prepareFlowersButton.on('click', function() {
		if (!$preparedFlowers.is(':visible')) {
			$game.append($preparedFlowers);
		}
		flowerCount -= 12;
		$flowerCount.text(flowerCount);
		preparedFlowersCount++;
		$('#preparedFlowersCount').text(preparedFlowersCount);
		if (flowerCount < 12) {
			$prepareFlowersButton.prop('disabled', true);
		}
	});

});