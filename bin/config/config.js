/**
 * Copyright 2020, Cologne.Dog, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger Builder by Cologne.Dog
 * https://www.messenger.com/t/colognedog
 */

"use strict";

// Use dotenv to read .env vars into Node
require("dotenv").config();

// Required environment variables
const ENV_VARS = [
  "PAGE_ID",
  "APP_ID",
  "PAGE_ACCESS_TOKEN",
  "APP_SECRET",
  "VERIFY_TOKEN",
  "APP_URL",
  "WEB_URLS"
];

module.exports = {
  // Messenger Platform API
  mPlatformDomain: "https://graph.facebook.com",
  mPlatformVersion: "v6.0",

  // Page and Application information
  pageId: process.env.PAGE_ID,
  appId: process.env.APP_ID,
  pageAccesToken: process.env.PAGE_ACCESS_TOKEN,
  appSecret: process.env.APP_SECRET,
  verifyToken: process.env.VERIFY_TOKEN,

  // URL of your app domain
  appUrl: process.env.APP_URL,

  // URL of your website
  webURLs: process.env.WEB_URLS.split(','),

  // Persona IDs
  personas: {},

  // Preferred port (default to 3000)
  port: process.env.PORT || 3000,

  get mPlatfom() {
    return this.mPlatformDomain + "/" + this.mPlatformVersion;
  },

  // URL of your webhook endpoint
  get webhookUrl() {
    return this.appUrl + "/webhook";
  },

  get newPersonas() {
    return [
      {
        name: "Jorge",
        picture: `${this.appUrl}/personas/sales.jpg`
      },
      {
        name: "Laura",
        picture: `${this.appUrl}/personas/billing.jpg`
      },
      {
        name: "Riandy",
        picture: `${this.appUrl}/personas/order.jpg`
      },
      {
        name: "Daniel",
        picture: `${this.appUrl}/personas/care.jpg`
      }
    ];
  },

  pushPersona(persona) {
    this.personas[persona.name] = persona.id;
  },

  get personaSales() {
    let id = this.personas["Jorge"] || process.env.PERSONA_SALES;
    return {
      name: "Jorge",
      id: id
    };
  },

  get personaBilling() {
    let id = this.personas["Laura"] || process.env.PERSONA_BILLING;
    return {
      name: "Laura",
      id: id
    };
  },

  get personaOrder() {
    let id = this.personas["Riandy"] || process.env.PERSONA_ORDER;
    return {
      name: "Riandy",
      id: id
    };
  },

  get personaCare() {
    let id = this.personas["Daniel"] || process.env.PERSONA_SUPPORT;
    return {
      name: "Daniel",
      id: id
    };
  },

  get whitelistedDomains() {
    return this.webURLs;
  },

  checkEnvVariables: function() {
    ENV_VARS.forEach(function(key) {
      if (!process.env[key]) {
        console.log("WARNING: Missing the environment variable " + key);
      }
    });
  }
};
