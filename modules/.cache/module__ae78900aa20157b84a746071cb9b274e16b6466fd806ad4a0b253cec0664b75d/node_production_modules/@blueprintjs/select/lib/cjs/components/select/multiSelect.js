"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
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
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var core_1 = require("@blueprintjs/core");
var common_1 = require("../../common");
var queryList_1 = require("../query-list/queryList");
var MultiSelect = /** @class */ (function (_super) {
    tslib_1.__extends(MultiSelect, _super);
    function MultiSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: (_this.props.popoverProps && _this.props.popoverProps.isOpen) || false,
        };
        _this.TypedQueryList = queryList_1.QueryList.ofType();
        _this.input = null;
        _this.queryList = null;
        _this.refHandlers = {
            input: function (ref) {
                _this.input = ref;
                core_1.Utils.safeInvokeMember(_this.props.tagInputProps, "inputRef", ref);
            },
            queryList: function (ref) { return (_this.queryList = ref); },
        };
        _this.renderQueryList = function (listProps) {
            var _a = _this.props, fill = _a.fill, _b = _a.tagInputProps, tagInputProps = _b === void 0 ? {} : _b, _c = _a.popoverProps, popoverProps = _c === void 0 ? {} : _c, _d = _a.selectedItems, selectedItems = _d === void 0 ? [] : _d, placeholder = _a.placeholder;
            var handlePaste = listProps.handlePaste, handleKeyDown = listProps.handleKeyDown, handleKeyUp = listProps.handleKeyUp;
            if (fill) {
                popoverProps.fill = true;
                tagInputProps.fill = true;
            }
            // add our own inputProps.className so that we can reference it in event handlers
            var _e = tagInputProps.inputProps, inputProps = _e === void 0 ? {} : _e;
            inputProps.className = classnames_1.default(inputProps.className, common_1.Classes.MULTISELECT_TAG_INPUT_INPUT);
            var handleTagInputAdd = function (values, method) {
                if (method === "paste") {
                    handlePaste(values);
                }
            };
            return (React.createElement(core_1.Popover, tslib_1.__assign({ autoFocus: false, canEscapeKeyClose: true, enforceFocus: false, isOpen: _this.state.isOpen, position: core_1.Position.BOTTOM_LEFT }, popoverProps, { className: classnames_1.default(listProps.className, popoverProps.className), onInteraction: _this.handlePopoverInteraction, popoverClassName: classnames_1.default(common_1.Classes.MULTISELECT_POPOVER, popoverProps.popoverClassName), onOpened: _this.handlePopoverOpened }),
                React.createElement("div", { onKeyDown: _this.getTagInputKeyDownHandler(handleKeyDown), onKeyUp: _this.getTagInputKeyUpHandler(handleKeyUp) },
                    React.createElement(core_1.TagInput, tslib_1.__assign({ placeholder: placeholder }, tagInputProps, { className: classnames_1.default(common_1.Classes.MULTISELECT, tagInputProps.className), inputRef: _this.refHandlers.input, inputProps: inputProps, inputValue: listProps.query, onAdd: handleTagInputAdd, onInputChange: listProps.handleQueryChange, values: selectedItems.map(_this.props.tagRenderer) }))),
                React.createElement("div", { onKeyDown: handleKeyDown, onKeyUp: handleKeyUp }, listProps.itemList)));
        };
        _this.handleItemSelect = function (item, evt) {
            if (_this.input != null) {
                _this.input.focus();
            }
            core_1.Utils.safeInvoke(_this.props.onItemSelect, item, evt);
        };
        _this.handleQueryChange = function (query, evt) {
            _this.setState({ isOpen: query.length > 0 || !_this.props.openOnKeyDown });
            core_1.Utils.safeInvoke(_this.props.onQueryChange, query, evt);
        };
        _this.handlePopoverInteraction = function (nextOpenState) {
            // deferring to rAF to get properly updated document.activeElement
            return requestAnimationFrame(function () {
                if (_this.input != null && _this.input !== document.activeElement) {
                    // the input is no longer focused so we can close the popover
                    _this.setState({ isOpen: false });
                }
                else if (!_this.props.openOnKeyDown) {
                    // open the popover when focusing the tag input
                    _this.setState({ isOpen: true });
                }
                core_1.Utils.safeInvokeMember(_this.props.popoverProps, "onInteraction", nextOpenState);
            });
        };
        _this.handlePopoverOpened = function (node) {
            if (_this.queryList != null) {
                // scroll active item into view after popover transition completes and all dimensions are stable.
                _this.queryList.scrollActiveItemIntoView();
            }
            core_1.Utils.safeInvokeMember(_this.props.popoverProps, "onOpened", node);
        };
        _this.getTagInputKeyDownHandler = function (handleQueryListKeyDown) {
            return function (e) {
                var which = e.which;
                if (which === core_1.Keys.ESCAPE || which === core_1.Keys.TAB) {
                    // By default the escape key will not trigger a blur on the
                    // input element. It must be done explicitly.
                    if (_this.input != null) {
                        _this.input.blur();
                    }
                    _this.setState({ isOpen: false });
                }
                else if (!(which === core_1.Keys.BACKSPACE || which === core_1.Keys.ARROW_LEFT || which === core_1.Keys.ARROW_RIGHT)) {
                    _this.setState({ isOpen: true });
                }
                var isTargetingTagRemoveButton = e.target.closest("." + core_1.Classes.TAG_REMOVE) != null;
                if (_this.state.isOpen && !isTargetingTagRemoveButton) {
                    core_1.Utils.safeInvoke(handleQueryListKeyDown, e);
                }
            };
        };
        _this.getTagInputKeyUpHandler = function (handleQueryListKeyUp) {
            return function (e) {
                var isTargetingInput = e.target.classList.contains(common_1.Classes.MULTISELECT_TAG_INPUT_INPUT);
                // only handle events when the focus is on the actual <input> inside the TagInput, as that's
                // what QueryList is designed to do
                if (_this.state.isOpen && isTargetingInput) {
                    core_1.Utils.safeInvoke(handleQueryListKeyUp, e);
                }
            };
        };
        return _this;
    }
    MultiSelect.ofType = function () {
        return MultiSelect;
    };
    MultiSelect.prototype.render = function () {
        // omit props specific to this component, spread the rest.
        var _a = this.props, openOnKeyDown = _a.openOnKeyDown, popoverProps = _a.popoverProps, tagInputProps = _a.tagInputProps, restProps = tslib_1.__rest(_a, ["openOnKeyDown", "popoverProps", "tagInputProps"]);
        return (React.createElement(this.TypedQueryList, tslib_1.__assign({}, restProps, { onItemSelect: this.handleItemSelect, onQueryChange: this.handleQueryChange, ref: this.refHandlers.queryList, renderer: this.renderQueryList })));
    };
    MultiSelect.displayName = core_1.DISPLAYNAME_PREFIX + ".MultiSelect";
    MultiSelect.defaultProps = {
        fill: false,
        placeholder: "Search...",
    };
    return MultiSelect;
}(React.PureComponent));
exports.MultiSelect = MultiSelect;
//# sourceMappingURL=multiSelect.js.map