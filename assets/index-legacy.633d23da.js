!function(){var t=document.createElement("style");t.innerHTML='.ant-descriptions-header{display:flex;align-items:center;margin-bottom:20px}.ant-descriptions-title{flex:auto;overflow:hidden;color:#000000d9;font-weight:bold;font-size:16px;line-height:1.5715;white-space:nowrap;text-overflow:ellipsis}.ant-descriptions-extra{margin-left:auto;color:#000000d9;font-size:14px}.ant-descriptions-view{width:100%;overflow:hidden;border-radius:2px}.ant-descriptions-view table{width:100%;table-layout:fixed}.ant-descriptions-row>th,.ant-descriptions-row>td{padding-bottom:16px}.ant-descriptions-row:last-child{border-bottom:none}.ant-descriptions-item-label{color:#000000d9;font-weight:normal;font-size:14px;line-height:1.5715;text-align:start}.ant-descriptions-item-label:after{content:":";position:relative;top:-.5px;margin:0 8px 0 2px}.ant-descriptions-item-label.ant-descriptions-item-no-colon:after{content:" "}.ant-descriptions-item-no-label:after{margin:0;content:""}.ant-descriptions-item-content{display:table-cell;flex:1;color:#000000d9;font-size:14px;line-height:1.5715;word-break:break-word;overflow-wrap:break-word}.ant-descriptions-item{padding-bottom:0;vertical-align:top}.ant-descriptions-item-container{display:flex}.ant-descriptions-item-container .ant-descriptions-item-label,.ant-descriptions-item-container .ant-descriptions-item-content{display:inline-flex;align-items:baseline}.ant-descriptions-middle .ant-descriptions-row>th,.ant-descriptions-middle .ant-descriptions-row>td{padding-bottom:12px}.ant-descriptions-small .ant-descriptions-row>th,.ant-descriptions-small .ant-descriptions-row>td{padding-bottom:8px}.ant-descriptions-bordered .ant-descriptions-view{border:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-view>table{table-layout:auto}.ant-descriptions-bordered .ant-descriptions-item-label,.ant-descriptions-bordered .ant-descriptions-item-content{padding:16px 24px;border-right:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-item-label:last-child,.ant-descriptions-bordered .ant-descriptions-item-content:last-child{border-right:none}.ant-descriptions-bordered .ant-descriptions-item-label{background-color:#fafafa}.ant-descriptions-bordered .ant-descriptions-item-label:after{display:none}.ant-descriptions-bordered .ant-descriptions-row{border-bottom:1px solid #f0f0f0}.ant-descriptions-bordered .ant-descriptions-row:last-child{border-bottom:none}.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-label,.ant-descriptions-bordered.ant-descriptions-middle .ant-descriptions-item-content{padding:12px 24px}.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-label,.ant-descriptions-bordered.ant-descriptions-small .ant-descriptions-item-content{padding:8px 16px}.ant-descriptions-rtl{direction:rtl}.ant-descriptions-rtl .ant-descriptions-item-label:after{margin:0 2px 0 8px}.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content{border-right:none;border-left:1px solid #f0f0f0}.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-label:last-child,.ant-descriptions-rtl.ant-descriptions-bordered .ant-descriptions-item-content:last-child{border-left:none}.ant-badge{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:relative;display:inline-block;line-height:1}.ant-badge-count{z-index:1;min-width:20px;height:20px;padding:0 6px;color:#fff;font-weight:normal;font-size:12px;line-height:20px;white-space:nowrap;text-align:center;background:#ff4d4f;border-radius:10px;box-shadow:0 0 0 1px #fff}.ant-badge-count a,.ant-badge-count a:hover{color:#fff}.ant-badge-count-sm{min-width:14px;height:14px;padding:0;font-size:12px;line-height:14px;border-radius:7px}.ant-badge-multiple-words{padding:0 8px}.ant-badge-dot{z-index:1;width:6px;min-width:6px;height:6px;background:#ff4d4f;border-radius:100%;box-shadow:0 0 0 1px #fff}.ant-badge-count,.ant-badge-dot,.ant-badge .ant-scroll-number-custom-component{position:absolute;top:0;right:0;transform:translate(50%,-50%);transform-origin:100% 0%}.ant-badge-count.anticon-spin,.ant-badge-dot.anticon-spin,.ant-badge .ant-scroll-number-custom-component.anticon-spin{animation:antBadgeLoadingCircle 1s infinite linear}.ant-badge-status{line-height:inherit;vertical-align:baseline}.ant-badge-status-dot{position:relative;top:-1px;display:inline-block;width:6px;height:6px;vertical-align:middle;border-radius:50%}.ant-badge-status-success{background-color:#52c41a}.ant-badge-status-processing{position:relative;background-color:#1890ff}.ant-badge-status-processing:after{position:absolute;top:0;left:0;width:100%;height:100%;border:1px solid #1890ff;border-radius:50%;animation:antStatusProcessing 1.2s infinite ease-in-out;content:""}.ant-badge-status-default{background-color:#d9d9d9}.ant-badge-status-error{background-color:#ff4d4f}.ant-badge-status-warning{background-color:#faad14}.ant-badge-status-pink{background:#eb2f96}.ant-badge-status-magenta{background:#eb2f96}.ant-badge-status-red{background:#f5222d}.ant-badge-status-volcano{background:#fa541c}.ant-badge-status-orange{background:#fa8c16}.ant-badge-status-yellow{background:#fadb14}.ant-badge-status-gold{background:#faad14}.ant-badge-status-cyan{background:#13c2c2}.ant-badge-status-lime{background:#a0d911}.ant-badge-status-green{background:#52c41a}.ant-badge-status-blue{background:#1890ff}.ant-badge-status-geekblue{background:#2f54eb}.ant-badge-status-purple{background:#722ed1}.ant-badge-status-text{margin-left:8px;color:#000000d9;font-size:14px}.ant-badge-zoom-appear,.ant-badge-zoom-enter{animation:antZoomBadgeIn .3s cubic-bezier(.12,.4,.29,1.46);animation-fill-mode:both}.ant-badge-zoom-leave{animation:antZoomBadgeOut .3s cubic-bezier(.71,-.46,.88,.6);animation-fill-mode:both}.ant-badge-not-a-wrapper .ant-badge-zoom-appear,.ant-badge-not-a-wrapper .ant-badge-zoom-enter{animation:antNoWrapperZoomBadgeIn .3s cubic-bezier(.12,.4,.29,1.46)}.ant-badge-not-a-wrapper .ant-badge-zoom-leave{animation:antNoWrapperZoomBadgeOut .3s cubic-bezier(.71,-.46,.88,.6)}.ant-badge-not-a-wrapper:not(.ant-badge-status){vertical-align:middle}.ant-badge-not-a-wrapper .ant-scroll-number-custom-component{transform:none}.ant-badge-not-a-wrapper .ant-scroll-number-custom-component,.ant-badge-not-a-wrapper .ant-scroll-number{position:relative;top:auto;display:block;transform-origin:50% 50%}@keyframes antStatusProcessing{0%{transform:scale(.8);opacity:.5}to{transform:scale(2.4);opacity:0}}.ant-scroll-number{overflow:hidden}.ant-scroll-number-only{position:relative;display:inline-block;height:20px;transition:all .3s cubic-bezier(.645,.045,.355,1);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden}.ant-scroll-number-only>p.ant-scroll-number-only-unit{height:20px;margin:0;-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden}.ant-scroll-number-symbol{vertical-align:top}@keyframes antZoomBadgeIn{0%{transform:scale(0) translate(50%,-50%);opacity:0}to{transform:scale(1) translate(50%,-50%)}}@keyframes antZoomBadgeOut{0%{transform:scale(1) translate(50%,-50%)}to{transform:scale(0) translate(50%,-50%);opacity:0}}@keyframes antNoWrapperZoomBadgeIn{0%{transform:scale(0);opacity:0}to{transform:scale(1)}}@keyframes antNoWrapperZoomBadgeOut{0%{transform:scale(1)}to{transform:scale(0);opacity:0}}@keyframes antBadgeLoadingCircle{0%{transform-origin:50%}to{transform:translate(50%,-50%) rotate(360deg);transform-origin:50%}}.ant-ribbon-wrapper{position:relative}.ant-ribbon{box-sizing:border-box;margin:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;top:8px;height:22px;padding:0 8px;color:#fff;line-height:22px;white-space:nowrap;background-color:#1890ff;border-radius:2px}.ant-ribbon-text{color:#fff}.ant-ribbon-corner{position:absolute;top:100%;width:8px;height:8px;color:currentColor;border:4px solid;transform:scaleY(.75);transform-origin:top}.ant-ribbon-corner:after{position:absolute;top:-4px;left:-4px;width:inherit;height:inherit;color:#00000040;border:inherit;content:""}.ant-ribbon-color-pink{color:#eb2f96;background:#eb2f96}.ant-ribbon-color-magenta{color:#eb2f96;background:#eb2f96}.ant-ribbon-color-red{color:#f5222d;background:#f5222d}.ant-ribbon-color-volcano{color:#fa541c;background:#fa541c}.ant-ribbon-color-orange{color:#fa8c16;background:#fa8c16}.ant-ribbon-color-yellow{color:#fadb14;background:#fadb14}.ant-ribbon-color-gold{color:#faad14;background:#faad14}.ant-ribbon-color-cyan{color:#13c2c2;background:#13c2c2}.ant-ribbon-color-lime{color:#a0d911;background:#a0d911}.ant-ribbon-color-green{color:#52c41a;background:#52c41a}.ant-ribbon-color-blue{color:#1890ff;background:#1890ff}.ant-ribbon-color-geekblue{color:#2f54eb;background:#2f54eb}.ant-ribbon-color-purple{color:#722ed1;background:#722ed1}.ant-ribbon.ant-ribbon-placement-end{right:-8px;border-bottom-right-radius:0}.ant-ribbon.ant-ribbon-placement-end .ant-ribbon-corner{right:0;border-color:currentColor transparent transparent currentColor}.ant-ribbon.ant-ribbon-placement-start{left:-8px;border-bottom-left-radius:0}.ant-ribbon.ant-ribbon-placement-start .ant-ribbon-corner{left:0;border-color:currentColor currentColor transparent transparent}.ant-badge-rtl{direction:rtl}.ant-badge-rtl .ant-badge-count,.ant-badge-rtl .ant-badge-dot,.ant-badge-rtl .ant-badge .ant-scroll-number-custom-component{right:auto;left:0;direction:ltr;transform:translate(-50%,-50%);transform-origin:0% 0%}.ant-badge-rtl.ant-badge .ant-scroll-number-custom-component{right:auto;left:0;transform:translate(-50%,-50%);transform-origin:0% 0%}.ant-badge-rtl .ant-badge-status-text{margin-right:8px;margin-left:0}.ant-badge-rtl .ant-badge-zoom-appear,.ant-badge-rtl .ant-badge-zoom-enter{animation-name:antZoomBadgeInRtl}.ant-badge-rtl .ant-badge-zoom-leave{animation-name:antZoomBadgeOutRtl}.ant-badge-not-a-wrapper .ant-badge-count{transform:none}.ant-ribbon-rtl{direction:rtl}.ant-ribbon-rtl.ant-ribbon-placement-end{right:unset;left:-8px;border-bottom-right-radius:2px;border-bottom-left-radius:0}.ant-ribbon-rtl.ant-ribbon-placement-end .ant-ribbon-corner{right:unset;left:0;border-color:currentColor currentColor transparent transparent}.ant-ribbon-rtl.ant-ribbon-placement-end .ant-ribbon-corner:after{border-color:currentColor currentColor transparent transparent}.ant-ribbon-rtl.ant-ribbon-placement-start{right:-8px;left:unset;border-bottom-right-radius:0;border-bottom-left-radius:2px}.ant-ribbon-rtl.ant-ribbon-placement-start .ant-ribbon-corner{right:0;left:unset;border-color:currentColor transparent transparent currentColor}.ant-ribbon-rtl.ant-ribbon-placement-start .ant-ribbon-corner:after{border-color:currentColor transparent transparent currentColor}@keyframes antZoomBadgeInRtl{0%{transform:scale(0) translate(-50%,-50%);opacity:0}to{transform:scale(1) translate(-50%,-50%)}}@keyframes antZoomBadgeOutRtl{0%{transform:scale(1) translate(-50%,-50%)}to{transform:scale(0) translate(-50%,-50%);opacity:0}}.box[data-v-0498b0f7]{display:flex;width:100%;height:calc(100vh - 280px);flex-direction:column}.box img[data-v-0498b0f7]{min-height:0;flex:1}.box .ant-form[data-v-0498b0f7]{flex:2}\n',document.head.appendChild(t),System.register(["./vendor-legacy.e71c8e14.js","./index-legacy.b2e53b1b.js"],(function(t){"use strict";var n,e,a,o,r,i,s,d,l,c,b,p,g,m,u,f,w,h,x,k,v,y,z,_,C;return{setters:[function(t){n=t.d,e=t.aY,a=t.aZ,o=t.aN,r=t.a_,i=t.a$,s=t.r,d=t.b0,l=t.p,c=t.h,b=t.E,p=t.e,g=t.i,m=t.j,u=t.G,f=t.w,w=t.b,h=t.t,x=t.F,k=t.k,v=t.c},function(t){y=t.a,z=t.u,_=t.b,C=t.d}],execute:function(){var I=t("default",n({name:"Welcome",components:{HuaweiCharge:y,[e.name]:e,[a.name]:a,[a.Item.name]:a.Item,SettingOutlined:o,EditOutlined:r,EllipsisOutlined:i},setup(){const t=z().getters["user/userInfo"],{online:n}=_(),{battery:e,batteryStatus:a,calcDischargingTime:o}=C(),r=s(function(t="en"){const n=navigator.userAgent.toLowerCase(),e=t=>t.test(n),a=t=>n.match(t)?.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,"."),o=new Map([[e(/windows|win32|win64|wow32|wow64/g),"windows"],[e(/macintosh|macintel/g),"macos"],[e(/x11/g),"linux"],[e(/android|adr/g),"android"],[e(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",r=new Map([["windows",new Map([[e(/windows nt 5.0|windows 2000/g),"2000"],[e(/windows nt 5.1|windows xp/g),"xp"],[e(/windows nt 5.2|windows 2003/g),"2003"],[e(/windows nt 6.0|windows vista/g),"vista"],[e(/windows nt 6.1|windows 7/g),"7"],[e(/windows nt 6.2|windows 8/g),"8"],[e(/windows nt 6.3|windows 8.1/g),"8.1"],[e(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",a(/os x [\d._]+/g)],["android",a(/android [\d._]+/g)],["ios",a(/os [\d._]+/g)]]).get(o)||"unknow";let i="unknow";"windows"===o||"macos"===o||"linux"===o?i="desktop":("android"===o||"ios"===o||e(/mobile/g))&&(i="mobile");const[s="unknow",d="unknow"]=new Map([[e(/applewebkit/g),["webkit",new Map([[e(/safari/g),"safari"],[e(/chrome/g),"chrome"],[e(/opr/g),"opera"],[e(/edge/g),"edge"]]).get(!0)]],[e(/gecko/g)&&e(/firefox/g),["gecko","firefox"]],[e(/presto/g),["presto","opera"]],[e(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],l=new Map([["webkit",a(/applewebkit\/[\d._]+/g)],["gecko",a(/gecko\/[\d._]+/g)],["presto",a(/presto\/[\d._]+/g)],["trident",a(/trident\/[\d._]+/g)]]).get(s)||"unknow",c=new Map([["firefox",a(/firefox\/[\d._]+/g)],["opera",a(/opr\/[\d._]+/g)],["iexplore",a(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",a(/edge\/[\d._]+/g)],["safari",a(/version\/[\d._]+/g)],["chrome",a(/chrome\/[\d._]+/g)]]).get(d)||"unknow",[b="none",p="unknow"]=new Map([[e(/micromessenger/g),["wechat",a(/micromessenger\/[\d._]+/g)]],[e(/qqbrowser/g),["qq",a(/qqbrowser\/[\d._]+/g)]],[e(/ucbrowser/g),["uc",a(/ucbrowser\/[\d._]+/g)]],[e(/qihu 360se/g),["360","unknow"]],[e(/2345explorer/g),["2345",a(/2345explorer\/[\d._]+/g)]],[e(/metasr/g),["sougou","unknow"]],[e(/lbbrowser/g),["liebao","unknow"]],[e(/maxthon/g),["maxthon",a(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"];return{"zh-cn":Object.assign({"内核":s,"内核版本":l,"平台":i,"载体":d,"载体版本":c,"系统":o,"系统版本":r},"none"===b?{}:{"外壳":b,"外壳版本":p}),en:Object.assign({engine:s,engineVs:l,platform:i,supporter:d,supporterVs:c,system:o,systemVs:r},"none"===b?{}:{shell:b,shellVs:p})}[t]}("zh-cn"));return d((()=>{Object.assign(r.value,{"距离电池充满需要":Number.isFinite(e.value.chargingTime)&&0!=e.value.chargingTime?o.value:"未知","剩余可使用时间":Number.isFinite(e.value.dischargingTime)&&0!=e.value.dischargingTime?o.value:"未知","电池状态":a.value,"当前电量":e.value.level+"%"})})),{userInfo:t,browserInfo:r,online:n,battery:e,batteryStatus:a,calcDischargingTime:o}}}));l("data-v-0498b0f7");const B={class:"box"},Z=m("img",{src:"/vite-vue3-admin/assets/analysis.04ad2692.svg"},null,-1);c(),I.render=function(t,n,e,a,o,r){const i=b("a-descriptions-item"),s=b("a-badge"),d=b("a-descriptions");return p(),g("div",null,[m("div",B,[Z,u(d,{title:"系统信息",bordered:""},{default:f((()=>[u(i,{key:"IP",label:"IP"},{default:f((()=>[w(h(t.userInfo.IP),1)])),_:1}),(p(!0),g(x,null,k(t.browserInfo,((t,n)=>(p(),v(i,{key:n,label:n},{default:f((()=>[w(h(t),1)])),_:2},1032,["label"])))),128)),u(i,{label:"网络状态"},{default:f((()=>[u(s,{status:t.online?"processing":"default",text:t.online?"在线":"离线"},null,8,["status","text"])])),_:1})])),_:1})])])},I.__scopeId="data-v-0498b0f7"}}}))}();
