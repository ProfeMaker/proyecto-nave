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
        ..........22222.........
        ........221111b22.......
        .......2b1111111b2......
        .......21111111112......
        ......2d11111112222.....
        ......2d111dd12111b2....
        ......2b112cd21b1b22....
        ......211111b2b2b22.....
        ......21b1bd2c2222......
        ......2b2b2c2ccc2.......
        ......2222222222........
        .........222222.........
        .........222222.........
        .........2222222..2.....
        ..........222222222.....
        ...........2222222......
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    meteoro.setVelocity(-80, 0)
    meteoro.setPosition(180, randint(0, 112))
})
