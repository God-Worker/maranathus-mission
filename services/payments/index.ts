// Common Payment Provider interface and simple registry (stubs)
export interface CheckoutResult {
  redirectUrl: string;
}

export interface PaymentProvider {
  createCheckoutSession(input: { amount: number; currency: string; orderId: string; }): Promise<CheckoutResult>;
  verifyWebhook(headers: Record<string, string | string[]>, rawBody: string): Promise<{ ok: boolean; event: string; }>;
  refund(paymentId: string, amount?: number): Promise<void>;
}

const providers: Record<string, PaymentProvider> = {};

export function registerProvider(name: string, provider: PaymentProvider) {
  providers[name] = provider;
}

export function getProvider(name: string): PaymentProvider {
  const p = providers[name];
  if (!p) throw new Error(`Payment provider not registered: ${name}`);
  return p;
}