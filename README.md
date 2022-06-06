# VAT VIES API

Simple API to validate VAT numbers. Cloudflare Workers and Cloudflare KV to offload the official European Union API. This solution guarantees that within 24 hours, only one request per unique VAT number to EU servers. SOAP conversion to JSON. VAT numbers are format validated before calling VIES API to check deductibility status.
[Demo Pages](https://vat.pages.dev/) [Demo API](https://vat.adaptive.workers.dev/)


## 🛠️ Usage

```http
GET /:country/:number
```

## 🥰 [Cloudflare Developer Spring Challenge](https://challenge.developers.cloudflare.com/)

- [x] Cloudflare Workers (The App)
- [x] Cloudflare Workers KV (API Keys Storage)
- [x] Durable Objects (Rate Limiter)

## 🌍 [Cloudflare Workers®](https://workers.cloudflare.com/)
> Cloudflare Workers provides a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.

## 💾 [Cloudflare Workers KV](https://www.cloudflare.com/products/workers-kv/)
> Cloudflare Workers KV provides access to a secure low latency key-value store at all of the data centers in Cloudflare's global network.

## ⏱️ [Durable Objects](https://pages.cloudflare.com/)
> Durable Objects provide low-latency coordination and consistent storage for the Workers platform through two features: global uniqueness and a transactional storage API.