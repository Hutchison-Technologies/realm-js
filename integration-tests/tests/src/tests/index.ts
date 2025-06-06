////////////////////////////////////////////////////////////////////////////
//
// Copyright 2021 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

import chaiAsPromised from "chai-as-promised";
import chai from "chai";

chai.use(chaiAsPromised);

import "./realm-constructor";
import "./serialization";
import "./objects";
import "./iterators";
import "./queries";
import "./dynamic-schema-updates";
import "./bson";
import "./dictionary";
import "./credentials/anonymous";
import "./sync/mixed";
import "./sync/flexible";
import "./sync/asymmetric";
import "./sync/sync-as-local";
import "./transaction";
import "./sync/client-reset";
