player.onChat("Castle", function () {
    let current = player.position()
    player.teleport(pos(current.getValue(Axis.X) * -1, 0, current.getValue(Axis.Z) * -1))
    let origin = player.position().add(pos(2,0,2))
    // clear
    blocks.fill(AIR, origin, origin.add(pos(30, 30, 30)), FillOperation.Replace)

    create_moats(origin.add(pos(0,-1,-1)))
    create_walls(origin.add(pos(3,0,3)), STONE_BRICKS)
    create_tower(origin.add(pos(2,0,1)), STONE_BRICKS, PLANKS_OAK)
    create_tower(origin.add(pos(2,0,20)), STONE_BRICKS, PLANKS_OAK)
    create_tower(origin.add(pos(19,0,1)), STONE_BRICKS, PLANKS_OAK)
    create_tower(origin.add(pos(19,0,20)), STONE_BRICKS, PLANKS_OAK)
})

function create_tower(start : Position, mat_base : Block, mat_roof : Block) {
    blocks.fill(mat_base, start, start.add(pos(5, 4, 5)), FillOperation.Replace)
    let offset = start.add(pos(1,0,1))
    blocks.fill(mat_base, offset, offset.add(pos(3, 7, 3)), FillOperation.Replace)
    offset = start.add(pos(0,8,1))
    // tower roof
    blocks.fill(mat_roof, offset, offset.add(pos(5, 0, 3)), FillOperation.Replace)
    offset = start.add(pos(1,8,0))
    blocks.fill(mat_roof, offset, offset.add(pos(3, 0, 5)), FillOperation.Replace)
    offset = offset.add(pos(0,1,1))
    blocks.fill(mat_roof, offset, offset.add(pos(3, 0, 3)), FillOperation.Replace)
    offset = offset.add(pos(1,1,1))
    blocks.fill(mat_roof, offset, offset.add(pos(1, 0, 1)), FillOperation.Replace)
    // torches
    offset = start.add(pos(0,5,0))
    builder.teleportTo(offset)
    builder.face(SOUTH)
    for (let i = 0; i < 4; i++) {
        builder.place(TORCH)
        builder.move(FORWARD, 5)
        builder.turn(TurnDirection.Left)
    }
    blocks.place(GLASS, offset.add(pos(1, 1, 3)))
}

function create_walls(start : Position, mat_base : Block) {
    blocks.fill(mat_base, start, start.add(pos(20, 3, 20)), FillOperation.Replace)
    let offset = start.add(pos(2,0,2))
    blocks.fill(AIR, offset, offset.add(pos(16, 3, 16)), FillOperation.Replace)
    // blanks
    offset = start.add(pos(0, 4, 0))
    blocks.fill(MOSSY_COBBLESTONE_WALL, offset, offset.add(pos(20, 0, 20)), FillOperation.Replace)
    offset = offset.add(pos(1,0,1))
    blocks.fill(AIR, offset, offset.add(pos(18, 0, 18)), FillOperation.Replace)
    // gate
    offset = start.add(pos(0,0,8))
    blocks.fill(PLANKS_SPRUCE, offset, offset.add(pos(1, 3, 4)), FillOperation.Replace)
    offset = offset.add(pos(0,0,1))
    blocks.fill(IRON_BARS, offset, offset.add(pos(1, 2, 2)), FillOperation.Replace)
    // bridge
    offset = offset.add(pos(-1, -1, 0))
    blocks.fill(PLANKS_BIRCH, offset, offset.add(pos(-4,0,2)), FillOperation.Replace)
}

function create_moats(start : Position) {
    blocks.fill(WATER, start, start.add(pos(26, 0, 28)), FillOperation.Replace)
    let offset = start.add(pos(2,0,2))
    blocks.fill(GRASS, offset, offset.add(pos(22, 0, 24)), FillOperation.Replace)
}
