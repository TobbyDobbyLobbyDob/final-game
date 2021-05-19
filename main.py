@namespace
class SpriteKind:
    Boss = SpriteKind.create()
    Boss_Kind = SpriteKind.create()
    Dog = SpriteKind.create()

def on_overlap_tile(sprite, location):
    tiles.place_on_tile(sprite, tiles.get_tile_location(0, 5))
    info.change_life_by(-1)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    global levels, UpdateLevels
    levels += 1
    UpdateLevels = True
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile2)

def on_a_pressed():
    global doubleJump
    if doubleJump:
        mySprite.vy += -80
        doubleJump = False
    if mySprite.vy == 0:
        mySprite.vy = -100
        doubleJump = True
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def LevelChange():
    global UpdateLevels, Dog2, Bee, Boss2
    if UpdateLevels:
        if levels == 2:
            tiles.set_tilemap(tilemap("""
                level3
            """))
            game.splash("Level 2")
            tiles.place_on_tile(Squirrel, tiles.get_tile_location(12, 6))
            tiles.place_on_tile(Boss2, tiles.get_tile_location(48, 6))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 6))
            UpdateLevels = False
        elif levels == 3:
            tiles.set_tilemap(tilemap("""
                level7
            """))
            game.splash("Level 3")
            Dog2 = sprites.create(img("""
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
                """),
                SpriteKind.enemy)
            Dog2.set_bounce_on_wall(True)
            tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 6))
            tiles.place_on_tile(Dog2, tiles.get_tile_location(42, 6))
            tiles.place_on_tile(Squirrel, tiles.get_tile_location(44, 6))
            Dog2.vx = 50
            UpdateLevels = False
        elif levels == 4:
            tiles.set_tilemap(tilemap("""
                level0
            """))
            game.splash("Level 4")
            tiles.place_on_tile(Dog2, tiles.get_tile_location(27, 6))
            tiles.place_on_tile(Squirrel, tiles.get_tile_location(21, 6))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 6))
            UpdateLevels = False
        elif levels == 5:
            tiles.set_tilemap(tilemap("""
                level14
            """))
            game.splash("Level 5")
            Bee = sprites.create(assets.image("""
                Bee
            """), SpriteKind.enemy)
            tiles.place_on_tile(Dog2, tiles.get_tile_location(11, 6))
            tiles.place_on_tile(Squirrel, tiles.get_tile_location(24, 6))
            tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 6))
            tiles.place_on_tile(Bee, tiles.get_tile_location(10, 1))
            Bee.follow(mySprite)
            UpdateLevels = False
        elif levels == 6:
            tiles.set_tilemap(tilemap("""
                level15
            """))
            game.splash("Final Level")
            Bee.destroy()
            Dog2.destroy()
            Squirrel.destroy()
            Boss2 = sprites.create(assets.image("""
                Boss
            """), SpriteKind.Boss_Kind)
            tiles.place_on_tile(mySprite, tiles.get_tile_location(9.5, 6))
            tiles.place_on_tile(Boss2, tiles.get_tile_location(9.5, 2))
            UpdateLevels = False

def on_overlap_tile3(sprite, location):
    tiles.place_on_tile(sprite, tiles.get_tile_location(0, 5))
    info.change_life_by(-1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_water,
    on_overlap_tile3)

def on_on_overlap(sprite, otherSprite):
    info.change_life_by(-1)
    tiles.place_on_tile(sprite, tiles.get_tile_location(0, 5))
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

Bee: Sprite = None
Dog2: Sprite = None
doubleJump = False
Boss2: Sprite = None
UpdateLevels = False
levels = 0
Squirrel: Sprite = None
mySprite: Sprite = None
mySprite = sprites.create(assets.image("""
    Hero
"""), SpriteKind.player)
scene.set_background_image(assets.image("""
    BG
"""))
scene.camera_follow_sprite(mySprite)
controller.move_sprite(mySprite, 100, 0)
mySprite.ay = 200
tiles.set_tilemap(tilemap("""
    level1
"""))
Squirrel = sprites.create(assets.image("""
    Squirrel
"""), SpriteKind.enemy)
levels = 1
UpdateLevels = False
tiles.place_on_tile(Boss2, tiles.get_tile_location(30, 6))
tiles.place_on_tile(mySprite, tiles.get_tile_location(0, 6))
tiles.place_on_tile(Squirrel, tiles.get_tile_location(11, 6))
Squirrel.set_bounce_on_wall(True)
Squirrel.vx = 50
doubleJump = False
info.set_life(6)
game.set_dialog_frame(img("""
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
"""))
game.set_dialog_cursor(img("""
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
"""))
game.show_long_text("Welcome to ", DialogLayout.BOTTOM)

def on_on_update():
    LevelChange()
    if mySprite.vx > 0:
        mySprite.set_image(img("""
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
        """))
    elif mySprite.vx < 0:
        mySprite.set_image(img("""
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
        """))
    else:
        mySprite.set_image(img("""
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
        """))
game.on_update(on_on_update)

def on_on_update2():
    if Dog2.vx > 0:
        Dog2.set_image(img("""
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
        """))
    elif Dog2.vx < 0:
        Dog2.set_image(img("""
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
        """))
    else:
        Dog2.set_image(img("""
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
        """))
game.on_update(on_on_update2)
