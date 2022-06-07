export class Counter {
  constructor(state, env) {
    this.state = state;
  }

  async fetch(request) {
    let clock = await this.state.storage.get("clock");

    if (!clock || !(clock + 60000 > Date.now())) {
      clock = Date.now();
      await this.state.storage.deleteAll();
      await this.state.storage.put("clock", clock);
    }

    let ip = request.headers.get("CF-Connecting-IP");
    let stored = await this.state.storage.get(ip);
    let value = stored || 1000;
    value = --value;
    await this.state.storage.put(ip, value);
    return new Response(value);
  }
}
