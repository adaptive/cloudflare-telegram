export default {
  async fetch(request, env, ctx) {
    try {
      return await handleRequest(request, env, ctx);
    } catch (e) {
      console.log(e);
      return new Response(e.message);
    }
  },
  async scheduled(event, env) {
    try {
      return await handleSchedule(event, env);
    } catch (e) {
      console.log(e);
      return new Response(e.message);
    }
  }
};

const version = "0.1.0";
//initial moving to KV later
const apikey = "46b05bb8-8a5e-4f09-9ed3-5f58ff3bc972";

const handleRequest = async (request, env, ctx) => {
  let user;
  const token = env.TelegramToken;
  const address = new URL(request.url);
  const elements = address.pathname.split("/").filter(n => n);
  let response;
  if (elements[0] === undefined) {
    response = new Response("welcome", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "X-Version": version
      }
    });
  } else if (elements[0] === "telegram" && request.method === "POST") {
    let postData = await request.json();
    const auth = request.headers.get("Cf-Webhook-Auth");
    if (!auth) {
      return new Response("Bad Request", {
        status: 400,
        headers: {
          "X-Version": version
        }
      });
    } else {
      if (apikey !== auth) {
        return new Response("Unauthorized", {
          status: 401,
          headers: {
            "X-Version": version
          }
        });
      }
      user = +elements[1];
      await sendTelegram(user, postData.text, token);
      response = new Response("OK", {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
          "X-Version": version
        }
      });
    }
  } else if (elements[0] === undefined && request.method === "GET") {
    response = new Response(`OK`, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
        "X-Version": version
      }
    });
  } else {
    response = new Response("Not Found", {
      status: 404,
      headers: {
        "X-Version": version
      }
    });
  }

  return response;
};

const sendTelegram = async (users, message, token) => {
  const send = async (user, message, token) => {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: user,
        text: message
      })
    });
    return true;
  };

  if (Array.isArray(users)) {
    for (let user of users) {
      await send(user, message, token);
    }
  } else {
    await send(users, message, token);
  }
  return true;
};

const handleSchedule = async (controller, env, ctx) => {};
