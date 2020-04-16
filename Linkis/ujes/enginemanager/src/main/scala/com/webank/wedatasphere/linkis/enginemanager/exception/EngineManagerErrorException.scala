/*
 * Copyright 2019 WeBank
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.webank.wedatasphere.linkis.enginemanager.exception

import com.webank.wedatasphere.linkis.common.exception.{ErrorException, WarnException}

/**
  * Created by johnnwang on 2018/9/27.
  */
class EngineManagerErrorException(errorCode: Int, desc: String) extends ErrorException(errorCode, desc)
class EngineManagerWarnException(errCode: Int, desc: String) extends WarnException(errCode, desc)