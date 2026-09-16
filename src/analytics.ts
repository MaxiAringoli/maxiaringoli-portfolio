export type AnalyticsEvent =
  | 'page_view'
  | 'whatsapp_click'
  | 'linkedin_click'
  | 'github_click'
  | 'project_click'

export function trackEvent(
  eventName: AnalyticsEvent,
  eventValue?: string,
  source?: string,
): void {
  void fetch('/api/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_name: eventName,
      ...(eventValue && { event_value: eventValue }),
      ...(source && { source }),
    }),
    keepalive: true,
  }).catch(() => {})
}
