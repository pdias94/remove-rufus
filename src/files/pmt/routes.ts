export const defaultRoutes = [

  //server
  { method: 'get', path: '/server/config', action: 'serverConfig' },

  //status
  { method: 'get', path: '/status', action: 'status' },
  { method: 'post', path: '/process-payment', action: 'processPayment' },
  { method: 'post', path: '/finish-transaction-process', action: 'finishTransactionProcess' },
  { method: 'post', path: '/refund-payment', action: 'refundPayment' },
  { method: 'get', path: '/get-transaction-payments/:consumerTransaction', action: 'getTransactionPayments' },
  { method: 'get', path: '/get-last-payment-by-consumer-id/:consumerId', action: 'getLastPaymentByConsumerId' },
  { method: 'post', path: '/payment', action: 'makePayment' },
  { method: 'post', path: '/payment-select', action: 'makePaymentSelect' },
  { method: 'put', path: '/payment/partner', action: 'updatePaymentPartner' },
  { method: 'get', path: '/payment/isConsumersVouchersBlacklist', action: 'isConsumersVouchersBlacklist' },
  { method: 'put', path: '/payment/getNextRedeemableVoucher', action: 'getNextRedeemableVoucher' },
  { method: 'put', path: '/payment/grantPointsForTransaction', action: 'grantPointsForTransaction' },
  { method: 'put', path: '/payment/validateAndApplyDiscount', action: 'validateAndApplyDiscount' },
  { method: 'post', path: '/mp/webhook', action: 'mercadoPagoWebhook' },
];

export const developmentRoutes = [
  //paypal mocks
  { method: 'post', path: '/PointOfSale/CheckOut', action: 'checkoutPayPalMock' },
  { method: 'post', path: '/nvp', action: 'doCancelPayPalMock' },
  { method: 'put', path: '/risk/transaction-contexts/:retailerAccountId/:transactionReferenceCode', action: 'stcPayPalMock' },
  { method: 'post', path: '/oauth2/token', action: 'stcPaypalOAuthMock' },
  { method: 'post', path: '/payments/payouts', action: 'payoutPayPalMock' },
  { method: 'get', path: '/check_status', action: 'checkStatusPayPalMock' },

  // //braintree mocks
  { method: 'post', path: '/braintree/payment/authorization', action: 'braintreePaymentAuthorizationMock' },

  //Spin
  // { method: 'post', path: '/spin/api/authenticate', action: 'spinAuthenticate' },
  { method: 'post', path: '/spin/api/partners/payment/start', action: 'spinCheckout' },
  { method: 'get', path: '/spin/transaction-reference-code', action: 'getTransactionReferenceCode' },

  //Mercadopago
  { method: 'post', path: '/mercadopago/v1/payments', action: 'mercadopagoCardAuthorization' },
  { method: 'put', path: '/mercadopago/v1/payments/:paymentId', action: 'mercadopagoCancelAuthorization' },
  { method: 'post', path: '/mercadopago/v1/advanced_payments', action: 'mercadopagoCheckout' },
  { method: 'get', path: '/mercadopago/advanced_payments/:paymentTransactionId', action: 'mercadopagoRetrievePayment' },
  { method: 'post', path: '/mercadopago/v1/advanced_payments/:paymentTransactionId/refunds', action: 'mercadopagoRefund' },
  { method: 'get', path: '/mercadopago/v1/payments/search', action: 'mercadopagoSearchPayment' },
  { method: 'get', path: '/mercadopago/v1/payments/:paymentTransactionId', action: 'mercadopagoRetrievePayment' },
  { method: 'post', path: '/mercadopago/v1/payments_payout', action: 'mercadopagoPayout' },
  { method: 'post', path: '/mercadopago/v1/customers/:customerId/cards', action: 'mercadopagoAssociateCustomerCard' },
  { method: 'delete', path: '/mercadopago/v1/customers/:customerId/cards/:cardId', action: 'mercadopagoDeleteCustomerCard' },
  { method: 'post', path: '/mercadopago/v1/card_tokens', action: 'mercadopagoAuthorizationToken' }, //access_token
  { method: 'post', path: '/mercadopago/v1/customers', action: 'mercadopagoCreateCustomer' }, //access_token
  { method: 'post', path: '/mercadopago/v1/oauth/token', action: 'mercadopagoAuthToken' },
  { method: 'put', path: '/mercadopago/v1/link-account/toggle', action: 'mpLinkAccountToggle' },

  // //LTM
  { method: 'post', path: '/authorizer/v1/benefit', action: 'authorizerBenefitWithSucess' },

  //ShellCredits mocks
  { method: 'post', path: '/shellCredits/token', action: 'retrieveTokenShellCreditsMock' },
  { method: 'get', path: '/shellCredits/participants/balance', action: 'participantBalanceShellCreditsMock' },
  { method: 'put', path: '/shellCredits/participants/update-participant', action: 'updateParticipantShellCreditsMock' },
  { method: 'post', path: '/shellCredits/transaction', action: 'transactionShellCreditsMock' },
  { method: 'post', path: '/shellCredits/transaction/chargeback', action: 'transactionChargebackShellCreditsMock' },
];
