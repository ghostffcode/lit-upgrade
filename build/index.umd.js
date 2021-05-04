!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jszip"),require("tweetnacl"),require("tweetnacl-util"),require("web3"),require("@metamask/detect-provider"),require("firebase/app"),require("firebase/functions"),require("multihashing"),require("cids"),require("libp2p"),require("libp2p-websockets"),require("libp2p-webrtc-direct"),require("libp2p-noise"),require("libp2p-mplex"),require("libp2p-kad-dht"),require("peer-id"),require("multiaddr"),require("libp2p-bootstrap"),require("it-pipe"),require("it-length-prefixed"),require("it-pushable"),require("secrets.js-grempe"),require("uint8arrays/from-string"),require("uint8arrays/to-string"),require("it-all")):"function"==typeof define&&define.amd?define(["jszip","tweetnacl","tweetnacl-util","web3","@metamask/detect-provider","firebase/app","firebase/functions","multihashing","cids","libp2p","libp2p-websockets","libp2p-webrtc-direct","libp2p-noise","libp2p-mplex","libp2p-kad-dht","peer-id","multiaddr","libp2p-bootstrap","it-pipe","it-length-prefixed","it-pushable","secrets.js-grempe","uint8arrays/from-string","uint8arrays/to-string","it-all"],t):(e||self).litJsSdk=t(e.jszip,0,0,e.web3,e.detectEthereumProvider,e.firebase,0,e.multihashing,e.cids,e.libp2P,e.libp2PWebsockets,e.libp2PWebrtcDirect,e.libp2PNoise,e.libp2PMplex,e.libp2PKadDht,e.peerId,0,e.libp2PBootstrap,e.itPipe,0,0,e.secrets,e.uint8arrayFromString,e.uint8arrayToString,e.itAll)}(this,function(e,t,n,r,o,i,a,s,u,d,l,c,p,y,m,f,g,h,b,v,T,P,w,S,k){function E(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var I=E(e),A=E(r),R=E(o),F=E(i),K=E(s),C=E(u),M=E(d),j=E(l),q=E(c),x=E(y),N=E(m),B=E(f),_=E(h),O=E(b),D=E(P),U=E(w),L=E(S),G=E(k),Y={name:"AES-CBC",length:256};function z(e,t,n){if(!e.s){if(n instanceof J){if(!n.s)return void(n.o=z.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(z.bind(null,e,t),z.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var J=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{z(r,1,i(this.v))}catch(e){z(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?z(r,1,t?t(o):o):n?z(r,1,n(o)):z(r,2,o)}catch(e){z(r,2,e)}},r},e}(),V=function(e){try{return Promise.resolve(e.generateAsync({type:"blob"})).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(t){return console.log("blob",e),Promise.resolve(function(){try{return Promise.resolve(crypto.subtle.generateKey(Y,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}()).then(function(e){return Promise.resolve(function(e,t){try{var n=window.crypto.getRandomValues(new Uint8Array(16));return Promise.resolve(crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t)).then(function(e){return new Blob([n,new Uint8Array(e)],{type:"application/octet-stream"})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(t){return Promise.resolve(crypto.subtle.exportKey("jwk",e)).then(function(e){return console.log("exportedSymmKey",e),{symmetricKey:e,encryptedZip:t}})})})})})}catch(e){return Promise.reject(e)}},H=function(e,t){try{return Promise.resolve(function(e){try{return Promise.resolve(crypto.subtle.importKey("jwk",JSON.parse(e),Y,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}(t)).then(function(t){return Promise.resolve(function(e,t){try{return Promise.resolve(e.slice(0,16).arrayBuffer()).then(function(n){return Promise.resolve(e.slice(16).arrayBuffer()).then(function(e){return Promise.resolve(crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,e))})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(e){var t=new I.default;return Promise.resolve(t.loadAsync(e)).then(function(e){return e.files})})})}catch(e){return Promise.reject(e)}},W={};F.default.initializeApp({apiKey:"AIzaSyDa3JnwzrjfY5DcPz4GtywdUUUY3zqWo0w",authDomain:"mintlit.firebaseapp.com",projectId:"mintlit",storageBucket:"mintlit.appspot.com",messagingSenderId:"1044454922569",appId:"1:1044454922569:web:a3cf1d5637f18413f66298",measurementId:"G-NC19HWVQPT"});var Z=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}],Q=require("protons")("\nmessage Request {\n  enum Type {\n    GET_KEY_FRAGMENT = 0;\n    STORE_KEY_FRAGMENT = 1;\n  }\n  required Type type = 1;\n  optional GetKeyFragment getKeyFragment = 2;\n  optional StoreKeyFragment storeKeyFragment = 3;\n  optional bytes authSig = 4;\n  optional TokenParams tokenParams = 5;\n}\nmessage Response {\n  enum Type {\n    GET_KEY_FRAGMENT_RESPONSE = 0;\n    STORE_KEY_FRAGMENT_RESPONSE = 1;\n  }\n  required Type type = 1;\n  optional GetKeyFragmentResponse getKeyFragmentResponse = 2;\n  optional StoreKeyFragmentResponse storeKeyFragmentResponse = 3;\n}\nmessage GetKeyFragment {\n  required bytes keyId = 4;\n}\nmessage GetKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    NOT_FOUND = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes keyId = 2;\n  optional bytes fragmentValue = 3;\n}\nmessage StoreKeyFragment {\n  required bytes fragmentValue = 4;\n}\nmessage StoreKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    AUTH_FAILURE = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes errorMessage = 2;\n}\nmessage TokenParams {\n  required bytes tokenAddress = 1;\n  required bytes tokenId = 2;\n  required bytes chain = 3;\n}\n"),X={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1}},$=function(){try{var e=(new Date).toISOString(),t=ne.replace("{{timestamp}}",e);return Promise.resolve(function(e){var t=e.body;try{return Promise.resolve(te()).then(function(e){var n=e.web3,r=e.account;return console.log("signing with ",r),Promise.resolve(n.eth.personal.sign(t,r)).then(function(e){var o=n.eth.accounts.recover(t,e).toLowerCase();if(console.log("Signature: ",e),console.log("recovered address: ",o),o!==r){var i="ruh roh, the user signed with a different address ("+o+") then they're using with web3 ("+r+").  this will lead to confusion.";throw console.error(i),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(i)}return{signature:e,address:o}})})}catch(e){return Promise.reject(e)}}({body:t})).then(function(e){localStorage.setItem("lit-auth-signature",JSON.stringify({sig:e.signature,derivedVia:"web3.eth.personal.sign",signedMessage:t,address:e.address}))})}catch(e){return Promise.reject(e)}},ee=function(){try{var e=function(){return t=JSON.parse(t),Promise.resolve(te()).then(function(e){var n=e.account,r=function(){if(n!==t.address)return Promise.resolve($()).then(function(){t=localStorage.getItem("lit-auth-signature"),t=JSON.parse(t)})}();return r&&r.then?r.then(function(){return t}):t})},t=localStorage.getItem("lit-auth-signature"),n=function(){if(!t)return Promise.resolve($()).then(function(){t=localStorage.getItem("lit-auth-signature")})}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(e){return Promise.reject(e)}},te=function(){try{if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});return Promise.resolve(R.default()).then(function(e){return Promise.resolve(e.request({method:"eth_requestAccounts"})).then(function(t){var n=t[0].toLowerCase();return{web3:new A.default(e),account:n}})})}catch(e){return Promise.reject(e)}},ne="I am creating an account to use LITs at {{timestamp}}",re=function(e){var t=e.tokenId,n=e.chain,r=e.tokenAddress.toLowerCase(),o=t.toString(16).padStart(64,"0"),i=K.default(Buffer.from(r+"|"+o+"|"+n),"sha2-256");return new C.default(i).toString()},oe=Q.Request,ie=Q.Response,ae=Q.StoreKeyFragmentResponse,se=Q.GetKeyFragmentResponse;return{zipAndEncryptString:function(e){try{var t=new I.default;return t.file("string.txt",e),V(t)}catch(e){return Promise.reject(e)}},zipAndEncryptFiles:function(e){try{for(var t=new I.default,n=0;n<e.length;n++)t.folder("encryptedAssets").file(e[n].name,e[n]);return V(t)}catch(e){return Promise.reject(e)}},encryptZip:V,decryptZip:H,connectWeb3:te,checkAndSignAuthMessage:ee,createHtmlLIT:function(e){var t,n,r,o,i,a=e.title,s=e.htmlBody,u=e.css,d=e.encryptedSymmetricKey,l=e.encryptedZipDataUrl,c=e.npmPackages,p=void 0===c?[]:c;try{p.push("lit-js-sdk");var y="",m=(t=p,n=function(e){return Promise.resolve(function(e){try{return W[e]?Promise.resolve(W[e]):Promise.resolve(fetch("https://unpkg.com/"+e)).then(function(t){if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);return Promise.resolve(t.blob()).then(function(t){return Promise.resolve((n=t,new Promise(function(e,t){var r=new FileReader;r.onloadend=function(){e(r.result)},r.readAsDataURL(n)}))).then(function(t){return W[e]=t,t});var n})})}catch(e){return Promise.reject(e)}}(p[e])).then(function(e){y+='<script src="'+e+'"><\/script>\n'})},i=-1,function e(a){try{for(;++i<t.length;)if((a=n(i))&&a.then){if(!((s=a)instanceof J&&1&s.s))return void a.then(e,o||(o=z.bind(null,r=new J,2)));a=a.v}r?z(r,1,a):r=a}catch(e){z(r||(r=new J),2,e)}var s}(),r);return Promise.resolve(m&&m.then?m.then(function(){return"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+d+'\n      var encryptedZipDataUrl = "'+l+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  "}):"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+d+'\n      var encryptedZipDataUrl = "'+l+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  ")}catch(e){return Promise.reject(e)}},mintLIT:function(e){var t=e.chain,n=e.quantity;try{return console.log("minting "+n+" tokens on "+t),Promise.resolve(ee()).then(function(e){return Promise.resolve(te()).then(function(r){var o=r.web3,i=r.account;return Promise.resolve(o.eth.getChainId()).then(function(r){if(r!==X[t].chainId)return{errorCode:"wrong_chain"};var a=X[t].contractAddress,s=new o.eth.Contract(Z,a);return console.log("sending to chain..."),function(t,r){try{var o=Promise.resolve(s.methods.mint(n).send({from:i})).then(function(t){return console.log("txReceipt: ",t),{txHash:t.transactionHash,tokenId:t.events.TransferSingle.returnValues.id,tokenAddress:a,mintingAddress:i,authSig:e}})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})})})})})}catch(e){return Promise.reject(e)}},toggleLock:function(){try{var e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader"),n=function(){if(window.locked)return window.publicContent=e.innerHTML,Promise.resolve(fetch(window.encryptedZipDataUrl)).then(function(n){return Promise.resolve(n.blob()).then(function(n){return Promise.resolve(H(n,JSON.stringify(window.encryptedSymmetricKey))).then(function(n){return Promise.resolve(n["string.txt"].async("text")).then(function(n){e.innerHTML=n,t.innerText="UNLOCKED",window.locked=!1})})})});e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},LIT_CHAINS:X,LitNodeClient:function(){function e(e){this.libp2p=null,this.connectedNodes=new Set}var t=e.prototype;return t.saveEncryptionKey=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.symmetricKey,o=e.authSig,i=e.chain;try{var a=Array.from(this.connectedNodes),s=a.length,u=Math.floor(s/2),d=Buffer.from(r).toString("hex");console.debug("splitting up into "+s+" shares with a threshold of "+u);var l=D.default.share(d,s,u);if(l.length!==a.length)throw new Error("kFrags.length ("+l.length+") !== nodes.length ("+a.length+")");for(var c=[],p=t.toLowerCase(),y=0;y<a.length;y++)console.debug("storing kFrag in node "+(y+1)+" of "+a.length),c.push(this.storeDataWithNode({peerId:a[y],tokenAddress:p,tokenId:n,val:l[y],authSig:o,chain:i}));return Promise.resolve(Promise.all(c)).then(function(){return console.log("all stored"),{success:!0}})}catch(e){return Promise.reject(e)}},t.getEncryptionKeyFragments=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.authSig,o=e.chain;try{var i=this,a=t.toLowerCase(),s=re({tokenAddress:t,tokenId:n,chain:o}),u=new C.default(s);return Promise.resolve(G.default(i.libp2p.contentRouting.findProviders(u,{timeout:3e3}))).then(function(e){console.log("Found "+e.length+" providers");for(var t=[],u=0;u<e.length;u++){var d=e[u].id.toB58String();console.debug("Getting "+s+" from "+d),t.push(i.getDataFromNode({peerId:d,tokenAddress:a,tokenId:n,authSig:r,keyId:s,chain:o}))}return Promise.resolve(Promise.all(t))})}catch(e){return Promise.reject(e)}},t.storeDataWithNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.val,i=e.authSig,a=e.chain;try{console.debug("storing data with node "+t+" with tokenAddress "+n+" and tokenId "+r);var s=oe.encode({type:oe.Type.STORE_KEY_FRAGMENT,storeKeyFragment:{fragmentValue:U.default(o)},authSig:U.default(JSON.stringify(i)),tokenParams:{tokenAddress:U.default(n),tokenId:U.default(r.toString()),chain:U.default(a)}});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:s}))}catch(e){return Promise.reject(e)}},t.getDataFromNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.keyId,i=e.authSig,a=e.chain;try{console.debug("getDataFromNode "+t+" with keyId "+o);var s=oe.encode({type:oe.Type.GET_KEY_FRAGMENT,getKeyFragment:{keyId:U.default(o)},authSig:U.default(JSON.stringify(i)),tokenParams:{tokenAddress:U.default(n),tokenId:U.default(r.toString()),chain:U.default(a)}});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:s}))}catch(e){return Promise.reject(e)}},t.sendCommandToPeer=function(e){var t=e.peerId,n=e.data;try{var r=this.libp2p.connectionManager.get(B.default.createFromB58String(t));return Promise.resolve(r.newStream(["/lit/1.0.0"])).then(function(e){var r=e.stream;console.debug("sendCommandToPeer "+t);var o=null;return Promise.resolve(O.default([n],r,function(e){try{return console.debug("in sendCommandToPeer callback"),Promise.resolve(e.next()).then(function(e){var t=e.value;console.debug("got value from source.next()",t);var n=ie.decode(t.slice());n.type===ie.Type.STORE_KEY_FRAGMENT_RESPONSE?n.storeKeyFragmentResponse.result===ae.Result.SUCCESS?(console.log("success storing key fragment"),o=!0):(console.log("error storing key fragment: "),console.log(L.default(n.storeKeyFragmentResponse.errorMessage)),o=!1):n.type===ie.Type.GET_KEY_FRAGMENT_RESPONSE?n.getKeyFragmentResponse.result===se.Result.SUCCESS?(console.log("success getting key fragment"),o=L.default(n.getKeyFragmentResponse.fragmentValue)):n.getKeyFragmentResponse.result===se.Result.NOT_FOUND?(console.log("key fragment not found"),o=!1):(console.log("unknown error getting key fragment"),o=!1):console.log("unknown response type")})}catch(e){return Promise.reject(e)}})).then(function(){return o})})}catch(e){return Promise.reject(e)}},t.connect=function(){try{var e,t=this;return Promise.resolve(M.default.create({modules:{transport:[j.default,q.default],connEncryption:[p.NOISE],streamMuxer:[x.default],dht:N.default,peerDiscovery:[_.default]},config:{dht:{enabled:!0},peerDiscovery:(e={},e[_.default.tag]={enabled:!0,list:["/ip4/127.0.0.1/tcp/9090/http/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]},e)}})).then(function(e){return t.libp2p=e,t.libp2p.on("peer:discovery",function(e){console.debug("Found peer "+e.toB58String())}),t.libp2p.connectionManager.on("peer:connect",function(e){try{var n=e.remotePeer.toB58String();return console.debug("Connected to "+n),t.connectedNodes.has(n)||t.connectedNodes.add(n),Promise.resolve()}catch(e){return Promise.reject(e)}}),t.libp2p.connectionManager.on("peer:disconnect",function(e){var n=e.remotePeer.toB58String();console.debug("Disconnected from "+n),t.connectedNodes.delete(n)}),Promise.resolve(t.libp2p.start()).then(function(){console.debug("libp2p id is "+t.libp2p.peerId.toB58String()),t.libp2p.multiaddrs.forEach(function(e){return console.debug(e.toString()+"/p2p/"+t.libp2p.peerId.toB58String())}),window.libp2p=t.libp2p,window.PeerId=B.default})})}catch(e){return Promise.reject(e)}},e}(),getUploadUrl:function(){try{var e=F.default.functions().httpsCallable("getUploadUrl");return Promise.resolve(e()).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}},createTokenMetadata:function(e){try{var t=F.default.functions().httpsCallable("createTokenMetadata");return Promise.resolve(t(e)).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}},protobufs:Q,kFragKey:re}});
//# sourceMappingURL=index.umd.js.map