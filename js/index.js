function render(pattern, getColor, scale = 100) {
	const logo = document.getElementById('rs-logo');
	logo.style.display = 'none';

	const canvas = document.querySelector("canvas");
	const ctx = canvas.getContext("2d");

	const width = pattern[0].length;
	const height = pattern.length;

	canvas.width = width * scale;
	canvas.height = height * scale;

	for (let row = 0; row < height; row += 1) {
		for (let col = 0; col < width; col += 1) {
			ctx.fillStyle = getColor(pattern[row][col]);
			ctx.fillRect(col * scale, row * scale, scale, scale);
		}
	}

	canvas.style.display = 'block';
}

function renderSquare() {
    render(yellowSquare, color => '#' + color);
}

function showCodeWarsLogo() {
    render(codewarsLogo, color => 'rgba(' + color + ')');
}

function showRsLogo() {
	const canvas = document.getElementById('canvas');
	canvas.style.display = 'none';

	const logo = document.getElementById('rs-logo');
	logo.style.display = 'block';
}
