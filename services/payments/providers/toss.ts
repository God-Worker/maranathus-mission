import type { PaymentProvider, CheckoutResult } from '../index';

export const TossProvider: PaymentProvider = {
  async createCheckoutSession(input): Promise<CheckoutResult> {
    // TODO: call Toss Payments API
    return { redirectUrl: 'https://pay.toss.im/test_session' };
  },
  async verifyWebhook(headers, rawBody) {
    return { ok: true, event: 'toss.webhook.received' };
  },
  async refund(paymentId: string, amount?: number) {
    // TODO: call Toss refund API
  },
};