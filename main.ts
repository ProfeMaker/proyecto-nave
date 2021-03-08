controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bala = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . f 2 f f f f f f f . . . 
        . . f f f 2 f d d d d d d f . . 
        . f 4 4 4 2 d d d d d d d f . . 
        . . f f f 2 f d d d d d d f . . 
        . . . . f 2 f f f f f f f . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, nave, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.sonar.play()
})
let meteoro: Sprite = null
let bala: Sprite = null
let nave: Sprite = null
nave = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f f . . 
    . . f e e e 4 d d d d f d d f . 
    . . . f f e e 4 e e e f b b f . 
    . . . . f 2 2 2 4 d d e b b f . 
    . . . . e 2 2 2 e d d e b f . . 
    . . . . f 4 4 4 f e e f f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
nave.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(nave, 156, 156)
info.setLife(3)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    meteoro = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........8888..........
        ........88111188........
        .......8b11111188.......
        .......81111111d8.......
        ......8d1111111dd8......
        ......8d111111ddd8......
        ......8d111dddddd8......
        ......8d1d8bddddb8......
        ......8bdd8cdbbbc8......
        .......811111bbc8.......
        .......81b188888........
        .......8b8c111b8........
        ........881b1b88........
        .........8b8b888.8......
        ..........88888888......
        ............88888.......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    meteoro.setVelocity(-80, 0)
    meteoro.setPosition(180, randint(0, 112))
})
