/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "that", "we", "any"];
let adj = ["great", "big", "afraid", "large"];
let noun = ["jogger", "racoon", "cat", "wizard"];
let extension = [".com", ".net", ".us", ".io"];

window.onload = function() {
  let allDomains = "";
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let e of extension) {
          allDomains += p + a + n + e + "<br>";
        }
      }
    }
  }
  document.querySelector("#domain-gen").innerHTML = allDomains;
};
