namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Boss_Kind = SpriteKind.create()
}
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
            game.splash("Level 2")
            tiles.placeOnTile(Squirrel, tiles.getTileLocation(12, 6))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            UpdateLevels = false
        } else if (levels == 3) {
            tiles.setTilemap(tilemap`level7`)
            game.splash("Level 3")
            Dog = sprites.create(img`
                . . 4 4 4 . . . . 4 4 4 . . . . 
                . 4 5 5 5 e . . e 5 5 5 4 . . . 
                4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
                4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
                e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
                . e e 5 5 5 5 5 5 5 5 e e . . . 
                . . e 5 f 5 5 5 5 f 5 e . . . . 
                . . f 5 5 5 4 4 5 5 5 f . . f f 
                . . f 4 5 5 f f 5 5 6 f . f 5 f 
                . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
                . . . f 4 5 5 5 5 5 5 4 4 5 f . 
                . . . f 5 5 5 5 5 4 5 5 f f . . 
                . . . f 5 f f f 5 f f 5 f . . . 
                . . . f f . . f f . . f f . . . 
                `, SpriteKind.Enemy)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            tiles.placeOnTile(Dog, tiles.getTileLocation(42, 6))
            tiles.placeOnTile(Squirrel, tiles.getTileLocation(34, 6))
            UpdateLevels = false
        } else if (levels == 4) {
            tiles.setTilemap(tilemap`level0`)
            game.splash("Level 4")
            tiles.placeOnTile(Dog, tiles.getTileLocation(27, 6))
            tiles.placeOnTile(Squirrel, tiles.getTileLocation(21, 6))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            UpdateLevels = false
        } else if (levels == 5) {
            tiles.setTilemap(tilemap`level14`)
            game.splash("Level 5")
            Bee = sprites.create(assets.image`Bee`, SpriteKind.Enemy)
            tiles.placeOnTile(Dog, tiles.getTileLocation(11, 6))
            tiles.placeOnTile(Squirrel, tiles.getTileLocation(24, 6))
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            tiles.placeOnTile(Bee, tiles.getTileLocation(10, 1))
            Bee.follow(mySprite)
            UpdateLevels = false
        } else if (levels == 6) {
            tiles.setTilemap(tilemap`level15`)
            game.splash("Final Level")
            Bee.destroy()
            Dog.destroy()
            Squirrel.destroy()
            tiles.placeOnTile(mySprite, tiles.getTileLocation(9.5, 6))
            UpdateLevels = false
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 5))
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(sprite, tiles.getTileLocation(0, 5))
})
let Bee: Sprite = null
let Dog: Sprite = null
let doubleJump = false
let UpdateLevels = false
let levels = 0
let Squirrel: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
let Boss = sprites.create(assets.image`Boss`, SpriteKind.Boss_Kind)
scene.setBackgroundImage(assets.image`BG`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 200
tiles.setTilemap(tilemap`level1`)
Squirrel = sprites.create(assets.image`Squirrel`, SpriteKind.Enemy)
levels = 1
UpdateLevels = false
tiles.placeOnTile(Boss, tiles.getTileLocation(30, 6))
tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
tiles.placeOnTile(Squirrel, tiles.getTileLocation(11, 6))
Squirrel.setBounceOnWall(true)
Squirrel.vx = 50
doubleJump = false
info.setLife(6)
game.setDialogFrame(img`
    999999999999999999999999999999999999999999999999
    999988899999999999998889999999999999888999999999
    998888888999888899888888899988889988888889998889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988888888888888888888888888888888888888888888889
    988688888888888888888888888888888888888886888889
    988688888888688888888888888888888868888866888889
    988668888888668888888888888888888868888886888689
    966688888888688888888888888688888866888866688689
    986668888886668888688888888688888668888866886689
    988666888888688888688888886668888866888666688689
    966688888866666888668888886688888866688866886669
    986666888866668886666888866666886668888666686689
    986666888866668888668888886688888666888666666669
    966668888666666886666888866666886666866666666669
    986688886666668886666888666668886666666666666669
    966666688666666666666666666666666666666666666669
    966666886666666666666666666666666666666666666669
    966666666666666666666666666666666666666666666669
    999999999999999999999999999999999999999999999999
    `)
game.setDialogCursor(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
game.showLongText("Welcome to ", DialogLayout.Bottom)
game.onUpdate(function () {
    LevelChange()
})
