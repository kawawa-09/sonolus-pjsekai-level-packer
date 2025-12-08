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

export { default as engineTutorialData } from 'sonolus-next-rush-plus-engine/EngineTutorialData?arraybuffer'
export { default as engineConfiguration } from 'sonolus-next-rush-plus-engine/EngineConfiguration?arraybuffer'
export { default as enginePlayData } from 'sonolus-next-rush-plus-engine/EnginePlayData?arraybuffer'
export { default as enginePreviewData } from 'sonolus-next-rush-plus-engine/EnginePreviewData?arraybuffer'
export { default as engineThumbnail } from 'sonolus-next-rush-plus-engine/EngineThumbnail?arraybuffer'
export { default as engineWatchData } from 'sonolus-next-rush-plus-engine/EngineWatchData?arraybuffer'
export { default as engineRom } from 'sonolus-next-rush-plus-engine/EngineRom?arraybuffer'
