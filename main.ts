controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (info.life() > 0) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
        animation.runImageAnimation(
        mySprite,
        [img`
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb555555ff155555c
            ......cb55555555ff55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb13bbc.
            ...cccd55ddddd555b3335c.
            .....bdddddddddd55b335c.
            ..cccdddddb55bbddd5555c.
            ..cccdddddb555bbbbcccc..
            ...ccddddddb5555cbcdc...
            ccccbdddddd5cb55cbcc....
            cddddddddd5555ccbbc.....
            .cddddddbdd555bbbcc.....
            ..ccdddbbbdd55cbcdc.....
            ....ccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            .........ccc............
            .........cccccccc.......
            ......cc..cc55555cc.....
            ......cccc555555555c....
            ......ccb55555555555c...
            ...cc..b55555ff155555c..
            ...cccb5555555ff55d55c..
            ....ccb55555d55555555c..
            .....b55555d5555d5555c..
            ..cc.b555ddd55555bbbbc..
            ..cccd55ddddd5555d555c..
            ...ccdd5dbdddbbbd555c...
            ....bdddb555bbbbbccc....
            ..cccdddb555cbbbbbbc....
            ...ccddddb555cbbbbbbc...
            ....cdddddb555cbbbbbc...
            ...ccddddddb55cbbbbbcc..
            ..ccbddddd55bcbbbbbbcc..
            ccdddddddd5555bbbbbbc...
            cdddddddbdd555bbbbbc....
            .ccddddbbbdd55cbbccc....
            ...cccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            ........ccc.............
            ........cccccccc........
            .....cc..cc55555cc......
            .....cccc555555555c.....
            .....ccb55555555555c....
            ...cc.b5555bcc555555c...
            ...ccb55555555c55d55c...
            ....cb5555dd55555555c...
            .....5555dd5555d5555c...
            ..cc.555dd555555dbbbc...
            ..ccc55ddd555555d555c...
            ...ccd5dbdd5555d555c....
            ....bdddb555bbbbbccc....
            ..cccdddb555cbbbbbbbc...
            ...ccddddb555cbbbbbbbc..
            ....cdddddb555cbbbbbbc..
            ...ccddddddb55cbbbbbbcc.
            ...cbddddd55bcbbbbbbbcc.
            ..cbdddddd5555bbbbbbbc..
            .cddddddbdd555bbbbbbc...
            cddddddbbbdd55cbbccc....
            ccccccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd5bbbb335c.
            ...ccbdddddddd5bbbb335c.
            .ccccddddddddd55bbb335c.
            cdcccdddddb55bb5bb3335c.
            cddbddddddb555bb5b3335c.
            cddddddddddb5555b53335c.
            ccddddddbd55bb55c5555c..
            .ccddddbbbdd55cccbccc...
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd5bbbb335c.
            ...ccbdddddddd5bbbb335c.
            .ccccddddddddd55bb3335c.
            cdcccdddddb55bb55b3335c.
            cddbddddddb555bb553335c.
            cddddddddddb5555b5555c..
            ccddddddbd55bb55cbccc...
            .ccddddbbbdd55ccbbc.....
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd55bbb335c.
            ...ccbddddddddd5bb3335c.
            .ccccdddddddddd55b3335c.
            cdcccdddddb55bbd553335c.
            cddbddddddb555bb55555c..
            cddddddddddb5555bbccc...
            ccddddddbd55bb55cbc.....
            .ccddddbbbdd55ccbdc.....
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `],
        100,
        false
        )
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(true)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
    99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
    99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
    9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
    999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
    99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
    9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
    1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
    d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
    dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
    ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
    d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
    ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
    111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
    d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
    ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
    bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
    bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
