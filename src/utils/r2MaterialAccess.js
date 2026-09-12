import { getR2DownloadUrl } from '../api/functionsClient'

// R2 objects remain private. A student opens a fresh five-minute URL only
// after the server has checked their enrolled subject, exam board and tier.
export async function getR2MaterialUrl(collection, documentId) {
  const { downloadUrl } = await getR2DownloadUrl({ collection, documentId })
  return downloadUrl
}

export async function openR2Material(collection, documentId) {
  // Opening the tab synchronously keeps browser popup protection from
  // blocking it while the secure-link request is in flight.
  const tab = window.open('about:blank', '_blank')
  if (tab) {
    tab.document.title = 'Opening lesson…'
    tab.document.body.innerHTML = '<p style="font-family:system-ui;padding:2rem">Opening your lesson securely…</p>'
  }

  try {
    const downloadUrl = await getR2MaterialUrl(collection, documentId)
    if (tab && !tab.closed) {
      // `href` has broader support than `replace` when navigating a tab that
      // was opened before an async permission check completed.
      tab.location.href = downloadUrl
    } else {
      window.location.assign(downloadUrl)
    }
  } catch (error) {
    if (tab && !tab.closed) {
      tab.document.title = 'Unable to open lesson'
      tab.document.body.innerHTML = '<p style="font-family:system-ui;padding:2rem">Unable to open this lesson. Please return to MySchola and try again.</p>'
    }
    throw error
  }
}
