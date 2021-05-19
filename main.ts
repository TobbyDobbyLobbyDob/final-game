namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Boss_Kind = SpriteKind.create()
    export const Dog = SpriteKind.create()
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
            tiles.placeOnTile(Boss, tiles.getTileLocation(48, 6))
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
            Dog.setBounceOnWall(true)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 6))
            tiles.placeOnTile(Dog, tiles.getTileLocation(42, 6))
            tiles.placeOnTile(Squirrel, tiles.getTileLocation(44, 6))
            Dog.vx = 50
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
            Boss = sprites.create(assets.image`Boss`, SpriteKind.Boss_Kind)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(9.5, 6))
            tiles.placeOnTile(Boss, tiles.getTileLocation(9.5, 2))
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
let Boss: Sprite = null
let UpdateLevels = false
let levels = 0
let Squirrel: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`Hero`, SpriteKind.Player)
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
    88888..8888888888888888....88888.
    87768888777877787778777888867778.
    87777686767876767678767688777778.
    87767767667676676676766786776768.
    8677676767767767677677678676778..
    .877768777686767776867678667768..
    .886668888888888888888888886688..
    .888888866666666666666668877768..
    88677786666666666666666668766778.
    87766686666666666666666668776678.
    87667786666666666666666668677778.
    87777686666666666666666668866888.
    88866886666666666666666668677778.
    87777686666666666666666668776678.
    87667786666666666666666668666778.
    87766786666666666666666668777688.
    88677786666666666666666668766778.
    87766686666666666666666668776678.
    87667786666666666666666668677778.
    87777686666666666666666668866888.
    88866886666666666666666668677778.
    87777686666666666666666668776678.
    87667786666666666666666668666778.
    87766786666666666666666668777688.
    .867778866666666666666668888888..
    .886688888888888888888888866688..
    .867766876768677767686777867778..
    .8776768767767767677677676767768.
    86767768766767667667676676776778.
    87777788676787676767876768677778.
    87776888877787778777877788886778.
    88888..88888888888888888....8888.
    .................................
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
game.showLongText("Welcome to The Hunt. An evil Duck has taken your phone while at the park and you have to go through a series of level to get it back. Will you get your phone back, or fail repeatedly until you do?", DialogLayout.Bottom)
game.onUpdate(function () {
    LevelChange()
    if (mySprite.vx > 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `)
    } else if (mySprite.vx < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `)
    } else {
        mySprite.setImage(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `)
    }
})
game.onUpdate(function () {
    if (levels >= 3) {
        if (Dog.vx > 0) {
            Dog.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . 4 4 4 . . . . 4 4 4 . . 
                . . . 4 5 5 5 e . . e 5 5 5 4 . 
                . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
                . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
                . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
                . . . e e 5 5 5 5 5 5 5 5 e e . 
                . . . . e 5 f 5 5 5 5 f 5 e . . 
                . f f . f 5 5 5 4 4 5 5 5 f . . 
                . f 5 f f 6 5 5 f f 5 5 4 . . . 
                . f 5 5 f 4 6 6 6 6 6 6 f . . . 
                . . f 5 4 5 5 5 5 5 5 5 f . . . 
                . . . f f f 5 f 5 4 5 f . . . . 
                . . . . f f f f f f f . . . . . 
                `)
        } else if (Dog.vx < 0) {
            Dog.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . 4 4 4 . . . . 4 4 4 . . . . 
                . 4 5 5 5 e . . e 5 5 5 4 . . . 
                4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
                4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
                e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
                . e e 5 5 5 5 5 5 5 5 e e . . . 
                . . e 5 f 5 5 5 5 f 5 e . . . . 
                . . f 5 5 5 4 4 5 5 5 f . f f . 
                . . . 4 5 5 f f 5 5 6 f f 5 f . 
                . . . f 6 6 6 6 6 6 4 f 5 5 f . 
                . . . f 5 5 5 5 5 5 5 4 5 f . . 
                . . . . f 5 4 5 f 5 f f f . . . 
                . . . . . f f f f f f f . . . . 
                `)
        } else {
            Dog.setImage(img`
                . . . . 4 4 4 . . . . 4 4 4 . . 
                . . . 4 5 5 5 e . . e 5 5 5 4 . 
                . . 4 5 5 5 5 5 e e 5 5 5 5 5 4 
                . . 4 5 5 4 4 5 5 5 5 4 4 5 5 4 
                . . e 5 4 4 5 5 5 5 5 5 4 4 5 e 
                . . . e e 5 5 5 5 5 5 5 5 e e . 
                . . . . e 5 f 5 5 5 5 f 5 e . . 
                f f . . f 5 5 5 4 4 5 5 5 f . . 
                f 5 f . f 6 5 5 f f 5 5 4 f . . 
                f 5 5 f 4 4 6 6 6 6 6 6 f . . . 
                . f 5 4 4 5 5 5 5 5 5 4 f . . . 
                . . f f 5 5 4 5 5 5 5 5 f . . . 
                . . . f 5 f f 5 f f f 5 f . . . 
                . . . f f . . f f . . f f . . . 
                `)
        }
    }
})
game.onUpdate(function () {
    if (Squirrel.vx > 0) {
        Squirrel.setImage(assets.image`Squirrel`)
    } else if (Squirrel.vx < 0) {
        Squirrel.setImage(img`
            ................................
            .........bb.....................
            .........bb.....................
            .........bb.....................
            ......bbbbbb....................
            ......bbbbbb....................
            ......ffffbb....................
            ......ffbbfb....................
            ......bbbbbb....................
            ...abbbbbbbb....................
            ...bbbbbbbbb.................bb.
            ...bbbbbbbbb................bbb.
            ...1.cccccccccccccccccccc...bbb.
            .....cccccccccccccccccccc..bbbb.
            .....cccccccccccccccccccc.bbbbb.
            .....ccccccccccccccccccccbbbbb..
            .....ccccccccccccccccccccbbbb...
            .....ccccccccccccccccccccbbbb...
            .....cccccccccccccccccccc.......
            .....cccccccccccccccccccc.......
            .....bbb.bbb......bbb.bbb.......
            .....bbb.bbb......bbb.bbb.......
            .....bbb.bbb......bbb.bbb.......
            .....bbb.bbb......bbb.bbb.......
            .....bbb.bbb......bbb.bbb.......
            .....bbb.bbb......bbb.bbb.......
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            `)
    } else {
        Squirrel.setImage(assets.image`Squirrel`)
    }
})
game.onUpdate(function () {
    if (levels == 5) {
        if (Bee.vx > 0) {
            Bee.setImage(img`
                ................................
                ................................
                ................................
                ................................
                .........111.....111............
                ........1111.....1111...........
                ........11111...11111...........
                ........11111...11111...........
                ........111111.111111...........
                ........111111.111111...........
                ..........1111.1111.............
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff555fff5....
                .....5fff555fff555fff555ff25....
                ..fff5fff555fff555fff555fff5....
                .ffff5fff555fff555fff5555555....
                fffff5fff555fff555fff5555555....
                .ffff5fff555fff555fff5555555....
                ..fff5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....f...f.......f...f..........
                .....f...f.......f...f..........
                ....f...f.......f...f...........
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `)
        } else if (Bee.vx < 0) {
            Bee.setImage(assets.image`Bee`)
        } else {
            Bee.setImage(img`
                ................................
                ................................
                ................................
                ................................
                .........111.....111............
                ........1111.....1111...........
                ........11111...11111...........
                ........11111...11111...........
                ........111111.111111...........
                ........111111.111111...........
                ..........1111.1111.............
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff555fff5....
                .....5fff555fff555fff555ff25....
                ..fff5fff555fff555fff555fff5....
                .ffff5fff555fff555fff5555555....
                fffff5fff555fff555fff5555555....
                .ffff5fff555fff555fff5555555....
                ..fff5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....5fff555fff555fff5555555....
                .....f...f.......f...f..........
                .....f...f.......f...f..........
                ....f...f.......f...f...........
                ................................
                ................................
                ................................
                ................................
                ................................
                ................................
                `)
        }
    }
})
