!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@blueprintjs/core"),require("tslib"),require("react"),require("classnames")):"function"==typeof define&&define.amd?define(["@blueprintjs/core","tslib","react","classnames"],t):"object"==typeof exports?exports.Select=t(require("@blueprintjs/core"),require("tslib"),require("react"),require("classnames")):(e.Blueprint=e.Blueprint||{},e.Blueprint.Select=t(e.Blueprint.Core,e.window,e.React,e.classNames))}(window,function(e,t,n,r){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"MULTISELECT",function(){return o}),n.d(r,"MULTISELECT_POPOVER",function(){return p}),n.d(r,"MULTISELECT_TAG_INPUT_INPUT",function(){return a}),n.d(r,"OMNIBAR",function(){return u}),n.d(r,"OMNIBAR_OVERLAY",function(){return l}),n.d(r,"SELECT",function(){return c}),n.d(r,"SELECT_POPOVER",function(){return d});var s=n(0),i=s.Classes.getClassNamespace(),o=i+"-multi-select",p=o+"-popover",a=o+"-tag-input-input",u=i+"-omnibar",l=u+"-overlay",c=i+"-select",d=c+"-popover";
/*!
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function m(e,t,n){if(0===e.query.length&&void 0!==n)return n;var r=e.filteredItems.map(e.renderItem).filter(function(e){return null!=e});return r.length>0?r:t}function f(e,t,n){return void 0===e||null==t||null==n?t===n:s.Utils.isFunction(e)?e(t,n):t[e]===n[e]}
/*!
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){return{__blueprintCreateNewItemBrand:"blueprint-create-new-item"}}function h(e){if(null==e)return!1;var t=Object.keys(e);return 1===t.length&&"__blueprintCreateNewItemBrand"===t[0]&&"blueprint-create-new-item"===e.__blueprintCreateNewItemBrand}function I(e){return null==e||h(e)?null:e}var y=n(1),P=n(3),g=n.n(P),O=n(2),C=function(e){function t(t,n){var r=e.call(this,t,n)||this;r.refHandlers={itemsParent:function(e){return r.itemsParentRef=e}},r.shouldCheckActiveItemInViewport=!1,r.expectedNextActiveItem=null,r.renderItemList=function(e){var t=r.props,n=t.initialContent,i=t.noResults,o=m(e,r.isCreateItemRendered()?null:i,n),p=r.isCreateItemRendered()?r.renderCreateItemMenuItem(r.state.query):null;return null==o&&null==p?null:O.createElement(s.Menu,{ulRef:e.itemsParentRef},o,p)},r.renderItem=function(e,t){if(!0!==r.props.disabled){var n=r.state,s=n.activeItem,i=n.query,o=r.state.filteredItems.indexOf(e)>=0,p={active:f(r.props.itemsEqual,I(s),e),disabled:L(e,t,r.props.itemDisabled),matchesPredicate:o};return r.props.itemRenderer(e,{handleClick:function(t){return r.handleItemSelect(e,t)},index:t,modifiers:p,query:i})}return null},r.renderCreateItemMenuItem=function(e){var t=h(r.state.activeItem);return s.Utils.safeInvoke(r.props.createNewItemRenderer,e,t,function(t){r.handleItemCreate(e,t)})},r.handleItemCreate=function(e,t){var n=s.Utils.safeInvoke(r.props.createNewItemFromQuery,e);null!=n&&(s.Utils.safeInvoke(r.props.onItemSelect,n,t),r.setQuery("",!0))},r.handleItemSelect=function(e,t){r.setActiveItem(e),s.Utils.safeInvoke(r.props.onItemSelect,e,t),r.props.resetOnSelect&&r.setQuery("",!0)},r.handlePaste=function(e){for(var t,n=r.props,i=n.createNewItemFromQuery,o=n.onItemsPaste,p=[],a=[],u=0,l=e;u<l.length;u++){var c=l[u],d=E(c,r.props);if(void 0!==d)t=d,a.push(d);else if(r.canCreateItems()){var m=s.Utils.safeInvoke(i,c);void 0!==m&&a.push(m)}else p.push(c)}r.setQuery(p.join(", "),!1),void 0!==t&&r.setActiveItem(t),s.Utils.safeInvoke(o,a)},r.handleKeyDown=function(e){var t=e.keyCode;if(t===s.Keys.ARROW_UP||t===s.Keys.ARROW_DOWN){e.preventDefault();var n=r.getNextActiveItem(t===s.Keys.ARROW_UP?-1:1);null!=n&&r.setActiveItem(n)}s.Utils.safeInvoke(r.props.onKeyDown,e)},r.handleKeyUp=function(e){var t=r.props.onKeyUp,n=r.state.activeItem;e.keyCode===s.Keys.ENTER&&(e.preventDefault(),null==n||h(n)?r.handleItemCreate(r.state.query,e):r.handleItemSelect(n,e)),s.Utils.safeInvoke(t,e)},r.handleQueryChange=function(e){var t=null==e?"":e.target.value;r.setQuery(t),s.Utils.safeInvoke(r.props.onQueryChange,t,e)};var i=t.query,o=void 0===i?"":i,p=s.Utils.safeInvoke(t.createNewItemFromQuery,o),a=T(o,t);return r.state={activeItem:void 0!==t.activeItem?t.activeItem:S(a,t.itemDisabled),createNewItem:p,filteredItems:a,query:o},r}return y.__extends(t,e),t.ofType=function(){return t},t.prototype.render=function(){var e=this.props,t=e.className,n=e.items,r=e.renderer,s=e.itemListRenderer,i=void 0===s?this.renderItemList:s,o=this.state,p=(o.createNewItem,y.__rest(o,["createNewItem"]));return r(y.__assign({},p,{className:t,handleItemSelect:this.handleItemSelect,handleKeyDown:this.handleKeyDown,handleKeyUp:this.handleKeyUp,handlePaste:this.handlePaste,handleQueryChange:this.handleQueryChange,itemList:i(y.__assign({},p,{items:n,itemsParentRef:this.refHandlers.itemsParent,renderItem:this.renderItem}))}))},t.prototype.componentDidUpdate=function(e){var t=this;void 0!==this.props.activeItem&&this.props.activeItem!==this.state.activeItem&&(this.shouldCheckActiveItemInViewport=!0,this.setState({activeItem:this.props.activeItem})),null!=this.props.query&&this.props.query!==e.query?this.setQuery(this.props.query,this.props.resetOnQuery,this.props):s.Utils.shallowCompareKeys(this.props,e,{include:["items","itemListPredicate","itemPredicate"]})||this.setQuery(this.state.query),this.shouldCheckActiveItemInViewport&&(requestAnimationFrame(function(){return t.scrollActiveItemIntoView()}),this.shouldCheckActiveItemInViewport=!1)},t.prototype.scrollActiveItemIntoView=function(){var e=!1!==this.props.scrollToActiveItem,t=!f(this.props.itemsEqual,I(this.expectedNextActiveItem),I(this.props.activeItem));if(this.expectedNextActiveItem=null,e||!t){var n=this.getActiveElement();if(null!=this.itemsParentRef&&null!=n){var r=n.offsetTop,s=n.offsetHeight,i=this.itemsParentRef,o=i.offsetTop,p=i.scrollTop,a=i.clientHeight,u=this.getItemsParentPadding(),l=u.paddingTop,c=r+s+u.paddingBottom-o,d=r-l-o;c>=p+a?this.itemsParentRef.scrollTop=c+s-a:d<=p&&(this.itemsParentRef.scrollTop=d-s)}}},t.prototype.setQuery=function(e,t,n){void 0===t&&(t=this.props.resetOnQuery),void 0===n&&(n=this.props);var r=n.createNewItemFromQuery;this.shouldCheckActiveItemInViewport=!0,e!==this.state.query&&s.Utils.safeInvoke(n.onQueryChange,e);var i=T(e,n),o=null!=r&&""!==e?r(e):void 0;this.setState({createNewItem:o,filteredItems:i,query:e});var p=this.getActiveIndex(i);(t||p<0||L(I(this.state.activeItem),p,n.itemDisabled))&&this.setActiveItem(S(i,n.itemDisabled))},t.prototype.getActiveElement=function(){var e=this.state.activeItem;if(null!=this.itemsParentRef){if(h(e))return this.itemsParentRef.children.item(this.state.filteredItems.length);var t=this.getActiveIndex();return this.itemsParentRef.children.item(t)}},t.prototype.getActiveIndex=function(e){void 0===e&&(e=this.state.filteredItems);var t=this.state.activeItem;if(null==t||h(t))return-1;for(var n=0;n<e.length;++n)if(f(this.props.itemsEqual,e[n],t))return n;return-1},t.prototype.getItemsParentPadding=function(){var e=getComputedStyle(this.itemsParentRef),t=e.paddingTop;return{paddingBottom:_(e.paddingBottom),paddingTop:_(t)}},t.prototype.getNextActiveItem=function(e,t){if((void 0===t&&(t=this.getActiveIndex()),this.isCreateItemRendered())&&(0===t&&-1===e||t===this.state.filteredItems.length-1&&1===e))return{__blueprintCreateNewItemBrand:"blueprint-create-new-item"};return S(this.state.filteredItems,this.props.itemDisabled,e,t)},t.prototype.setActiveItem=function(e){this.expectedNextActiveItem=e,void 0===this.props.activeItem&&(this.shouldCheckActiveItemInViewport=!0,this.setState({activeItem:e})),h(e)?s.Utils.safeInvoke(this.props.onActiveItemChange,null,!0):s.Utils.safeInvoke(this.props.onActiveItemChange,e,!1)},t.prototype.isCreateItemRendered=function(){return this.canCreateItems()&&""!==this.state.query&&!this.wouldCreatedItemMatchSomeExistingItem()},t.prototype.canCreateItems=function(){return null!=this.props.createNewItemFromQuery&&null!=this.props.createNewItemRenderer},t.prototype.wouldCreatedItemMatchSomeExistingItem=function(){var e=this;return this.state.filteredItems.some(function(t){return f(e.props.itemsEqual,t,e.state.createNewItem)})},t.displayName=s.DISPLAYNAME_PREFIX+".QueryList",t.defaultProps={disabled:!1,resetOnQuery:!0},t}(s.AbstractComponent2);function _(e){return null==e?0:parseInt(e.slice(0,-2),10)}function E(e,t){var n=t.items,r=t.itemPredicate;if(s.Utils.isFunction(r))for(var i=0;i<n.length;i++){var o=n[i];if(r(e,o,i,!0))return o}}function T(e,t){var n=t.items,r=t.itemPredicate,i=t.itemListPredicate;return s.Utils.isFunction(i)?i(e,n):s.Utils.isFunction(r)?n.filter(function(t,n){return r(e,t,n)}):n}function L(e,t,n){return null!=n&&null!=e&&(s.Utils.isFunction(n)?n(e,t):!!e[n])}function S(e,t,n,r){if(void 0===n&&(n=1),void 0===r&&(r=e.length-1),0===e.length)return null;var s,i,o,p=r,a=e.length-1;do{if(o=a,!L(e[p=(s=p+n)<(i=0)?o:s>o?i:s],p,t))return e[p]}while(p!==r&&-1!==r);return null}var U=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.TypedQueryList=C.ofType(),t.renderQueryList=function(e){var n=t.props,i=n.inputProps,o=void 0===i?{}:i,p=n.isOpen,a=n.overlayProps,u=void 0===a?{}:a,l=e.handleKeyDown,c=e.handleKeyUp,d=p?{onKeyDown:l,onKeyUp:c}:{};return O.createElement(s.Overlay,y.__assign({hasBackdrop:!0},u,{isOpen:p,className:g()(r.OMNIBAR_OVERLAY,u.className),onClose:t.handleOverlayClose}),O.createElement("div",y.__assign({className:g()(r.OMNIBAR,e.className)},d),O.createElement(s.InputGroup,y.__assign({autoFocus:!0,large:!0,leftIcon:"search",placeholder:"Search..."},o,{onChange:e.handleQueryChange,value:e.query})),e.itemList))},t.handleOverlayClose=function(e){s.Utils.safeInvokeMember(t.props.overlayProps,"onClose",e),s.Utils.safeInvoke(t.props.onClose,e)},t}return y.__extends(t,e),t.ofType=function(){return t},t.prototype.render=function(){var e=this.props,t=e.initialContent,n=void 0===t?null:t,r=(e.isOpen,e.inputProps,e.overlayProps,y.__rest(e,["initialContent","isOpen","inputProps","overlayProps"]));return O.createElement(this.TypedQueryList,y.__assign({},r,{initialContent:n,renderer:this.renderQueryList}))},t.displayName=s.DISPLAYNAME_PREFIX+".Omnibar",t}(O.PureComponent),A=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isOpen:t.props.popoverProps&&t.props.popoverProps.isOpen||!1},t.TypedQueryList=C.ofType(),t.input=null,t.queryList=null,t.refHandlers={input:function(e){t.input=e,s.Utils.safeInvokeMember(t.props.tagInputProps,"inputRef",e)},queryList:function(e){return t.queryList=e}},t.renderQueryList=function(e){var n=t.props,i=n.fill,o=n.tagInputProps,p=void 0===o?{}:o,a=n.popoverProps,u=void 0===a?{}:a,l=n.selectedItems,c=void 0===l?[]:l,d=n.placeholder,m=e.handlePaste,f=e.handleKeyDown,v=e.handleKeyUp;i&&(u.fill=!0,p.fill=!0);var h=p.inputProps,I=void 0===h?{}:h;I.className=g()(I.className,r.MULTISELECT_TAG_INPUT_INPUT);return O.createElement(s.Popover,y.__assign({autoFocus:!1,canEscapeKeyClose:!0,enforceFocus:!1,isOpen:t.state.isOpen,position:s.Position.BOTTOM_LEFT},u,{className:g()(e.className,u.className),onInteraction:t.handlePopoverInteraction,popoverClassName:g()(r.MULTISELECT_POPOVER,u.popoverClassName),onOpened:t.handlePopoverOpened}),O.createElement("div",{onKeyDown:t.getTagInputKeyDownHandler(f),onKeyUp:t.getTagInputKeyUpHandler(v)},O.createElement(s.TagInput,y.__assign({placeholder:d},p,{className:g()(r.MULTISELECT,p.className),inputRef:t.refHandlers.input,inputProps:I,inputValue:e.query,onAdd:function(e,t){"paste"===t&&m(e)},onInputChange:e.handleQueryChange,values:c.map(t.props.tagRenderer)}))),O.createElement("div",{onKeyDown:f,onKeyUp:v},e.itemList))},t.handleItemSelect=function(e,n){null!=t.input&&t.input.focus(),s.Utils.safeInvoke(t.props.onItemSelect,e,n)},t.handleQueryChange=function(e,n){t.setState({isOpen:e.length>0||!t.props.openOnKeyDown}),s.Utils.safeInvoke(t.props.onQueryChange,e,n)},t.handlePopoverInteraction=function(e){return requestAnimationFrame(function(){null!=t.input&&t.input!==document.activeElement?t.setState({isOpen:!1}):t.props.openOnKeyDown||t.setState({isOpen:!0}),s.Utils.safeInvokeMember(t.props.popoverProps,"onInteraction",e)})},t.handlePopoverOpened=function(e){null!=t.queryList&&t.queryList.scrollActiveItemIntoView(),s.Utils.safeInvokeMember(t.props.popoverProps,"onOpened",e)},t.getTagInputKeyDownHandler=function(e){return function(n){var r=n.which;r===s.Keys.ESCAPE||r===s.Keys.TAB?(null!=t.input&&t.input.blur(),t.setState({isOpen:!1})):r!==s.Keys.BACKSPACE&&r!==s.Keys.ARROW_LEFT&&r!==s.Keys.ARROW_RIGHT&&t.setState({isOpen:!0});var i=null!=n.target.closest("."+s.Classes.TAG_REMOVE);t.state.isOpen&&!i&&s.Utils.safeInvoke(e,n)}},t.getTagInputKeyUpHandler=function(e){return function(n){var i=n.target.classList.contains(r.MULTISELECT_TAG_INPUT_INPUT);t.state.isOpen&&i&&s.Utils.safeInvoke(e,n)}},t}return y.__extends(t,e),t.ofType=function(){return t},t.prototype.render=function(){var e=this.props,t=(e.openOnKeyDown,e.popoverProps,e.tagInputProps,y.__rest(e,["openOnKeyDown","popoverProps","tagInputProps"]));return O.createElement(this.TypedQueryList,y.__assign({},t,{onItemSelect:this.handleItemSelect,onQueryChange:this.handleQueryChange,ref:this.refHandlers.queryList,renderer:this.renderQueryList}))},t.displayName=s.DISPLAYNAME_PREFIX+".MultiSelect",t.defaultProps={fill:!1,placeholder:"Search..."},t}(O.PureComponent),w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isOpen:!1},t.TypedQueryList=C.ofType(),t.input=null,t.queryList=null,t.refHandlers={input:function(e){t.input=e,s.Utils.safeInvokeMember(t.props.inputProps,"inputRef",e)},queryList:function(e){return t.queryList=e}},t.renderQueryList=function(e){var n=t.props,i=n.filterable,o=void 0===i||i,p=n.disabled,a=void 0!==p&&p,u=n.inputProps,l=void 0===u?{}:u,c=n.popoverProps,d=void 0===c?{}:c,m=O.createElement(s.InputGroup,y.__assign({leftIcon:"search",placeholder:"Filter...",rightElement:t.maybeRenderClearButton(e.query)},l,{inputRef:t.refHandlers.input,onChange:e.handleQueryChange,value:e.query})),f=e.handleKeyDown,v=e.handleKeyUp;return O.createElement(s.Popover,y.__assign({autoFocus:!1,enforceFocus:!1,isOpen:t.state.isOpen,disabled:a,position:s.Position.BOTTOM_LEFT},d,{className:g()(e.className,d.className),onInteraction:t.handlePopoverInteraction,popoverClassName:g()(r.SELECT_POPOVER,d.popoverClassName),onOpening:t.handlePopoverOpening,onOpened:t.handlePopoverOpened,onClosing:t.handlePopoverClosing}),O.createElement("div",{onKeyDown:t.state.isOpen?f:t.handleTargetKeyDown,onKeyUp:t.state.isOpen?v:void 0},t.props.children),O.createElement("div",{onKeyDown:f,onKeyUp:v},o?m:void 0,e.itemList))},t.handleTargetKeyDown=function(e){e.which!==s.Keys.ARROW_UP&&e.which!==s.Keys.ARROW_DOWN||(e.preventDefault(),t.setState({isOpen:!0}))},t.handleItemSelect=function(e,n){t.setState({isOpen:!1}),s.Utils.safeInvoke(t.props.onItemSelect,e,n)},t.handlePopoverInteraction=function(e){t.setState({isOpen:e}),s.Utils.safeInvokeMember(t.props.popoverProps,"onInteraction",e)},t.handlePopoverOpening=function(e){t.previousFocusedElement=document.activeElement,t.props.resetOnClose&&t.resetQuery(),s.Utils.safeInvokeMember(t.props.popoverProps,"onOpening",e)},t.handlePopoverOpened=function(e){null!=t.queryList&&t.queryList.scrollActiveItemIntoView(),requestAnimationFrame(function(){var e=t.props.inputProps;!1!==(void 0===e?{}:e).autoFocus&&null!=t.input&&t.input.focus()}),s.Utils.safeInvokeMember(t.props.popoverProps,"onOpened",e)},t.handlePopoverClosing=function(e){requestAnimationFrame(function(){void 0!==t.previousFocusedElement&&(t.previousFocusedElement.focus(),t.previousFocusedElement=void 0)}),s.Utils.safeInvokeMember(t.props.popoverProps,"onClosing",e)},t.resetQuery=function(){return t.queryList&&t.queryList.setQuery("",!0)},t}return y.__extends(t,e),t.ofType=function(){return t},t.prototype.render=function(){var e=this.props,t=(e.filterable,e.inputProps,e.popoverProps,y.__rest(e,["filterable","inputProps","popoverProps"]));return O.createElement(this.TypedQueryList,y.__assign({},t,{onItemSelect:this.handleItemSelect,ref:this.refHandlers.queryList,renderer:this.renderQueryList}))},t.prototype.componentDidUpdate=function(e,t){this.state.isOpen&&!t.isOpen&&null!=this.queryList&&this.queryList.scrollActiveItemIntoView()},t.prototype.maybeRenderClearButton=function(e){return e.length>0?O.createElement(s.Button,{icon:"cross",minimal:!0,onClick:this.resetQuery}):void 0},t.displayName=s.DISPLAYNAME_PREFIX+".Select",t}(O.PureComponent),N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={isOpen:null!=t.props.popoverProps&&t.props.popoverProps.isOpen||!1,selectedItem:t.getInitialSelectedItem()},t.TypedQueryList=C.ofType(),t.input=null,t.queryList=null,t.refHandlers={input:function(e){t.input=e,s.Utils.safeInvokeMember(t.props.inputProps,"inputRef",e)},queryList:function(e){return t.queryList=e}},t.renderQueryList=function(e){var n=t.props,i=n.fill,o=n.inputProps,p=void 0===o?{}:o,a=n.popoverProps,u=void 0===a?{}:a,l=t.state,c=l.isOpen,d=l.selectedItem,m=e.handleKeyDown,f=e.handleKeyUp,v=p.autoComplete,h=void 0===v?"off":v,I=p.placeholder,P=void 0===I?"Search...":I,C=d?t.props.inputValueRenderer(d):"",_=c&&C?C:P,E=c?e.query:C||(t.props.resetOnClose?"":e.query);return i&&(u.fill=!0,p.fill=!0),O.createElement(s.Popover,y.__assign({autoFocus:!1,enforceFocus:!1,isOpen:c,position:s.Position.BOTTOM_LEFT},u,{className:g()(e.className,u.className),onInteraction:t.handlePopoverInteraction,popoverClassName:g()(r.SELECT_POPOVER,u.popoverClassName),onOpening:t.handlePopoverOpening,onOpened:t.handlePopoverOpened}),O.createElement(s.InputGroup,y.__assign({autoComplete:h,disabled:t.props.disabled},p,{inputRef:t.refHandlers.input,onChange:e.handleQueryChange,onFocus:t.handleInputFocus,onKeyDown:t.getTargetKeyDownHandler(m),onKeyUp:t.getTargetKeyUpHandler(f),placeholder:_,value:E})),O.createElement("div",{onKeyDown:m,onKeyUp:f},e.itemList))},t.selectText=function(){requestAnimationFrame(function(){null!=t.input&&t.input.setSelectionRange(0,t.input.value.length)})},t.handleInputFocus=function(e){t.selectText(),t.props.openOnKeyDown||t.setState({isOpen:!0}),s.Utils.safeInvokeMember(t.props.inputProps,"onFocus",e)},t.handleItemSelect=function(e,n){var r;t.props.closeOnSelect?(null!=t.input&&t.input.blur(),r=!1):(null!=t.input&&t.input.focus(),t.selectText(),r=!0),void 0===t.props.selectedItem?t.setState({isOpen:r,selectedItem:e}):t.setState({isOpen:r}),s.Utils.safeInvoke(t.props.onItemSelect,e,n)},t.handlePopoverInteraction=function(e){return requestAnimationFrame(function(){null!=t.input&&t.input!==document.activeElement&&t.setState({isOpen:!1}),s.Utils.safeInvokeMember(t.props.popoverProps,"onInteraction",e)})},t.handlePopoverOpening=function(e){t.props.resetOnClose&&t.queryList&&t.queryList.setQuery("",!0),s.Utils.safeInvokeMember(t.props.popoverProps,"onOpening",e)},t.handlePopoverOpened=function(e){null!=t.queryList&&t.queryList.scrollActiveItemIntoView(),s.Utils.safeInvokeMember(t.props.popoverProps,"onOpened",e)},t.getTargetKeyDownHandler=function(e){return function(n){var r=n.which;r===s.Keys.ESCAPE||r===s.Keys.TAB?(null!=t.input&&t.input.blur(),t.setState({isOpen:!1})):t.props.openOnKeyDown&&r!==s.Keys.BACKSPACE&&r!==s.Keys.ARROW_LEFT&&r!==s.Keys.ARROW_RIGHT&&t.setState({isOpen:!0}),t.state.isOpen&&s.Utils.safeInvoke(e,n),s.Utils.safeInvokeMember(t.props.inputProps,"onKeyDown",n)}},t.getTargetKeyUpHandler=function(e){return function(n){t.state.isOpen&&s.Utils.safeInvoke(e,n),s.Utils.safeInvokeMember(t.props.inputProps,"onKeyUp",n)}},t}return y.__extends(t,e),t.ofType=function(){return t},t.prototype.render=function(){var e=this.props,t=(e.disabled,e.inputProps,e.popoverProps,y.__rest(e,["disabled","inputProps","popoverProps"]));return O.createElement(this.TypedQueryList,y.__assign({},t,{onItemSelect:this.handleItemSelect,ref:this.refHandlers.queryList,renderer:this.renderQueryList}))},t.prototype.componentDidUpdate=function(e,t){void 0!==this.props.selectedItem&&this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem}),this.state.isOpen&&!t.isOpen&&null!=this.queryList&&this.queryList.scrollActiveItemIntoView()},t.prototype.getInitialSelectedItem=function(){return void 0!==this.props.selectedItem?this.props.selectedItem:void 0!==this.props.defaultSelectedItem?this.props.defaultSelectedItem:null},t.displayName=s.DISPLAYNAME_PREFIX+".Suggest",t.defaultProps={closeOnSelect:!0,fill:!1,openOnKeyDown:!1,resetOnClose:!1},t}(O.PureComponent);n.d(t,"Classes",function(){return r}),n.d(t,"renderFilteredItems",function(){return m}),n.d(t,"executeItemsEqual",function(){return f}),n.d(t,"getCreateNewItem",function(){return v}),n.d(t,"isCreateNewItem",function(){return h}),n.d(t,"getActiveItem",function(){return I}),n.d(t,"Omnibar",function(){return U}),n.d(t,"QueryList",function(){return C}),n.d(t,"getFirstEnabledItem",function(){return S}),n.d(t,"MultiSelect",function(){return A}),n.d(t,"Select",function(){return w}),n.d(t,"Suggest",function(){return N})}])});