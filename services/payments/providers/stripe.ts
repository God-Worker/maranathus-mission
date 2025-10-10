import type { PaymentProvider, CheckoutResult } from '../index';

export const StripeProvider: PaymentProvider = {
  async createCheckoutSession(input): Promise<CheckoutResult> {
    // TODO: call Stripe SDK/server API
    return { redirectUrl: 'https://checkout.stripe.com/test_session' };
  },
  async verifyWebhook(headers, rawBody) {
    // TODO: verify signature via Stripe
    return { ok: true, event: 'stripe.webhook.received' };
  },
  async refund(paymentId: string, amount?: number) {
    // TODO: call Stripe refund API
  },
};