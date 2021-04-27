// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Decco from "decco/src/Decco.bs.js";
import * as React from "react";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as ReactQuery_Query from "./bindings/ReactQuery_Query.bs.js";

function todo_encode(v) {
  return Js_dict.fromArray([[
                "title",
                Decco.stringToJson(v.title)
              ]]);
}

function todo_decode(v) {
  var dict = Js_json.classify(v);
  if (typeof dict === "number") {
    return Decco.error(undefined, "Not an object", v);
  }
  if (dict.TAG !== /* JSONObject */2) {
    return Decco.error(undefined, "Not an object", v);
  }
  var title = Decco.stringFromJson(Belt_Option.getWithDefault(Js_dict.get(dict._0, "title"), null));
  if (title.TAG === /* Ok */0) {
    return {
            TAG: /* Ok */0,
            _0: {
              title: title._0
            }
          };
  }
  var e = title._0;
  return {
          TAG: /* Error */1,
          _0: {
            path: ".title" + e.path,
            message: e.message,
            value: e.value
          }
        };
}

var TodoQuery = ReactQuery_Query.Make({
      decoder: todo_decode
    });

function fetchTodo(param) {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (prim) {
              return prim.json();
            });
}

function App(Props) {
  var match = Curry.app(TodoQuery.useQuery, [
        "/todos/1",
        fetchTodo,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined
      ]);
  var tmp;
  var tmp$1 = match[0];
  tmp = typeof tmp$1 === "number" || tmp$1.TAG !== /* Error */2 ? React.createElement("div", undefined, "Whatever....") : React.createElement("div", undefined, "Loading...");
  return React.createElement("div", undefined, tmp);
}

var $$Promise;

var make = App;

export {
  $$Promise ,
  todo_encode ,
  todo_decode ,
  TodoQuery ,
  fetchTodo ,
  make ,
  
}
/* TodoQuery Not a pure module */
