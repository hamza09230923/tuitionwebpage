import { afterEach, describe, expect, it, vi } from 'vitest'
import { getR2DownloadUrl } from '../api/functionsClient'
import { openR2Material } from './r2MaterialAccess'

vi.mock('../api/functionsClient', () => ({ getR2DownloadUrl: vi.fn() }))
afterEach(() => { vi.restoreAllMocks(); vi.resetAllMocks() })

describe('private material preview', () => {
  it('opens the tab during the click, before the secure URL is available', async () => {
    let resolveLink
    getR2DownloadUrl.mockReturnValue(new Promise(resolve => { resolveLink = resolve }))
    const tab = { document: { body: {} }, location: {}, closed: false }
    const open = vi.spyOn(window, 'open').mockReturnValue(tab)
    const opening = openR2Material('homeworks', 'homework-1')
    expect(open).toHaveBeenCalledWith('about:blank', '_blank')
    expect(tab.location.href).toBeUndefined()
    expect(tab.opener).toBeNull()
    resolveLink({ downloadUrl: 'https://example.com/private-file' })
    await opening
    expect(tab.location.href).toBe('https://example.com/private-file')
    expect(getR2DownloadUrl).toHaveBeenCalledWith({ collection: 'homeworks', documentId: 'homework-1' })
  })

  it.each([new Error('Not authorized'), null])('shows an error when a secure preview cannot open (%s)', async error => {
    const tab = { document: { body: {} }, location: {}, closed: false }
    vi.spyOn(window, 'open').mockReturnValue(tab)
    if (error) getR2DownloadUrl.mockRejectedValue(error)
    else getR2DownloadUrl.mockResolvedValue({})
    await expect(openR2Material('homeworks', 'homework-1')).rejects.toThrow(error?.message || 'Download link was not returned')
    expect(tab.document.title).toBe('Unable to open lesson')
    expect(tab.location.href).toBeUndefined()
  })
})
