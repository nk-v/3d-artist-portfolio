"use client";

import React from "react";

import Script from "next/script";

import { YANDEX_METRIKA_COUNTER_ID } from "./constants";

const YANDEX_INLINE_SCRIPT = `
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(${YANDEX_METRIKA_COUNTER_ID}, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`;

function YandexNoScript() {
  return (
    <noscript>
      <div>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_COUNTER_ID}`}
          alt=""
          className="absolute -left-[9999px]"
        />
      </div>
    </noscript>
  );
}

export default function YandexMetrika() {
  return (
    <>
      <Script id="yandex-metrika">{YANDEX_INLINE_SCRIPT}</Script>
      <YandexNoScript />
    </>
  );
}
