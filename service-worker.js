/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c85fd9e344a0a590c1f0005f14b36863"
  },
  {
    "url": "about.html",
    "revision": "bff43e27993c493ce5e9247a2c5912c1"
  },
  {
    "url": "assets/css/0.styles.84caa238.css",
    "revision": "197c360dc4ae9484db60880f4728af14"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9ab25aff.js",
    "revision": "9c3d7c3b8367c3ea62ae1c460d5abbb6"
  },
  {
    "url": "assets/js/11.ae4dd377.js",
    "revision": "84c0822af8504adf13ab437bfa130129"
  },
  {
    "url": "assets/js/12.2fb1adec.js",
    "revision": "3a687f95d72652af2e1cb835da564005"
  },
  {
    "url": "assets/js/13.d0c68060.js",
    "revision": "f4fbf09ec54f40a8f36c284679ef0e12"
  },
  {
    "url": "assets/js/14.5594488a.js",
    "revision": "e0793572f928c0ac1c2d359d076cb154"
  },
  {
    "url": "assets/js/15.0610afcd.js",
    "revision": "cda61df4a25e95130f9869f011181832"
  },
  {
    "url": "assets/js/16.ed7bc853.js",
    "revision": "5cc591745413ea3a7f27831d0fe5eb20"
  },
  {
    "url": "assets/js/17.b756f178.js",
    "revision": "ff86575cfe45c10cc891b3f955175909"
  },
  {
    "url": "assets/js/18.f3018051.js",
    "revision": "4116b7810bf48203ca3251dad4eb9724"
  },
  {
    "url": "assets/js/19.e8cd3454.js",
    "revision": "93ef5ae2a67cfbe384fed953633f1114"
  },
  {
    "url": "assets/js/2.65cd4089.js",
    "revision": "3a067f6b93f60cbe3fd36ad7dff67f0d"
  },
  {
    "url": "assets/js/20.72418f4b.js",
    "revision": "fb2266c71b07f4d638efee43334e591f"
  },
  {
    "url": "assets/js/21.fae5a610.js",
    "revision": "84bf25ba3d47243b19664096976b298b"
  },
  {
    "url": "assets/js/22.3706cf6b.js",
    "revision": "e63a0216b606251500b5e68f34b82dd3"
  },
  {
    "url": "assets/js/23.6e214136.js",
    "revision": "872900008a4b42a457dd2180dee42cf0"
  },
  {
    "url": "assets/js/24.421cfda4.js",
    "revision": "5e8f22203ff46c9650084713f17a3319"
  },
  {
    "url": "assets/js/25.84d8fbab.js",
    "revision": "bbb0998ba7e3797823e517c5ab3b31c5"
  },
  {
    "url": "assets/js/26.b068c99b.js",
    "revision": "d5215e63e592e3ef377357db2d21f751"
  },
  {
    "url": "assets/js/27.a2f0f20d.js",
    "revision": "7b1fddefcda48f8a0b18a78859920884"
  },
  {
    "url": "assets/js/28.31f39909.js",
    "revision": "2bff900091c144f084085d5de210dac9"
  },
  {
    "url": "assets/js/3.c9f15469.js",
    "revision": "9cf70c4cdffccd9b147b90a856d5fdf7"
  },
  {
    "url": "assets/js/4.8df04cac.js",
    "revision": "d7ce50836b06dba10931a2e2d42a1194"
  },
  {
    "url": "assets/js/5.97c9feb5.js",
    "revision": "3a88cb670fc8ff91980a9ce0bd7f6ceb"
  },
  {
    "url": "assets/js/6.e7aaab14.js",
    "revision": "220a258fee6358aa3e2e376e2622884a"
  },
  {
    "url": "assets/js/7.77ee7102.js",
    "revision": "8921d0cfc4f107b1989865af466c61c0"
  },
  {
    "url": "assets/js/8.46a7fb0c.js",
    "revision": "c3bf63c96e475ffb4733af72f9578c8c"
  },
  {
    "url": "assets/js/9.bf580697.js",
    "revision": "856a90805d06ad062188cd4a138e97a4"
  },
  {
    "url": "assets/js/app.931349b7.js",
    "revision": "93380085bc879c7accbe8472d487b36e"
  },
  {
    "url": "demo.html",
    "revision": "e81866b3ea8749368a99f4bb2056bbb3"
  },
  {
    "url": "en/about.html",
    "revision": "38b60b7842719518a4b01a3148dfb360"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "496b71bfb7ca1b1af365621fe6a0c093"
  },
  {
    "url": "en/guide/config.html",
    "revision": "d4ccd2db79cb9497ffc6a8ca5626d1f3"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "e5c8c2b7e64db6cb9a1043c0870afc71"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "92b5f77cfbfcf9ea8138b663718f5f3c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "4148e6f6bc07983be46c30ed895fdf09"
  },
  {
    "url": "en/guide/page.html",
    "revision": "020c9e4a3fae9c432efd000b809cbc36"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "f3309742686fc5f333648ab39c1247dd"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "576104636352e489dad0d014a9b198c6"
  },
  {
    "url": "en/index.html",
    "revision": "ff1d230a50dcdb00dd67cad14177daf7"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "ced497bfab5e12aa5ac635c039a0d3c2"
  },
  {
    "url": "guide/config.html",
    "revision": "b10d3184dcd428412a14edb71909b627"
  },
  {
    "url": "guide/faq.html",
    "revision": "4f055c9a8ec4b8dbe74375df2f799e27"
  },
  {
    "url": "guide/icon.html",
    "revision": "7c38c05251e3d6a9d03b43635052ce8a"
  },
  {
    "url": "guide/index.html",
    "revision": "b10bc2c5b051c4c7bd42f06ba94f7e91"
  },
  {
    "url": "guide/page.html",
    "revision": "f8fd24286fddda1d03339a41f9bb54e8"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "d632909f9d3060d4b8e6eeba7553b7a0"
  },
  {
    "url": "guide/Todo.html",
    "revision": "133f806c1ea8b9f33e21d8fe4159578f"
  },
  {
    "url": "index.html",
    "revision": "62cfaf5fd1645aa08617f2d4939d2170"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "ac11b5e225938a1f00e9fc8c6dc99dbf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
