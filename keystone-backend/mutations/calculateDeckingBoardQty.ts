/* eslint-disable */
import type { Context } from '.keystone/types'

const DECK_BOARD_WIDTH = 0.14
const GAP_BETWEEN_BOARDS = 0.005
const WASTE_FACTOR = 0.1
const DEFAULT_JOIST_SPACING = 0.4

const rectangleMaterialCalculator = (
    height: number,
    width: number,
    boardLength: number,
    joistLength: number
) => {
    // --- Decking Boards ---
    const effectiveBoardWidth = DECK_BOARD_WIDTH + GAP_BETWEEN_BOARDS
    const numberOfRows = Math.ceil(width / effectiveBoardWidth)
    const boardsPerRow = Math.ceil(height / boardLength)
    const totalBoards = Math.ceil(numberOfRows * boardsPerRow * (1 + WASTE_FACTOR))

    // --- Joists ---
    const joistRows = Math.ceil(height / DEFAULT_JOIST_SPACING) + 1
    const joistPiecesPerRow = Math.ceil(width / joistLength)
    const totalJoistPieces = joistRows * joistPiecesPerRow

    return {
        deckingBoards: totalBoards,
        joists: totalJoistPieces
    }
}

async function calculateDeckingBoardQuantity(
    root: any,
    {
        height,
        width,
        shape,
        boardLength,
        joistLength
    }: {
        height: string
        width: string
        shape: string
        boardLength: string
        joistLength: string
    },
    context: Context
): Promise<{ deckingBoards: number; joists: number }> {
    const parsedHeight = parseFloat(height)
    const parsedWidth = parseFloat(width)
    const parsedBoardLength = parseFloat(boardLength)
    const parsedJoistLength = parseFloat(joistLength)

    switch (shape) {
        case 'rectangle':
            return rectangleMaterialCalculator(
                parsedHeight,
                parsedWidth,
                parsedBoardLength,
                parsedJoistLength
            )

        case 'square':
            return rectangleMaterialCalculator(
                parsedWidth,
                parsedWidth,
                parsedBoardLength,
                parsedJoistLength
            )

        default:
            throw new Error(`Shape "${shape}" not supported.`)
    }
}

export default calculateDeckingBoardQuantity
