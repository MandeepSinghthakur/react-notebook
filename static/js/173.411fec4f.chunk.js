(this["webpackJsonpreact-notebook"]=this["webpackJsonpreact-notebook"]||[]).push([[173],{342:function(t,e){!function(t){t.languages.http={"request-line":{pattern:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\s(?:https?:\/\/|\/)\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(?:POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] \d+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )\d+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var e,a,n,p=t.languages,s={"application/javascript":p.javascript,"application/json":p.json||p.javascript,"application/xml":p.xml,"text/xml":p.xml,"text/html":p.html,"text/css":p.css},i={"application/json":!0,"application/xml":!0};for(var r in s)if(s[r]){e=e||{};var o=i[r]?(n=(a=r).replace(/^[a-z]+\//,""),"(?:"+a+"|\\w+/(?:[\\w.-]+\\+)+"+n+"(?![+\\w.-]))"):r;e[r.replace(/\//g,"-")]={pattern:RegExp("(content-type:\\s*"+o+"[\\s\\S]*?)(?:\\r?\\n|\\r){2}[\\s\\S]*","i"),lookbehind:!0,inside:s[r]}}e&&t.languages.insertBefore("http","header-name",e)}(Prism)}}]);
//# sourceMappingURL=173.411fec4f.chunk.js.map