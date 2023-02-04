import '../scss/styles.scss'
import 'highlight.js/styles/intellij-light.css';
import hljs from 'highlight.js/lib/core';
import json from 'highlight.js/lib/languages/json';
import {genLteCell} from "./generator";
import {defaultPreset, iliad, tim, vf, w3} from "./presets";
import {Modal} from "bootstrap";

hljs.registerLanguage('json', json);

document.addEventListener('DOMContentLoaded', () => {
  const json = document.getElementById('json')
  const gen = document.getElementById("generate")
  const send = document.getElementById("send")
  const url = document.getElementById('url')
  const modalTitle = document.getElementById("modal-title");
  const modalText = document.getElementById("modal-text");

  send.addEventListener('click', () => {
    let request = json.innerText;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url.value, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(request);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          modalTitle.innerText = "Success!";
          modalText.innerHTML = `Success!<br>The server sent: "${this.response}"`;
          Modal.getOrCreateInstance("#modal").show();
        } else if (this.status >= 400 && this.status < 600) {
          modalTitle.innerText = "Error";
          modalText.innerHTML = `Error ${this.status}!<br>Check if the url is valid.`
          Modal.getOrCreateInstance("#modal").show();
        }
      }
    };
    xhr.onerror = function () {
      modalTitle.innerText = "Error";
      modalText.innerHTML = "Error occurred.<br>Check if the url is valid and CORS headers are set. You can find a sample server <a href='https://gist.github.com/HandyMenny/bf865c9f4cdef4558527fcab0603f5ec'>here</a>.";
      Modal.getOrCreateInstance("#modal").show();
    }
  });

  gen.addEventListener('click', () => {
    let preset;
    if (document.getElementById("preset-tim").checked) {
      preset = tim
    } else if (document.getElementById("preset-vf").checked) {
      preset = vf
    } else if (document.getElementById("preset-w3").checked) {
      preset = w3
    } else if (document.getElementById("preset-iliad").checked) {
      preset = iliad
    }
    const samples = document.getElementById("samples").value
    const cells = []
    for (let i = 0; i < samples; i++) {
      cells[i] = genLteCell(true, preset, defaultPreset)
    }
    const response = {}
    response.cells = cells
    response.size = cells.length
    response.date = new Date().toISOString()
    response.author = "Autore"
    response.contact = "AAA@bbb.cc"
    response.comment = "Commento"
    response.manufacturer = "Produttore"
    response.model = "Modello"

    json.innerHTML = JSON.stringify(response, null, 2)
    hljs.highlightElement(json);

    document.getElementById("send").disabled = false;
  })
});


