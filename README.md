# Notification Worker for Telegram

Webhook to integrate with Telegram Bot API, connecting Cloudflare and send notifications to Telegram.

## 🛠️ Usage

_Webhook_

Set up a webhook on your Cloudflare Notifications and point it to the following URL:

https://cloudflare-telegram.adaptive.workers.dev/telegram/:user

_API Test Key as your Webhook Secret_

46b05bb8-8a5e-4f09-9ed3-5f58ff3bc972

_If using your own bot, setup Enviroment Variable TeleramToken with your bot token_


### [DEMO Screenshots](demo)


## 🥰 [Cloudflare Developer Spring Challenge](https://challenge.developers.cloudflare.com/)

- [x] Cloudflare Workers (The App)
- [x] Cloudflare Workers KV (API Keys Storage)
- [ ] Durable Objects (Rate Limiter)

## 🌍 [Cloudflare Workers®](https://workers.cloudflare.com/)
> Cloudflare Workers provides a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.

## 💾 [Cloudflare Workers KV](https://www.cloudflare.com/products/workers-kv/)
> Cloudflare Workers KV provides access to a secure low latency key-value store at all of the data centers in Cloudflare's global network.

## ⏱️ [Durable Objects](https://pages.cloudflare.com/)
> Durable Objects provide low-latency coordination and consistent storage for the Workers platform through two features: global uniqueness and a transactional storage API.