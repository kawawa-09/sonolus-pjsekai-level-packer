import { susToUSC, uscToLevelData, uscToUSC } from 'sonolus-pjsekai-js'
import type { PackLevelData } from '.'

export const packLevelData: PackLevelData = async ({ chart, offset }) => {
    if (!chart) throw new Error('No chart file selected')

    let usc
    const fileExtension = chart.name.substring(chart.name.lastIndexOf('.')).toLowerCase()
    if (fileExtension === '.usc') {
        usc = uscToUSC(JSON.parse(await chart.text()).usc)
    } else {
        usc = susToUSC(await chart.text())
    }
    const levelData = uscToLevelData(usc, offset)
    return { type: 'json', data: levelData }
}
