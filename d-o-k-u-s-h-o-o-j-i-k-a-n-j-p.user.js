// ==UserScript==
// @name         d-o-k-u-s-h-o-o-j-i-k-a-n-j-p
// @namespace    https://github.com/matsudakenta2345/dot_net_hoa/raw/main/d-o-k-u-s-h-o-o-j-i-k-a-n-j-p.user.js
// @version      2024.08.03
// @description  down d-o-k-u-s-h-o-o-j-i-k-a-n-j-p
// @author       You
// @include      /^https:\/\/d[o0]kush[o0]-[o0]jik[a@]n.jp\/re[a@]der\/ind[e3]x\.htm[l1].+/
// @icon         https://raw.githubusercontent.com/matsudakenta2345/dot_net_hoa/main/d-o-k-u-s-h-o-o-j-i-k-a-n-j-p.png
// @grant        GM_download
// @grant        GM_info
// @downloadURL  https://github.com/matsudakenta2345/dot_net_hoa/raw/main/d-o-k-u-s-h-o-o-j-i-k-a-n-j-p.user.js
// @updateURL    https://github.com/matsudakenta2345/dot_net_hoa/raw/main/d-o-k-u-s-h-o-o-j-i-k-a-n-j-p.meta.js
// ==/UserScript==

const a0_0x4604a1=a0_0x2936;(function(_0x17be29,_0x283e4e){const _0x3d4aaf=a0_0x2936,_0x4fe93a=_0x17be29();while(!![]){try{const _0x41b254=parseInt(_0x3d4aaf(0x1f7))/0x1*(parseInt(_0x3d4aaf(0x1e6))/0x2)+-parseInt(_0x3d4aaf(0x202))/0x3*(-parseInt(_0x3d4aaf(0x21d))/0x4)+-parseInt(_0x3d4aaf(0x225))/0x5*(-parseInt(_0x3d4aaf(0x215))/0x6)+parseInt(_0x3d4aaf(0x1cb))/0x7*(-parseInt(_0x3d4aaf(0x204))/0x8)+parseInt(_0x3d4aaf(0x1ca))/0x9*(-parseInt(_0x3d4aaf(0x1ff))/0xa)+-parseInt(_0x3d4aaf(0x1d5))/0xb*(-parseInt(_0x3d4aaf(0x203))/0xc)+-parseInt(_0x3d4aaf(0x216))/0xd*(parseInt(_0x3d4aaf(0x200))/0xe);if(_0x41b254===_0x283e4e)break;else _0x4fe93a['push'](_0x4fe93a['shift']());}catch(_0x42a3ad){_0x4fe93a['push'](_0x4fe93a['shift']());}}}(a0_0x3205,0xb4314));let downloading_current=0x0,downloading_total=0x0;const downloadMode=GM_info[a0_0x4604a1(0x217)];let folder_title='',auth_string='',api_url_root='';function sleep(_0x14c76e){return new Promise(_0x1a8334=>setTimeout(_0x1a8334,_0x14c76e));}const load_image=_0x477292=>new Promise((_0x472213,_0x16337c)=>{const _0xcfb922=a0_0x4604a1,_0x4e33ad=new Image();_0x4e33ad['addEventListener']('load',()=>{_0x472213(_0x4e33ad);}),_0x4e33ad['addEventListener'](_0xcfb922(0x20a),()=>{const _0x259f79=_0xcfb922;_0x16337c(new Error(_0x259f79(0x1f4)));}),_0x4e33ad[_0xcfb922(0x214)]=_0x477292,_0x4e33ad[_0xcfb922(0x22d)]='Anonymous';}),on_heartbeat_css=()=>{const _0x304717=a0_0x4604a1;let _0x1b7bcf=document['querySelector'](_0x304717(0x201));!_0x1b7bcf&&(_0x1b7bcf=document[_0x304717(0x1c8)]('style'),_0x1b7bcf[_0x304717(0x1c6)]('id','heartbeat'),document[_0x304717(0x1e5)][_0x304717(0x20f)](_0x1b7bcf)),_0x1b7bcf[_0x304717(0x219)]=_0x304717(0x1fb);},off_heartbeat_css=()=>{const _0x4062c5=a0_0x4604a1,_0x1cfb75=document[_0x4062c5(0x20b)](_0x4062c5(0x201));_0x1cfb75[_0x4062c5(0x219)]='';};function a0_0x2936(_0x2fb5ce,_0x4c8c1c){const _0x320521=a0_0x3205();return a0_0x2936=function(_0x29364e,_0x186fd1){_0x29364e=_0x29364e-0x1c2;let _0x4f305d=_0x320521[_0x29364e];return _0x4f305d;},a0_0x2936(_0x2fb5ce,_0x4c8c1c);}function a0_0x3205(){const _0x1165af=['s3_key','height','toBlob','_url','transform','center','none','next','naturalWidth','zIndex','apply','color','round','head','2301496vamNOj','.status-num','send','floor','\x20/\x20','responseText','includes','drawImage','result','className','3rem','position','shift','rel','Failed\x20to\x20load\x20image','.jpg','split','1gBmVNT','style','#FD7377','browser','\x0a\x20\x20\x20\x20\x20\x20.tai-ve\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20heartbeat\x202s\x20infinite;\x20/*\x20Apply\x20the\x20heartbeat\x20animation\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform-origin:\x20center;\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20@keyframes\x20heartbeat\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Start\x20with\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2025%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2025%\x20of\x20the\x20animation\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1.2);\x20/*\x20Scale\x20up\x20at\x2050%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20Return\x20to\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x2075%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x200.7;\x20/*\x20Fade\x20out\x20slightly\x20at\x2075%\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20scale(1);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20opacity:\x201;\x20/*\x20End\x20with\x20full\x20opacity\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20','string','flex','width','160Spsgux','14LGUZVN','#heartbeat','39CKYoAB','564TJDHRI','44848EjWsIR','1.5rem','open','top','left','10000','error','querySelector','naturalHeight','parse','backgroundColor','appendChild','charCodeAt','img','length','0.2rem\x20solid\x20#167975','src','412014tfDDnC','24625393BhGRqO','downloadMode','fontFamily','textContent','all','div','title','63152CADHfx','.25rem\x20.4rem\x20#2E8B87','firstChild','display','href','join','fontSize','getContext','105tAaNnR','replace','gap','padStart','https://fonts.googleapis.com/css2?family=Acme&display=swap','loaded\x20script','prototype','trim','crossOrigin','map','#F9FDFD','status','concat','setAttribute','Error','createElement','0.5rem','108036UddVaj','84ekRaYP','\x27Acme\x27,\x20sans-serif','0\x202rem','getElementsByTagName','insertBefore','1rem','click','cursor','webkitTextStroke','status-num','21912rbWmpL','log','pointer'];a0_0x3205=function(){return _0x1165af;};return a0_0x3205();}function update_status(){const _0x2b18fd=a0_0x4604a1;document[_0x2b18fd(0x20b)](_0x2b18fd(0x1e7))[_0x2b18fd(0x1f8)][_0x2b18fd(0x220)]='block',document[_0x2b18fd(0x20b)](_0x2b18fd(0x1e7))['innerHTML']=downloading_current+'\x20/\x20'+downloading_total;}function create_status_box(){const _0x2854c6=a0_0x4604a1;let _0x16aec3=document[_0x2854c6(0x1c8)](_0x2854c6(0x21b));return _0x16aec3[_0x2854c6(0x1ef)]=_0x2854c6(0x1d4),_0x16aec3[_0x2854c6(0x219)]=downloading_current+_0x2854c6(0x1ea)+downloading_total,_0x16aec3;}function create_download_icon(){const _0xb679fd=a0_0x4604a1;let _0x42f899=document[_0xb679fd(0x1c8)](_0xb679fd(0x21b)),_0x49d6da=document[_0xb679fd(0x1c8)](_0xb679fd(0x211));_0x49d6da[_0xb679fd(0x1ef)]='tai-ve',_0x49d6da[_0xb679fd(0x1c6)]('src','https://github.com/NAgEustiCa/1_con_kien_2_con_kien/raw/main/tai_icon.png'),_0x49d6da[_0xb679fd(0x1f8)][_0xb679fd(0x1fe)]=_0xb679fd(0x1f0),_0x49d6da[_0xb679fd(0x1f8)][_0xb679fd(0x1d2)]=_0xb679fd(0x1d7),_0x42f899[_0xb679fd(0x20f)](_0x49d6da);let _0x371bc6=document['createElement']('link');_0x371bc6[_0xb679fd(0x1f3)]='stylesheet',_0x371bc6[_0xb679fd(0x221)]=_0xb679fd(0x229),document[_0xb679fd(0x1ce)](_0xb679fd(0x1e5))[0x0][_0xb679fd(0x20f)](_0x371bc6);let _0x87b65d=document[_0xb679fd(0x1c8)](_0xb679fd(0x21b));_0x87b65d[_0xb679fd(0x1ef)]=_0xb679fd(0x1c4),_0x87b65d['style'][_0xb679fd(0x220)]=_0xb679fd(0x1fd),_0x87b65d['style']['justifyContent']=_0xb679fd(0x1dd),_0x87b65d['style']['alignItems']=_0xb679fd(0x1dd),_0x87b65d['style'][_0xb679fd(0x227)]=_0xb679fd(0x205),_0x87b65d[_0xb679fd(0x1f8)][_0xb679fd(0x1f1)]='absolute',_0x87b65d['style'][_0xb679fd(0x1e1)]=_0xb679fd(0x209),_0x87b65d['style'][_0xb679fd(0x207)]=_0xb679fd(0x1c9),_0x87b65d[_0xb679fd(0x1f8)][_0xb679fd(0x208)]='50vw',_0x87b65d[_0xb679fd(0x1f8)][_0xb679fd(0x1dc)]='translate(-50%)';let _0x4977c3=create_status_box();_0x4977c3[_0xb679fd(0x1f8)][_0xb679fd(0x218)]=_0xb679fd(0x1cc),_0x4977c3[_0xb679fd(0x1f8)][_0xb679fd(0x223)]='3rem',_0x4977c3[_0xb679fd(0x1f8)][_0xb679fd(0x1e3)]=_0xb679fd(0x1f9),_0x4977c3['style'][_0xb679fd(0x1d3)]='1px\x20#C62428',_0x4977c3['style']['border']=_0xb679fd(0x213),_0x4977c3['style']['borderRadius']=_0xb679fd(0x1d0),_0x4977c3[_0xb679fd(0x1f8)]['padding']=_0xb679fd(0x1cd),_0x4977c3[_0xb679fd(0x1f8)][_0xb679fd(0x20e)]=_0xb679fd(0x1c3),_0x4977c3[_0xb679fd(0x1f8)]['boxShadow']=_0xb679fd(0x21e),_0x4977c3['style'][_0xb679fd(0x220)]=_0xb679fd(0x1de),_0x87b65d['appendChild'](_0x42f899),_0x87b65d[_0xb679fd(0x20f)](_0x4977c3);let _0x2b6163=document['querySelector']('body'),_0x2956e7=_0x2b6163[_0xb679fd(0x21f)];return _0x2b6163[_0xb679fd(0x1cf)](_0x87b65d,_0x2956e7),_0x87b65d;}const throttlePromises=async(_0xdcdfc0,_0x56a86c)=>{const _0x1cd371=a0_0x4604a1;while(_0xdcdfc0[_0x1cd371(0x212)]>0x0){await Promise[_0x1cd371(0x21a)](_0xdcdfc0['splice'](0x0,_0x56a86c)[_0x1cd371(0x1c2)](_0x191d0f=>_0x191d0f())),await sleep(0xc8);}},get_data_need=_0x231995=>{return new Promise((_0x1788cd,_0x16553c)=>{const _0x467a64=a0_0x2936;var _0x43db37=XMLHttpRequest['prototype'][_0x467a64(0x206)];XMLHttpRequest[_0x467a64(0x22b)][_0x467a64(0x206)]=function(_0x3c86e4,_0x35ddef,_0x3fd66d,_0x441b63,_0x587c8a){const _0x40e059=_0x467a64;return this[_0x40e059(0x1db)]=_0x35ddef,_0x43db37[_0x40e059(0x1e2)](this,arguments);};var _0x25e584=XMLHttpRequest['prototype'][_0x467a64(0x1e8)];XMLHttpRequest[_0x467a64(0x22b)][_0x467a64(0x1e8)]=function(_0x40d8ce){const _0xf3cde=_0x467a64;return this['addEventListener']('load',function(){const _0x3216ec=a0_0x2936;if(this['_url'][_0x3216ec(0x1ec)](_0x231995)){if(this[_0x3216ec(0x1db)][_0x3216ec(0x1ec)](['d','o','k','u','s','h','o','-','s','e','r','v','e','r','/','b','r','o','w','s','e','r','/','b','o','o','k','i','n','f','o'][_0x3216ec(0x222)](''))){const _0x30de21=JSON[_0x3216ec(0x20d)](this[_0x3216ec(0x1eb)]),{keys:_0x2b031a,signedParams:_0xcae3df,guardianServer:_0x36ef51,bookData:_0x41c7fe}=_0x30de21[_0x3216ec(0x1ee)];auth_string=_0xcae3df,api_url_root=_0x36ef51+'/'+_0x41c7fe[_0x3216ec(0x1d8)],folder_title=_0x41c7fe[_0x3216ec(0x21c)][_0x3216ec(0x22c)]()[_0x3216ec(0x226)]('.',''),folder_title?folder_title=folder_title+'/':folder_title='',_0x1788cd({'keys':_0x2b031a,'bookData':_0x41c7fe});}_0x1788cd(this[_0x3216ec(0x1eb)]);}}),_0x25e584[_0xf3cde(0x1e2)](this,arguments);};});},h_descramble=(_0xa465b4,_0x22cd3a,_0x5b8556)=>{const _0x3c056a=a0_0x4604a1;let _0x4dfe2a;const _0x5bdd5a=Math[_0x3c056a(0x1e9)](_0xa465b4[_0x3c056a(0x1e0)]/0x60),_0x23b1c1=Math[_0x3c056a(0x1e9)](_0xa465b4[_0x3c056a(0x20c)]/0x80);if(typeof _0x22cd3a===_0x3c056a(0x1fc)){const _0x3f4a9c=randomizer(_0x22cd3a);_0x4dfe2a=[];for(let _0x3e03f1=0x0;_0x3e03f1<_0x5bdd5a*_0x23b1c1;++_0x3e03f1){_0x4dfe2a[_0x3e03f1]=_0x3e03f1;}_0x4dfe2a=a_shuffle(_0x4dfe2a,_0x3f4a9c);}const _0x40511a=document[_0x3c056a(0x1c8)]('canvas');_0x40511a[_0x3c056a(0x1fe)]=_0xa465b4[_0x3c056a(0x1e0)],_0x40511a[_0x3c056a(0x1d9)]=_0xa465b4['naturalHeight'];const _0x363a70=_0x40511a[_0x3c056a(0x224)]('2d');_0x363a70[_0x3c056a(0x1ed)](_0xa465b4,0x0,0x0);for(let _0x4cbec5=0x0,_0x3155cb=_0x4dfe2a['length'];_0x4cbec5<_0x3155cb;++_0x4cbec5){const _0x847eb4=+_0x4dfe2a[_0x4cbec5],_0x2c3c1c=0x60*Math['floor'](_0x4cbec5%_0x5bdd5a),_0x4de5eb=0x80*Math[_0x3c056a(0x1e9)](_0x4cbec5/_0x5bdd5a),_0x149595=Math[_0x3c056a(0x1e4)](0x60*Math[_0x3c056a(0x1e9)](_0x847eb4%_0x5bdd5a)),_0x4d46c8=Math[_0x3c056a(0x1e4)](0x80*Math[_0x3c056a(0x1e9)](_0x847eb4/_0x5bdd5a));_0x363a70['drawImage'](_0xa465b4,_0x2c3c1c,_0x4de5eb,0x60,0x80,_0x149595,_0x4d46c8,0x60,0x80);}_0x40511a[_0x3c056a(0x1da)](_0x4c30a0=>{const _0x27ae32=_0x3c056a;let _0x1dc5ec=(''+(_0x5b8556+0x1))[_0x27ae32(0x228)](0x3,'0')+_0x27ae32(0x1f5);downloadMode===_0x27ae32(0x1fa)&&(_0x1dc5ec=folder_title+_0x1dc5ec);const _0xacb07f=URL['createObjectURL'](_0x4c30a0);GM_download({'url':_0xacb07f,'name':_0x1dc5ec}),downloading_current+=0x1,downloading_current===downloading_total&&off_heartbeat_css(),update_status();},'image/jpeg',0.97);},a_shuffle=(_0x5d15ff,_0x3ddd3d)=>{const _0x48d23d=a0_0x4604a1;let _0x2602a7,_0x3784e7,_0x2ef3be,_0x2f8b5d,_0x4fb130,_0x46d9c7;for(_0x4fb130=[][_0x48d23d(0x1c5)](_0x5d15ff),_0x2602a7=_0x2ef3be=0x0,_0x2f8b5d=_0x4fb130['length'];0x0<=_0x2f8b5d?_0x2ef3be<_0x2f8b5d:_0x2ef3be>_0x2f8b5d;_0x2602a7=0x0<=_0x2f8b5d?++_0x2ef3be:--_0x2ef3be){_0x3784e7=e_rand(_0x4fb130[_0x48d23d(0x212)]-0x1,_0x3ddd3d),_0x46d9c7=_0x4fb130[_0x3784e7],_0x4fb130[_0x3784e7]=_0x4fb130[_0x2602a7],_0x4fb130[_0x2602a7]=_0x46d9c7;}return _0x4fb130;},randomizer=_0x11e1d0=>({'next':str_to_int(_0x11e1d0)}),next_int=_0x3b186e=>{const _0xf0fc9a=a0_0x4604a1,_0x4acba5=0x41c64e6d,_0x5e625d=0x3039,_0x4df85a=0x7fff;return _0x3b186e[_0xf0fc9a(0x1df)]=(_0x3b186e['next']*_0x4acba5+_0x5e625d)%(_0x4df85a+0x1),_0x3b186e[_0xf0fc9a(0x1df)];},e_rand=(_0x2e8780,_0x2cfac4)=>{const _0x4f54a3=a0_0x4604a1,_0xbfa529=0x7fff;let _0x308c58;return _0x2e8780!==null?(_0x308c58=_0x2e8780+0x1,Math[_0x4f54a3(0x1e9)](next_int(_0x2cfac4)/(Math[_0x4f54a3(0x1e9)](_0xbfa529/_0x308c58)+0x1))):next_int(_0x2cfac4);},str_to_int=_0x35411c=>{const _0xf4cf4=a0_0x4604a1;let _0x1744ba,_0x2d9e2e,_0x41e5c3,_0x41f92b,_0x11c67e,_0x29be4d=0x0;if(_0x35411c!==null)for(_0x1744ba=_0x35411c[_0xf4cf4(0x1f6)]('');_0x1744ba['length']>0x0;){_0x2d9e2e=_0x1744ba['shift'](),_0x41e5c3=_0x1744ba[_0xf4cf4(0x1f2)](),_0x41f92b=_0x2d9e2e[_0xf4cf4(0x210)](0x0),_0x11c67e=0x0,_0x41e5c3&&(_0x11c67e=_0x41e5c3['charCodeAt'](0x0)),_0x29be4d+=_0x41f92b<<0x8|_0x11c67e;}return _0x29be4d;},download=async(_0x3f537c,_0x5a3f95,_0x2f030e)=>{const _0x4094bf=a0_0x4604a1,_0x54fc9e=''+(_0x2f030e+0x1)+_0x4094bf(0x1f5),_0x44f45f=api_url_root+'/'+_0x54fc9e+'?'+auth_string;try{const _0x1c1a17=await load_image(_0x44f45f);h_descramble(_0x1c1a17,_0x3f537c,_0x2f030e);}catch(_0x1e90bc){console[_0x4094bf(0x1d6)](_0x4094bf(0x1c7));}};((async()=>{'use strict';const _0x197709=a0_0x4604a1;console['log'](_0x197709(0x22a));const {keys:_0x1d760b,bookData:_0x7adc37}=await get_data_need(['d','o','k','u','s','h','o','-','s','e','r','v','e','r','/','b','r','o','w','s','e','r','/','b','o','o','k','i','n','f','o'][_0x197709(0x222)](''));if(_0x1d760b[_0x197709(0x212)]>0x0){downloading_total=_0x1d760b[_0x197709(0x212)];const _0x3d5f1d=create_download_icon();_0x3d5f1d['addEventListener'](_0x197709(0x1d1),async()=>{on_heartbeat_css(),downloading_current=0x0;let _0x5a54fb=_0x1d760b['map']((_0xce6d4b,_0x3f5fac)=>()=>download(_0xce6d4b,_0x7adc37,_0x3f5fac));await throttlePromises(_0x5a54fb,0x2);});}})());