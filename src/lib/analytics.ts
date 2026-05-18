// Tiny GA4 helper. Safe no-op when gtag is not available.
type GtagFn = (...args: unknown[]) => void;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { gtag?: GtagFn };
  return typeof w.gtag === "function" ? w.gtag : null;
}

export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
) {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", eventName, params);
}

export function trackWhatsAppClick(label: string) {
  trackEvent("click_whatsapp", { event_category: "engagement", event_label: label });
}

export function trackFormSubmit(label = "contact_form") {
  trackEvent("form_submit", { event_category: "lead", event_label: label });
}
