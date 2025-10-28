import { susToUSC, uscToLevelData} from 'sonolus-pjsekai-js'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    let usc
    let levelData
    const fileExtension = chart.name.substring(chart.name.lastIndexOf('.')).toLowerCase()
    if (fileExtension === '.usc') {
        usc = JSON.parse(await chart.text())
        levelData = uscToLevelData(usc, offset)
    }
    else if (fileExtension === '.sus' || fileExtension === '.txt') {
        usc = susToUSC(await chart.text())
        levelData = uscToLevelData(usc, offset)
    }
    else 
        levelData = JSON.parse(await chart.text())
    return { type: 'json', data: levelData }
}
