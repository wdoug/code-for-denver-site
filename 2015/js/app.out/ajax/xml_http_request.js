// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9632,handler){
var map__9633 = p__9632;
var map__9633__$1 = ((((!((map__9633 == null)))?((((map__9633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9633):map__9633);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9633__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9633__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9633__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9633__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9633__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9633__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9633__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9633,map__9633__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9631_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__9631_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__9633,map__9633__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___9641 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___9641)){
var response_type_9642 = temp__4425__auto___9641;
this$__$1.responseType = cljs.core.name(response_type_9642);
} else {
}

var seq__9635_9643 = cljs.core.seq(headers);
var chunk__9636_9644 = null;
var count__9637_9645 = (0);
var i__9638_9646 = (0);
while(true){
if((i__9638_9646 < count__9637_9645)){
var vec__9639_9647 = chunk__9636_9644.cljs$core$IIndexed$_nth$arity$2(null,i__9638_9646);
var k_9648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9639_9647,(0),null);
var v_9649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9639_9647,(1),null);
this$__$1.setRequestHeader(k_9648,v_9649);

var G__9650 = seq__9635_9643;
var G__9651 = chunk__9636_9644;
var G__9652 = count__9637_9645;
var G__9653 = (i__9638_9646 + (1));
seq__9635_9643 = G__9650;
chunk__9636_9644 = G__9651;
count__9637_9645 = G__9652;
i__9638_9646 = G__9653;
continue;
} else {
var temp__4425__auto___9654 = cljs.core.seq(seq__9635_9643);
if(temp__4425__auto___9654){
var seq__9635_9655__$1 = temp__4425__auto___9654;
if(cljs.core.chunked_seq_QMARK_(seq__9635_9655__$1)){
var c__5711__auto___9656 = cljs.core.chunk_first(seq__9635_9655__$1);
var G__9657 = cljs.core.chunk_rest(seq__9635_9655__$1);
var G__9658 = c__5711__auto___9656;
var G__9659 = cljs.core.count(c__5711__auto___9656);
var G__9660 = (0);
seq__9635_9643 = G__9657;
chunk__9636_9644 = G__9658;
count__9637_9645 = G__9659;
i__9638_9646 = G__9660;
continue;
} else {
var vec__9640_9661 = cljs.core.first(seq__9635_9655__$1);
var k_9662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9640_9661,(0),null);
var v_9663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9640_9661,(1),null);
this$__$1.setRequestHeader(k_9662,v_9663);

var G__9664 = cljs.core.next(seq__9635_9655__$1);
var G__9665 = null;
var G__9666 = (0);
var G__9667 = (0);
seq__9635_9643 = G__9664;
chunk__9636_9644 = G__9665;
count__9637_9645 = G__9666;
i__9638_9646 = G__9667;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4908__auto__ = body;
if(cljs.core.truth_(or__4908__auto__)){
return or__4908__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
