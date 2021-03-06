#!/usr/bin/env node
"use strict";
/*!
 * Copyright 2020 Kloak IT inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const localWebServer_1 = require("./app/localWebServer");
const folderName = process.argv[3] || '';
const portNumber = parseInt(process.argv[2]) || 3000;
new localWebServer_1.default(portNumber, folderName);