mySprite = sprites.create(img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    .....ccb55555555ff55d55c
    ......b5555555555555555c
    ...c..b555d55555bb13bbc.
    ...cccd55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `, SpriteKind.Player)
mySprite.setPosition(16, 60)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `, SpriteKind.Enemy)
mySprite2.setPosition(144, 110)
let vy = 100
animation.runImageAnimation(
mySprite,
[img`
    ........................
    ........................
    ...........cc...........
    ...........cccc.........
    .......cc...ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    .....ccb55555555ff55d55c
    ......b5555555555555555c
    ...c..b555d55555bb13bbc.
    ...cccd55ddddd55bb3335c.
    ....cbdddddddddd55b335c.
    ..cccdddddb55bdddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddddcb55cbcc....
    cddddddddd55dbccbbc.....
    cbdddddddd555dbbbcc.....
    .ccbdddbbdd555bbcdbcc...
    ...cccbbbbdd55ccdddbc...
    ......cccbdddbccccccc...
    ........cdd555dc........
    `,img`
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    .....bdddddddddd55b335c.
    ..cccdddddb55bbddd5555c.
    ..cccdddddb555bbbbcccc..
    ...ccddddddb5555cbcdc...
    ccccbdddddd5cb55cbcc....
    cddddddddd5555ccbbc.....
    .cddddddbdd555bbbcc.....
    ..ccdddbbbdd55cbcdc.....
    ....ccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddbb55555bccc...
    ...ccdddddddcc555bcc....
    ...ccddddddddbcccbcccc..
    .ccbddddddd55dbbbbc55c..
    ccddddddddd555dbbcc5c...
    cddddddbbbdd555bbccc....
    .ccddddbbbbdd55bcc......
    ...cccbbbbbdddbcddcc....
    .....cccccdd555dcccc....
    ..........cccccc........
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddbb55555bccc...
    ...ccdddddddcc555bcc....
    .ccccdddddddddcccbcccc..
    .cdcdddddddd55dbbbc55c..
    .cdddddddddd555dccc5c...
    .cbddddbbbbdd5d555cc....
    ..cbdddbbbbbdd5555......
    ...cccbbbbbbd5555c......
    .....cccccccc555c.......
    .............ccc........
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........ccc.ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....ccc.b55555ff15555c.
    .....cccb5555555ff55555c
    ......cb555555555555d55c
    ....c.b555555555bb55555c
    ....ccb555ddd5555b13bbc.
    ....ccd55ddddd555b3335c.
    .....cdd5ddddddd55b335c.
    ...c.bddddb555bbbd555c..
    ...ccdddddb555555bccc...
    ..cccddddddcc5555bcc....
    .cdccddddddddbcccbcccc..
    .cddbdddddddddbbbbc55c..
    .cdddddddddd55dbbbc5c...
    .cbddddbbbbd55ddbccc....
    ..cbdddbbbbd555dccc.....
    ...cccbbbbbbddd555c.....
    .....ccccccbd55555c.....
    ...........cc5555c......
    `,img`
    ........................
    ............cc..........
    ............ccc.........
    ........cc..ccccccc.....
    ........ccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb555555ff155555c
    ......cb55555555ff55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb13bbc.
    ...cccd55ddddd555b3335c.
    ....ccdd5ddddddd55b335c.
    .....bddddb55bdddd5555c.
    ..cccdddddb55bbbbbcccc..
    .ccccddddddb5555cbcccc..
    .cdccdddddddc555cbc55c..
    .cdddddddddddcccbbc5c...
    .cbddddddd55dbbbbccc....
    .ccbdddddd555dbbbcbc....
    ..cccddbbbd555bbccc.....
    ....ccbbbbbd555cc.......
    ......ccccbddddbc.......
    ..........cd5555dc......
    `],
100,
true
)
animation.runImageAnimation(
mySprite2,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c c . 
    . c b b c 5 5 b b d d d d c d c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c . 
    . . c c c c c b 5 5 b c c c . . 
    . . c b b b c d 5 5 b c . . . . 
    `,img`
    . . . . c c c c c . . . . . . . 
    . . c c 5 5 5 5 5 c . . . . . . 
    . c 5 5 5 5 1 f 5 5 c . . . . . 
    c 5 5 5 5 5 f f 5 5 5 c . . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 c . . . 
    c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . c 5 5 5 5 b 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . . c c c b 5 5 b d d d c . 
    . . . . . c d 5 5 b b c c c . . 
    . . . . c c c c c c c . . . . . 
    . . . . c b b b c . . . . . . . 
    `,img`
    . . . . c c c c c . . . . . . . 
    . . c c 5 5 5 5 5 c . . . . . . 
    . c 5 5 5 5 1 f 5 5 c . . . . . 
    c 5 5 5 5 5 f f 5 5 5 c . . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 c . . . 
    c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
    c 5 5 5 5 5 5 5 5 5 d d d c . . 
    . c 5 5 5 5 b 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . . c c b 5 5 b d d d c c . 
    . . . . c d 5 5 b b c c c . . . 
    . . . . c c c c c c c . . . . . 
    . . . . c b b b c . . . . . . . 
    `,img`
    . . . . c c c c c . . . . . . . 
    . . c c 5 5 5 5 5 c . . . . . . 
    . c 5 5 5 5 1 f 5 5 c . . . . . 
    c 5 5 5 5 5 f f 5 5 5 c . . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 c . . . 
    c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
    c 5 5 5 5 5 5 5 5 5 d d d c . . 
    . c 5 5 5 5 b 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c . 
    . c c c c c b b d d d d d d c c 
    . . . c c 5 5 b 5 5 d d d d d c 
    . . . . c b 5 5 b b c c c c c c 
    . . . . c c c c c c . . . . . . 
    . . . . . c b b b c . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 c . . . 
    c c 3 3 b b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d d c c 
    . . . c b c c b 5 5 b c c c . . 
    . . . c c c d 5 5 b c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . c c c c . . . . . . . . 
    . . c c 5 5 5 5 c c . . . . . . 
    . c 5 5 5 5 5 5 5 5 c . . . . . 
    c 5 5 5 5 5 1 f 5 5 5 c . . . . 
    c 5 5 5 5 5 f f 5 5 5 5 c . . . 
    c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
    c c b b 1 b 5 5 5 5 5 5 d c . . 
    c 5 3 3 3 5 5 5 5 5 d d d c . . 
    . b 5 5 5 5 5 5 5 5 d d d c . . 
    . . c b b c 5 5 b d d d d c . . 
    . c b b c 5 5 b b d d d d c c c 
    . c c c c c c d d d d d d d d c 
    . . . c c c c d 5 5 b d d c c . 
    . . c b b c c c 5 5 b c c . . . 
    . . c c c c c d 5 5 c . . . . . 
    `],
100,
true
)
mySprite2.setVelocity(0, 0 - vy)
info.setLife(4)
info.startCountdown(10)
game.onUpdate(function () {
    if (mySprite2.y <= 10) {
        mySprite2.setVelocity(0, vy)
    }
    if (mySprite2.y > 110) {
        mySprite2.setVelocity(0, 0 - vy)
    }
})
