---
layout: default
title: Terms & Conditions
permalink: /terms/
---

<section class="legal-page">
  <div class="legal-page__inner">
    <h1 class="legal-page__title">Terms & Conditions</h1>
    <p class="legal-page__lead">
      These terms govern your use of iDeal and any purchases made through our website.
    </p>

    <div class="legal-page__card">
      <h2>1. About iDeal</h2>
      <p>
        iDeal is an online store offering Apple devices and related products. By using this website or placing an order,
        you agree to these Terms & Conditions.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>2. Products & Availability</h2>
      <p>
        All products are subject to availability. We reserve the right to change or discontinue any product at any time
        without prior notice.
      </p>
      <p>
        Images shown are for illustration purposes. Actual products may differ slightly in appearance.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>3. Pricing</h2>
      <p>
        All prices are shown in South African Rand (ZAR) unless stated otherwise. Prices may change without notice.
      </p>
      <p>
        We do our best to ensure pricing accuracy, but in case of an error, we reserve the right to cancel or correct the order.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>4. Payments</h2>
      <p>
        We accept secure payments via Apple Pay, PayPal, and bank card. Orders are only processed once payment has been confirmed.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>5. Delivery</h2>
      <p>
        Delivery times are estimates and may vary. For more details, please see our
        <a href="{{ '/delivery/' | relative_url }}">Delivery</a> page.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>6. Returns & Warranty</h2>
      <p>
        Warranty and return conditions are explained on our
        <a href="{{ '/warranty/' | relative_url }}">Warranty</a> page.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>7. Use of Website</h2>
      <p>
        You agree not to misuse this website, attempt to interfere with its operation, or use it for unlawful purposes.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>8. Limitation of Liability</h2>
      <p>
        iDeal is not liable for any indirect, incidental, or consequential damages arising from the use of this website or products purchased.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>9. Changes to These Terms</h2>
      <p>
        We may update these Terms & Conditions from time to time. Continued use of the website means you accept the updated terms.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>10. Contact</h2>
      <p>
        If you have any questions about these terms, please contact us via the
        <a href="{{ '/support/' | relative_url }}">Contact</a> page.
      </p>
    </div>

    <p class="legal-page__muted">
      Last updated: <span id="termsYear"></span>
    </p>
  </div>
</section>

<script>
  document.getElementById("termsYear").textContent = new Date().getFullYear();
</script>
