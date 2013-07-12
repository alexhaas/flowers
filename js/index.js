$(function() {

	var $game = $('#game');
	var $flowers = $('#flowers');
	var $flowerCount = $('#flowerCount');

	var piggyBank = 0;

	var flowerCount = 0;
	var preparedFlowersCount = 0;
	var preparedFlowersRate = Math.random() * 2.50 + 1.50;

	var $prepareFlowersButton = $('<button />').text('prepare a dozen flowers');
	var $preparedFlowers = $('<div>you have prepared <span id="preparedFlowersCount">0</span> dozen flowers.</div>');

	var $sellPreparedFlowersButton = $('<button />').text('sell a dozen flowers');

	var $piggyBank = $('<div>you have <span id="piggyBankCount">$0.00</span> in your piggy bank.</div>');

	function incrementFlowers() {
		flowerCount++;
		$flowerCount.text(flowerCount);
		// reveal option to prepare flowers
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
		// reveal option to sell flowers
		if (preparedFlowersCount >= 3) {
			$sellPreparedFlowersButton.prop('disabled', false);
			if (!$sellPreparedFlowersButton.is(':visible')) {
				$game.append($sellPreparedFlowersButton);
			}
		}
		if (preparedFlowersCount >= 1) {
			$sellPreparedFlowersButton.prop('disabled', false);
		}
	});

	$sellPreparedFlowersButton.on('click', function() {
		if (!$piggyBank.is(':visible')) {
			$game.append($piggyBank);
		}
		piggyBank += preparedFlowersRate;
		$('#piggyBankCount').text($.money(piggyBank));
		preparedFlowersCount--;
		$('#preparedFlowersCount').text(preparedFlowersCount);
		if (preparedFlowersCount < 1) {
			$sellPreparedFlowersButton.prop('disabled', true);
		}
	});

	$.extend({
		money: function() {
			return '$' + arguments[0].toFixed(2);
		}
	});

});