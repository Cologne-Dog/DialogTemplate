/**
 * Copyright 2020, Cologne.Dog, Inc. All rights reserved.
 * Copyright 2019-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Messenger For Cologne.Dog
 * https://www.messenger.com/t/colognedog
 */

"use strict";

module.exports = class Client {
  constructor(psid) {
    this.psid = psid;
  }

  setProfile(profile) {
    this.f = profile.firstName;
    this.l = profile.lastName;
    this.ll = profile.locale; // i18n: defaults en-uss
    this.tz = profile.timezone;
  }
};
