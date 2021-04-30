var e=require("jszip"),t=require("tweetnacl"),n=require("tweetnacl-util"),r=require("web3"),o=require("@metamask/detect-provider"),i=require("firebase/app");require("firebase/functions");var a=require("libp2p"),s=require("libp2p-websockets"),u=require("libp2p-webrtc-direct"),c=require("libp2p-noise"),l=require("libp2p-mplex"),d=require("libp2p-kad-dht");require("peer-id"),require("multiaddr");var p=require("libp2p-bootstrap"),y=require("it-pipe"),m=require("it-length-prefixed"),f=require("multihashing"),h=require("cids"),v=require("it-pushable"),b=require("secrets.js-grempe");function g(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var P=g(e),w=g(t),T=g(n),k=g(r),S=g(o),x=g(i),B=g(a),K=g(s),I=g(u),j=g(l),A=g(d),E=g(p),q=g(y),C=g(m),M=g(f),D=g(h),N=g(v),L=g(b),O={name:"AES-CBC",length:256};x.default.initializeApp({apiKey:"AIzaSyDa3JnwzrjfY5DcPz4GtywdUUUY3zqWo0w",authDomain:"mintlit.firebaseapp.com",projectId:"mintlit",storageBucket:"mintlit.appspot.com",messagingSenderId:"1044454922569",appId:"1:1044454922569:web:a3cf1d5637f18413f66298",measurementId:"G-NC19HWVQPT"});var U=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}];function _(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var F=function(){try{var e={};return Promise.resolve(J()).then(function(t){var n=t.error,r=t.publicKey;function o(){return Promise.resolve(z()).then(function(t){var n=t.account;e.address=n,console.log("public key: "+e.publicKey);var r=JSON.stringify(e);return localStorage.setItem("lit-keypair",r),Promise.resolve(function(e){try{var t=x.default.functions().httpsCallable("getPublicKey");return Promise.resolve(t(e)).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}}({address:n})).then(function(t){var n=t.pubkey,r=t.errorCode,o=function(){if("not_found"===r||n!==e.publicKey){var t="I am saving my public key so that others can send me LITs.  It is "+n;return Promise.resolve(R({body:t})).then(function(n){return Promise.resolve(function(e){try{var t=x.default.functions().httpsCallable("savePublicKey");return Promise.resolve(t(e)).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}}({sig:n.signature,msg:t,pubkey:e.publicKey})).then(function(){})})}}();if(o&&o.then)return o.then(function(){})})})}var i=function(){if(n)return Promise.resolve(H()).then(function(t){e={publicKey:t.publicKey,secretKey:t.secretKey,derivedVia:"web3.eth.personal.sign",signedMessage:Z}});e={publicKey:r,derivedVia:"eth_getEncryptionPublicKey"}}();return i&&i.then?i.then(o):o()})}catch(e){return Promise.reject(e)}},J=function(){try{return Promise.resolve(_(function(){return Promise.resolve(z()).then(function(e){return Promise.resolve(ethereum.request({method:"eth_getEncryptionPublicKey",params:[e.account]})).then(function(e){return{publicKey:e}})})},function(e){return console.log(e),4001===e.code?(console.log("We can't encrypt anything without the key."),e("You must accept the metamask request to derive your public encryption key")):console.error(e),{error:e}}))}catch(e){return Promise.reject(e)}},H=function(){try{return Promise.resolve(R({body:Z})).then(function(e){var t=e.signature;console.log("Signed message: "+t);var n=Buffer.from(t.substring(2),"hex");return Promise.resolve(crypto.subtle.digest("SHA-256",n)).then(function(e){var t=new Uint8Array(e),n=w.default.box.keyPair.fromSecretKey(t),r=n.secretKey;return{publicKey:T.default.encodeBase64(n.publicKey),secretKey:T.default.encodeBase64(r)}})})}catch(e){return Promise.reject(e)}},R=function(e){var t=e.body;try{return Promise.resolve(z()).then(function(e){var n=e.web3,r=e.account;return console.log("signing with ",r),Promise.resolve(n.eth.personal.sign(t,r)).then(function(e){var o=n.eth.accounts.recover(t,e);if(console.log("Signature: ",e),console.log("recovered address: ",o),o!==r){var i="ruh roh, the user signed with a different address ("+o+") then they're using with web3 ("+r+").  this will lead to confusion.";throw console.error(i),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(i)}return{signature:e,address:o}})})}catch(e){return Promise.reject(e)}},z=function(){try{if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});return Promise.resolve(S.default()).then(function(e){return Promise.resolve(e.request({method:"eth_requestAccounts"})).then(function(t){var n=t[0];return{web3:new k.default(e),account:n}})})}catch(e){return Promise.reject(e)}},V=function(){try{var e=function(){return t=JSON.parse(t),Promise.resolve(z()).then(function(e){var n=e.account,r=function(){if(n!==t.address)return Promise.resolve(F()).then(function(){t=localStorage.getItem("lit-keypair"),t=JSON.parse(t)})}();return r&&r.then?r.then(function(){return t}):t})},t=localStorage.getItem("lit-keypair"),n=function(){if(!t)return Promise.resolve(F()).then(function(){t=localStorage.getItem("lit-keypair")})}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(e){return Promise.reject(e)}},Z="I am creating an account to mint a LIT",W={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1}};function Y(e,t,n){if(!e.s){if(n instanceof G){if(!n.s)return void(n.o=Y.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(Y.bind(null,e,t),Y.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var G=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{Y(r,1,i(this.v))}catch(e){Y(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?Y(r,1,t?t(o):o):n?Y(r,1,n(o)):Y(r,2,o)}catch(e){Y(r,2,e)}},r},e}(),Q=function(e){try{return Promise.resolve(e.generateAsync({type:"blob"})).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(t){return console.log("blob",e),Promise.resolve(function(){try{return Promise.resolve(crypto.subtle.generateKey(O,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}()).then(function(e){return Promise.resolve(function(e,t){try{var n=window.crypto.getRandomValues(new Uint8Array(16));return Promise.resolve(crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t)).then(function(e){return new Blob([n,new Uint8Array(e)],{type:"application/octet-stream"})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(t){return Promise.resolve(crypto.subtle.exportKey("jwk",e)).then(function(e){return console.log("exportedSymmKey",e),Promise.resolve(V()).then(function(n){var r=function(e,t,n){var r,o=w.default.box.keyPair();try{r=T.default.decodeBase64(e)}catch(e){throw new Error("Bad public key")}var i=T.default.decodeUTF8(t),a=w.default.randomBytes(w.default.box.nonceLength),s=w.default.box(i,a,r,o.secretKey);return{version:"x25519-xsalsa20-poly1305",nonce:T.default.encodeBase64(a),ephemPublicKey:T.default.encodeBase64(o.publicKey),ciphertext:T.default.encodeBase64(s)}}(n.publicKey,JSON.stringify(e));return{encryptedSymmetricKey:JSON.stringify(r),encryptedZip:t}})})})})})})}catch(e){return Promise.reject(e)}},X=function(e,t){try{return Promise.resolve(V()).then(function(n){console.log("Got keypair out of localstorage: "+n);var r=n.secretKey;return Promise.resolve(function(e){try{return Promise.resolve(z()).then(function(t){var n=t.account;try{return ethereum.request({method:"eth_decrypt",params:[e,n]})}catch(e){return console.log(e),!1}})}catch(e){return Promise.reject(e)}}(t)).then(function(n){return n||(console.log("probably not metamask"),n=function(e,t){switch(e.version){case"x25519-xsalsa20-poly1305":var n,r=T.default.decodeBase64(t),o=T.default.decodeBase64(e.nonce),i=T.default.decodeBase64(e.ciphertext),a=T.default.decodeBase64(e.ephemPublicKey),s=w.default.box.open(i,o,a,r);try{n=T.default.encodeUTF8(s)}catch(e){throw new Error("Decryption failed.")}if(n)return n;throw new Error("Decryption failed.");default:throw new Error("Encryption type/version not supported.")}}(t,r)),console.log("decrypted",n),Promise.resolve(function(e){try{return Promise.resolve(crypto.subtle.importKey("jwk",JSON.parse(e),O,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}(n)).then(function(t){return Promise.resolve(function(e,t){try{return Promise.resolve(e.slice(0,16).arrayBuffer()).then(function(n){return Promise.resolve(e.slice(16).arrayBuffer()).then(function(e){return Promise.resolve(crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,e))})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(e){var t=new P.default;return Promise.resolve(t.loadAsync(e)).then(function(e){return e.files})})})})})}catch(e){return Promise.reject(e)}},$={};module.exports={zipAndEncryptString:function(e){try{var t=new P.default;return t.file("string.txt",e),Q(t)}catch(e){return Promise.reject(e)}},zipAndEncryptFiles:function(e){try{for(var t=new P.default,n=0;n<e.length;n++)t.folder("encryptedAssets").file(e[n].name,e[n]);return Q(t)}catch(e){return Promise.reject(e)}},encryptZip:Q,decryptZip:X,checkAndDeriveKeypair:V,connectWeb3:z,createHtmlLIT:function(e){var t,n,r,o,i,a=e.title,s=e.htmlBody,u=e.css,c=e.encryptedSymmetricKey,l=e.encryptedZipDataUrl,d=e.npmPackages,p=void 0===d?[]:d;try{p.push("lit-js-sdk");var y="",m=(t=p,n=function(e){return Promise.resolve(function(e){try{return $[e]?Promise.resolve($[e]):Promise.resolve(fetch("https://unpkg.com/"+e)).then(function(t){if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);return Promise.resolve(t.blob()).then(function(t){return Promise.resolve((n=t,new Promise(function(e,t){var r=new FileReader;r.onloadend=function(){e(r.result)},r.readAsDataURL(n)}))).then(function(t){return $[e]=t,t});var n})})}catch(e){return Promise.reject(e)}}(p[e])).then(function(e){y+='<script src="'+e+'"><\/script>\n'})},i=-1,function e(a){try{for(;++i<t.length;)if((a=n(i))&&a.then){if(!((s=a)instanceof G&&1&s.s))return void a.then(e,o||(o=Y.bind(null,r=new G,2)));a=a.v}r?Y(r,1,a):r=a}catch(e){Y(r||(r=new G),2,e)}var s}(),r);return Promise.resolve(m&&m.then?m.then(function(){return"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+c+'\n      var encryptedZipDataUrl = "'+l+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  "}):"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+a+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+c+'\n      var encryptedZipDataUrl = "'+l+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+s+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  ")}catch(e){return Promise.reject(e)}},mintLIT:function(e){var t=e.chain,n=e.quantity;try{return console.log("minting "+n+" tokens on "+t),Promise.resolve(V()).then(function(){return Promise.resolve(z()).then(function(e){var r=e.web3,o=e.account;return Promise.resolve(r.eth.getChainId()).then(function(e){if(e!==W[t].chainId)return{errorCode:"wrong_chain"};var i=W[t].contractAddress,a=new r.eth.Contract(U,i);return console.log("sending to chain..."),_(function(){return Promise.resolve(a.methods.mint(n).send({from:o})).then(function(e){return console.log("txReceipt: ",e),{txHash:e.transactionHash,tokenId:e.events.TransferSingle.returnValues.id,tokenAddress:i,mintingAddress:o}})},function(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})})})})})}catch(e){return Promise.reject(e)}},toggleLock:function(){try{var e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader"),n=function(){if(window.locked)return window.publicContent=e.innerHTML,Promise.resolve(fetch(window.encryptedZipDataUrl)).then(function(n){return Promise.resolve(n.blob()).then(function(n){return Promise.resolve(X(n,JSON.stringify(window.encryptedSymmetricKey))).then(function(n){return Promise.resolve(n["string.txt"].async("text")).then(function(n){e.innerHTML=n,t.innerText="UNLOCKED",window.locked=!1})})})});e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},LIT_CHAINS:W,LitNodeClient:function(){function e(e){this.libp2p=null,this.connectedNodes={}}var t=e.prototype;return t.saveEncryptionKey=function(e){var t=e.contractAddress,n=e.tokenId,r=e.symmetricKey;try{var o=Object.keys(this.connectedNodes),i=o.length,a=Math.floor(i/2),s=Buffer.from(r,"base64").toString("hex"),u=L.default.share(s,i,a);if(u.length!==o.length)throw new Error("kFrags.length ("+u.length+") !== nodeKeys.length ("+o.length+")");for(var c=[],l=t.toLowerCase(),d=n.toString(16).padStart(64,"0"),p=0;p<o.length;p++){var y=l+"|"+d+"|"+p;console.debug("storing kFrag with key "+y+" in node "+(p+1)+" of "+o.length),c.push(this.storeData({peerId:o[p],key:y,val:u[p]}))}return Promise.resolve(Promise.all(c)).then(function(){return console.log("all stored"),{success:!0}})}catch(e){return Promise.reject(e)}},t.storeData=function(e){var t=e.peerId,n=e.key,r=e.val;try{var o=M.default(Buffer.from(n),"sha2-256"),i=new D.default(o),a=JSON.stringify({cmd:"set",key:i.toString(),val:r});return this.connectedNodes[t].send(a),Promise.resolve()}catch(e){return Promise.reject(e)}},t.dataReceived=function(e){var t=e.msg;console.log("dataReceived from "+e.peerId.toB58String()+": "+t)},t.connect=function(){try{var e,t=this;return Promise.resolve(B.default.create({modules:{transport:[K.default,I.default],connEncryption:[c.NOISE],streamMuxer:[j.default],dht:A.default,peerDiscovery:[E.default]},config:{dht:{enabled:!0},peerDiscovery:(e={},e[E.default.tag]={enabled:!0,list:["/ip4/127.0.0.1/tcp/9090/http/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]},e)}})).then(function(e){return t.libp2p=e,t.libp2p.on("peer:discovery",function(e){console.debug("Found peer "+e.toB58String())}),t.libp2p.connectionManager.on("peer:connect",function(e){try{return console.debug("Connected to "+e.remotePeer.toB58String()),Promise.resolve(e.newStream(["/lit/1.0.0"])).then(function(n){var r=n.stream,o=N.default();q.default(o,C.default.encode(),r.sink),t.connectedNodes[e.remotePeer.toB58String()]={send:o.push}})}catch(e){return Promise.reject(e)}}),t.libp2p.connectionManager.on("peer:disconnect",function(e){console.debug("Disconnected from "+e.remotePeer.toB58String())}),Promise.resolve(t.libp2p.start()).then(function(){console.debug("libp2p id is "+t.libp2p.peerId.toB58String()),t.libp2p.multiaddrs.forEach(function(e){return console.debug(e.toString()+"/p2p/"+t.libp2p.peerId.toB58String())}),window.libp2p=t.libp2p})})}catch(e){return Promise.reject(e)}},e}()};
//# sourceMappingURL=index.js.map
