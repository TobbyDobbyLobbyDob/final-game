scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 5))
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    levels += 1
    UpdateLevels = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (doubleJump) {
        mySprite.vy += -80
        doubleJump = false
    }
    if (mySprite.vy == 0) {
        mySprite.vy = -100
        doubleJump = true
    }
})
function LevelChange () {
    if (UpdateLevels) {
        if (levels == 2) {
            tiles.setTilemap(tilemap`level3`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            UpdateLevels = false
        } else if (levels == 3) {
            tiles.setTilemap(tilemap`level7`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            UpdateLevels = false
        } else if (levels == 4) {
            tiles.setTilemap(tilemap`level0`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            UpdateLevels = false
        } else if (levels == 5) {
            tiles.setTilemap(tilemap`level14`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            UpdateLevels = false
        } else if (levels == 6) {
            tiles.setTilemap(tilemap`level15`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(9.5, 6))
            UpdateLevels = false
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 5))
    info.changeLifeBy(-1)
})
let doubleJump = false
let UpdateLevels = false
let levels = 0
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`BG`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
tiles.setTilemap(tilemap`level1`)
levels = 1
UpdateLevels = false
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
doubleJump = false
info.setLife(6)
game.onUpdate(function () {
    LevelChange()
})
