const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Укажите ваши реальные значения через переменные окружения при запуске:
// TELEGRAM_BOT_TOKEN=... TELEGRAM_CHAT_ID=... npm start
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function formatUZS(amount) {
  return `${Math.max(0, Math.round(Number(amount) || 0)).toLocaleString('ru-RU').replace(/,/g, ' ')} UZS`;
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

app.post('/api/orders', async (req, res) => {
  try {
    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({
        ok: false,
        error: 'На сервере не настроены TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID'
      });
    }

    const {
      customerName,
      customerPhone,
      deliveryAddress,
      courierComment,
      paymentMethod,
      promoCode,
      items,
      subtotal,
      discount,
      deliveryFee,
      finalTotal
    } = req.body;

    if (!customerName || !customerPhone || !deliveryAddress || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ ok: false, error: 'Заполните обязательные поля и добавьте товары' });
    }

    const itemsLines = items
      .map((item, idx) => `${idx + 1}. ${escapeHtml(item.name)} — <b>${Number(item.qty)} шт.</b> (${formatUZS(item.price * item.qty)})`)
      .join('\n');

    const promoText = promoCode
      ? `<code>${escapeHtml(promoCode)}</code> (скидка: <b>-${formatUZS(discount)}</b>)`
      : 'не использован';

    const message = [
      '🍔 <b>НОВЫЙ ЗАКАЗ — CRISP &amp; FLAME</b>',
      '',
      `👤 <b>Клиент:</b> ${escapeHtml(customerName)}`,
      `📞 <b>Телефон:</b> ${escapeHtml(customerPhone)}`,
      `📍 <b>Адрес доставки:</b> ${escapeHtml(deliveryAddress)}`,
      courierComment ? `💬 <b>Комментарий курьеру:</b> ${escapeHtml(courierComment)}` : null,
      `💳 <b>Способ оплаты:</b> ${escapeHtml(paymentMethod)}`,
      `🎟 <b>Промокод:</b> ${promoText}`,
      '',
      '🛒 <b>Товары:</b>',
      itemsLines,
      '',
      `💵 <b>Сумма товаров:</b> ${formatUZS(subtotal)}`,
      `🚚 <b>Доставка:</b> ${Number(deliveryFee) === 0 ? 'Бесплатно' : formatUZS(deliveryFee)}`,
      `💰 <b>Итого к оплате:</b> <b>${formatUZS(finalTotal)}</b>`
    ]
      .filter(Boolean)
      .join('\n');

    const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });

    const tgData = await tgResponse.json();
    if (!tgResponse.ok || !tgData.ok) {
      return res.status(502).json({
        ok: false,
        error: tgData.description || 'Ошибка при отправке сообщения в Telegram'
      });
    }

    return res.json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message || 'Внутренняя ошибка сервера' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});