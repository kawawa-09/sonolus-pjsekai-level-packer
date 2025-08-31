import { susToUSC, uscToLevelData, uscToUSC } from 'sonolus-pjsekai-js'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    let usc
    let levelData
    let check
    const fileExtension = chart.name.substring(chart.name.lastIndexOf('.')).toLowerCase()
    if (fileExtension === '.usc') {
        usc = uscToUSC(JSON.parse(await chart.text()).usc)
    } else if (fileExtension === '.json') {
        check = true
    }
    else {
        usc = susToUSC(await chart.text())
    }
    if (check == true)
        levelData = JSON.parse(await chart.text())
    else
        levelData = uscToLevelData(usc, offset)
    return { type: 'json', data: levelData }
}
