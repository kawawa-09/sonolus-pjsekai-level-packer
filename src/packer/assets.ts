import type { Database } from '@sonolus/core'
import _db from '../pack/db.json'

export const db = _db as Database

export const repository = Object.entries(
    import.meta.glob('../pack/repository/*', {
        query: '?arraybuffer',
        import: 'default',
        eager: true,
    }),
).map(([path, buffer]) => ({
    filename: path.slice(path.lastIndexOf('/') + 1),
    buffer: buffer as ArrayBuffer,
}))

export { default as engineTutorialData } from 'sonolus-pjsekai-js/EngineTutorialData?arraybuffer'
export { default as engineConfiguration } from 'sonolus-pjsekai-js/EngineConfiguration?arraybuffer'
export { default as enginePlayData } from 'sonolus-pjsekai-js/EnginePlayData?arraybuffer'
export { default as enginePreviewData } from 'sonolus-pjsekai-js/EnginePreviewData?arraybuffer'
export { default as engineThumbnail } from 'sonolus-pjsekai-js/EngineThumbnail?arraybuffer'
export { default as engineWatchData } from 'sonolus-pjsekai-js/EngineWatchData?arraybuffer'
export { default as engineRom } from 'sonolus-pjsekai-js/EngineRom?arraybuffer'
