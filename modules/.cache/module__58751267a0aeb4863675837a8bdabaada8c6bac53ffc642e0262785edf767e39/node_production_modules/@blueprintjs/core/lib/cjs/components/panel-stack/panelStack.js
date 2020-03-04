"use strict";
/*
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
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_lifecycles_compat_1 = require("react-lifecycles-compat");
var react_transition_group_1 = require("react-transition-group");
var common_1 = require("../../common");
var Errors = tslib_1.__importStar(require("../../common/errors"));
var utils_1 = require("../../common/utils");
var panelView_1 = require("./panelView");
var PanelStack = /** @class */ (function (_super) {
    tslib_1.__extends(PanelStack, _super);
    function PanelStack() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            direction: "push",
            stack: _this.props.stack != null ? _this.props.stack.slice().reverse() : [_this.props.initialPanel],
        };
        _this.handlePanelClose = function (panel) {
            var stack = _this.state.stack;
            // only remove this panel if it is at the top and not the only one.
            if (stack[0] !== panel || stack.length <= 1) {
                return;
            }
            utils_1.safeInvoke(_this.props.onClose, panel);
            if (_this.props.stack == null) {
                _this.setState(function (state) { return ({
                    direction: "pop",
                    stack: state.stack.filter(function (p) { return p !== panel; }),
                }); });
            }
        };
        _this.handlePanelOpen = function (panel) {
            utils_1.safeInvoke(_this.props.onOpen, panel);
            if (_this.props.stack == null) {
                _this.setState(function (state) { return ({
                    direction: "push",
                    stack: [panel].concat(state.stack),
                }); });
            }
        };
        return _this;
    }
    PanelStack.prototype.componentDidUpdate = function (prevProps, _prevState, _snapshot) {
        _super.prototype.componentDidUpdate.call(this, prevProps, _prevState, _snapshot);
        // Always update local stack if stack prop changes
        if (this.props.stack !== prevProps.stack && prevProps.stack != null) {
            this.setState({ stack: this.props.stack.slice().reverse() });
        }
        // Only update animation direction if stack length changes
        var stackLength = this.props.stack != null ? this.props.stack.length : 0;
        var prevStackLength = prevProps.stack != null ? prevProps.stack.length : 0;
        if (stackLength !== prevStackLength && prevProps.stack != null) {
            this.setState({ direction: prevProps.stack.length - this.props.stack.length < 0 ? "push" : "pop" });
        }
    };
    PanelStack.prototype.render = function () {
        var classes = classnames_1.default(common_1.Classes.PANEL_STACK, common_1.Classes.PANEL_STACK + "-" + this.state.direction, this.props.className);
        return (React.createElement(react_transition_group_1.TransitionGroup, { className: classes, component: "div" }, this.renderCurrentPanel()));
    };
    PanelStack.prototype.validateProps = function (props) {
        if ((props.initialPanel == null && props.stack == null) ||
            (props.initialPanel != null && props.stack != null)) {
            throw new Error(Errors.PANEL_STACK_INITIAL_PANEL_STACK_MUTEX);
        }
        if (props.stack != null && props.stack.length === 0) {
            throw new Error(Errors.PANEL_STACK_REQUIRES_PANEL);
        }
    };
    PanelStack.prototype.renderCurrentPanel = function () {
        var _a = this.props.showPanelHeader, showPanelHeader = _a === void 0 ? true : _a;
        var stack = this.state.stack;
        if (stack.length === 0) {
            return null;
        }
        var activePanel = stack[0], previousPanel = stack[1];
        return (React.createElement(react_transition_group_1.CSSTransition, { classNames: common_1.Classes.PANEL_STACK, key: stack.length, timeout: 400 },
            React.createElement(panelView_1.PanelView, { onClose: this.handlePanelClose, onOpen: this.handlePanelOpen, panel: activePanel, previousPanel: previousPanel, showHeader: showPanelHeader })));
    };
    PanelStack = tslib_1.__decorate([
        react_lifecycles_compat_1.polyfill
    ], PanelStack);
    return PanelStack;
}(common_1.AbstractPureComponent2));
exports.PanelStack = PanelStack;
//# sourceMappingURL=panelStack.js.map