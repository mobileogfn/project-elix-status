// server.js
import express from "express";
import { Client, GatewayIntentBits } from "discord.js";
import cors from "cors";

const app = express();
app.use(cors());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// store server statuses
let status1 = {
  title: "EU Lategame Solo Server Starting!",
  subtitle: "EU Lategame Solo Server Is Starting Soon!",
  color: "yellow"
};
let status2 = {
  title: "EU LTM Server Starting!",
  subtitle: "EU LTM Server Is Starting Soon!",
  color: "yellow"
};

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const content = message.content.toLowerCase();

  // Replace with your actual channel IDs
  if (message.channelId === "1432106730162094185") {
    if (content.includes("server up")) {
      status1 = {
        title: "EU Lategame Solo Server Joinable!",
        subtitle: "The Bus Starts In 120 seconds",
        color: "limegreen"
      };
    } else if (content.includes("server started")) {
      status1 = {
        title: "EU Lategame Solo Server Has Started!",
        subtitle: "Server is currently in the Lategame phase!",
        color: "yellow"
      };
    } else if (content.includes("server crash")) {
      status1 = {
        title: "Server Restarting Due to Low Player Count",
        subtitle: "Server restarting due to low players!",
        color: "purple"
      };
    }
  }

  if (message.channelId === "1432107616439500903") {
    if (content.includes("server up")) {
      status2 = {
        title: "EU LTM Server Joinable!",
        subtitle: "The Bus Starts In 120 seconds",
        color: "limegreen"
      };
    } else if (content.includes("server started")) {
      status2 = {
        title: "EU LTM Server Has Started!",
        subtitle: "The server is currently in the LTM phase!",
        color: "yellow"
      };
    } else if (content.includes("server crash")) {
      status2 = {
        title: "Server Restarting Due to Low Player Count",
        subtitle: "Server restarting due to low players!",
        color: "purple"
      };
    }
  }
});

// expose current statuses to the frontend
app.get("/status", (req, res) => {
  res.json({ status1, status2 });
});

client.login("YOUR_DISCORD_BOT_TOKEN"); // 🔒 keep secret!

app.listen(3000, () => console.log("Server running on port 3000"));
// server.js
import express from "express";
import { Client, GatewayIntentBits } from "discord.js";
import cors from "cors";

const app = express();
app.use(cors());

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// store server statuses
let status1 = {
  title: "EU Lategame Solo Server Starting!",
  subtitle: "EU Lategame Solo Server Is Starting Soon!",
  color: "yellow"
};
let status2 = {
  title: "EU LTM Server Starting!",
  subtitle: "EU LTM Server Is Starting Soon!",
  color: "yellow"
};

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const content = message.content.toLowerCase();

  // Replace with your actual channel IDs
  if (message.channelId === "1432106730162094185") {
    if (content.includes("server up")) {
      status1 = {
        title: "EU Lategame Solo Server Joinable!",
        subtitle: "The Bus Starts In 120 seconds",
        color: "limegreen"
      };
    } else if (content.includes("server started")) {
      status1 = {
        title: "EU Lategame Solo Server Has Started!",
        subtitle: "Server is currently in the Lategame phase!",
        color: "yellow"
      };
    } else if (content.includes("server crash")) {
      status1 = {
        title: "Server Restarting Due to Low Player Count",
        subtitle: "Server restarting due to low players!",
        color: "purple"
      };
    }
  }

  if (message.channelId === "1432107616439500903") {
    if (content.includes("server up")) {
      status2 = {
        title: "EU LTM Server Joinable!",
        subtitle: "The Bus Starts In 120 seconds",
        color: "limegreen"
      };
    } else if (content.includes("server started")) {
      status2 = {
        title: "EU LTM Server Has Started!",
        subtitle: "The server is currently in the LTM phase!",
        color: "yellow"
      };
    } else if (content.includes("server crash")) {
      status2 = {
        title: "Server Restarting Due to Low Player Count",
        subtitle: "Server restarting due to low players!",
        color: "purple"
      };
    }
  }
});

// expose current statuses to the frontend
app.get("/status", (req, res) => {
  res.json({ status1, status2 });
});

client.login("MTQzMjEwNzAwNzg3OTQxMzg2Mg.Ghun3p.jXLD-c_lBP7MOk5r73UKPCvzoSxVeY9MrSrODE"); // 🔒 keep secret!

app.listen(3000, () => console.log("Server running on port 3000"));
