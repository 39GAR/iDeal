---
layout: default
title: Track Order
permalink: /track/
---

<section class="legal-page">
  <div class="legal-page__inner">
    <h1 class="legal-page__title">Track Order</h1>
    <p class="legal-page__lead">
      Enter your order details below. If tracking is available, you’ll see the latest status.
    </p>

    <div class="legal-page__card">
      <form class="track-form" id="trackForm" autocomplete="on">
        <label class="track-form__label" for="orderNumber">Order number</label>
        <input class="track-form__input" id="orderNumber" name="orderNumber" placeholder="e.g. IDEAL-1024" required>

        <label class="track-form__label" for="email">Email used at checkout</label>
        <input class="track-form__input" id="email" name="email" type="email" placeholder="you@example.com" required>

        <button class="track-form__btn" type="submit">Check status</button>
        <p class="legal-page__muted" style="margin:10px 0 0;">
          If you received a tracking link by email, that link is the fastest way to track your order.
        </p>
      </form>
    </div>

    <div class="legal-page__card">
      <h2>Don’t have tracking yet?</h2>
      <p>
        Some orders only receive tracking once processing is complete. If you need help, contact us via
        <a href="{{ '/support/' | relative_url }}">Contact</a>.
      </p>
    </div>

    <div class="legal-page__card">
      <h2>Delivery time estimates</h2>
      <p>
        Typical delivery is 5-14 days depending on stock and location. In some cases it may take longer.
        See <a href="{{ '/delivery/' | relative_url }}">Delivery</a>.
      </p>
    </div>
  </div>
</section>

<script>
(() => {
  const form = document.getElementById("trackForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // This is a placeholder UX until you connect real tracking data.
    // It keeps the page working without lying to the user.
    const order = document.getElementById("orderNumber")?.value?.trim();
    const email = document.getElementById("email")?.value?.trim();

    alert(
      "Thanks — we’ve received your request.\\n\\n" +
      "Order: " + (order || "-") + "\\n" +
      "Email: " + (email || "-") + "\\n\\n" +
      "Next step: connect this page to your order system or tracking emails. " +
      "For now, please use the tracking link sent to your email (if available), " +
      "or contact support for an update."
    );
  });
})();
</script>
