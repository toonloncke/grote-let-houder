input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        let tileDisplay: Kitronik_Zip_Tile.ZIPTileDisplay = null
        tileDisplay.setMatrixColor(5, 5, Kitronik_Zip_Tile.colors(ZipLedColors.Yellow))
        tileDisplay.show()
        basic.pause(200)
        tileDisplay.clear()
    }
})
basic.forever(function () {
	
})
