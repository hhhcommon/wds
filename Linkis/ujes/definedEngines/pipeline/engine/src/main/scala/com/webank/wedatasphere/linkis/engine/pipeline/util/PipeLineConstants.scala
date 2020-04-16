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

package com.webank.wedatasphere.linkis.engine.pipeline.util

/**
  * Created by johnnwang on 2018/11/16.
  */
object PipeLineConstants {
  val DEFAULTCHARSET = "utf-8";
  val DEFAULTSHEETNAME = "result";
  val DEFAULTDATEFORMATE = "yyyy-MM-dd HH:mm:ss";
  val DEFAULTOVERWIRTE = true
  val DEFAULTSEPARATOR = ","
  val PIPELINE_CSV_CHARSET_KEY = "pipeline.csv.charset"
  val PIPELINE_CSV_SEPERATOR_KEY = "pipeline.csv.seperator"
  val PIPELINE_EXCEL_SHEETNAME_KEY = "pipelie.excel.sheetname"
  val PIPELINE_EXCEL_DATEFORMATE_KEY = "pipeline.excel.dateformate"
}
