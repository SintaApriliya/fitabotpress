/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
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
import * as tslib_1 from "tslib";
import classNames from "classnames";
import * as React from "react";
import { polyfill } from "react-lifecycles-compat";
import { AbstractPureComponent2, Classes } from "../../common";
import { DISPLAYNAME_PREFIX } from "../../common/props";
/**
 * `Collapse` can be in one of six states, enumerated here.
 * When changing the `isOpen` prop, the following happens to the states:
 * isOpen={true}  : CLOSED -> OPEN_START -> OPENING -> OPEN
 * isOpen={false} : OPEN -> CLOSING_START -> CLOSING -> CLOSED
 */
export var AnimationStates;
(function (AnimationStates) {
    /**
     * The body is re-rendered, height is set to the measured body height and
     * the body Y is set to 0.
     */
    AnimationStates[AnimationStates["OPEN_START"] = 0] = "OPEN_START";
    /**
     * Animation begins, height is set to auto. This is all animated, and on
     * complete, the state changes to OPEN.
     */
    AnimationStates[AnimationStates["OPENING"] = 1] = "OPENING";
    /**
     * The collapse height is set to auto, and the body Y is set to 0 (so the
     * element can be seen as normal).
     */
    AnimationStates[AnimationStates["OPEN"] = 2] = "OPEN";
    /**
     * Height has been changed from auto to the measured height of the body to
     * prepare for the closing animation in CLOSING.
     */
    AnimationStates[AnimationStates["CLOSING_START"] = 3] = "CLOSING_START";
    /**
     * Height is set to 0 and the body Y is at -height. Both of these properties
     * are transformed, and then after the animation is complete, the state
     * changes to CLOSED.
     */
    AnimationStates[AnimationStates["CLOSING"] = 4] = "CLOSING";
    /**
     * The contents of the collapse is not rendered, the collapse height is 0,
     * and the body Y is at -height (so that the bottom of the body is at Y=0).
     */
    AnimationStates[AnimationStates["CLOSED"] = 5] = "CLOSED";
})(AnimationStates || (AnimationStates = {}));
let Collapse = class Collapse extends AbstractPureComponent2 {
    constructor() {
        super(...arguments);
        this.state = {
            animationState: this.props.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED,
            height: undefined,
            heightWhenOpen: undefined,
        };
        this.contentsRefHandler = (el) => {
            this.contents = el;
            if (this.contents != null) {
                const height = this.contents.clientHeight;
                this.setState({
                    animationState: this.props.isOpen ? AnimationStates.OPEN : AnimationStates.CLOSED,
                    height: height === 0 ? undefined : `${height}px`,
                    heightWhenOpen: height === 0 ? undefined : height,
                });
            }
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { isOpen } = props;
        const { animationState } = state;
        if (isOpen) {
            switch (animationState) {
                case AnimationStates.OPEN:
                    // no-op
                    break;
                case AnimationStates.OPENING:
                    // allow Collapse#onDelayedStateChange() to handle the transition here
                    break;
                default:
                    return { animationState: AnimationStates.OPEN_START };
            }
        }
        else {
            switch (animationState) {
                case AnimationStates.CLOSED:
                    // no-op
                    break;
                case AnimationStates.CLOSING:
                    // allow Collapse#onDelayedStateChange() to handle the transition here
                    break;
                default:
                    // need to set an explicit height so that transition can work
                    return { animationState: AnimationStates.CLOSING_START, height: `${state.heightWhenOpen}px` };
            }
        }
        return null;
    }
    render() {
        const isContentVisible = this.state.animationState !== AnimationStates.CLOSED;
        const shouldRenderChildren = isContentVisible || this.props.keepChildrenMounted;
        const displayWithTransform = isContentVisible && this.state.animationState !== AnimationStates.CLOSING;
        const isAutoHeight = this.state.height === "auto";
        const containerStyle = {
            height: isContentVisible ? this.state.height : undefined,
            overflowY: isAutoHeight ? "visible" : undefined,
            // transitions don't work with height: auto
            transition: isAutoHeight ? "none" : undefined,
        };
        const contentsStyle = {
            // only use heightWhenOpen while closing
            transform: displayWithTransform ? "translateY(0)" : `translateY(-${this.state.heightWhenOpen}px)`,
            // transitions don't work with height: auto
            transition: isAutoHeight ? "none" : undefined,
        };
        return React.createElement(this.props.component, {
            className: classNames(Classes.COLLAPSE, this.props.className),
            style: containerStyle,
        }, React.createElement("div", { className: Classes.COLLAPSE_BODY, ref: this.contentsRefHandler, style: contentsStyle, "aria-hidden": !isContentVisible && this.props.keepChildrenMounted }, shouldRenderChildren ? this.props.children : null));
    }
    componentDidMount() {
        this.forceUpdate();
        if (this.props.isOpen) {
            this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
        }
        else {
            this.setState({ animationState: AnimationStates.CLOSED, height: "0px" });
        }
    }
    componentDidUpdate() {
        const { transitionDuration } = this.props;
        const { animationState } = this.state;
        if (animationState === AnimationStates.OPEN_START) {
            const { clientHeight } = this.contents;
            this.setState({
                animationState: AnimationStates.OPENING,
                height: `${clientHeight}px`,
                heightWhenOpen: clientHeight,
            });
            this.setTimeout(() => this.onDelayedStateChange(), transitionDuration);
        }
        else if (animationState === AnimationStates.CLOSING_START) {
            this.setTimeout(() => this.setState({
                animationState: AnimationStates.CLOSING,
                height: "0px",
            }));
            this.setTimeout(() => this.onDelayedStateChange(), transitionDuration);
        }
    }
    onDelayedStateChange() {
        switch (this.state.animationState) {
            case AnimationStates.OPENING:
                this.setState({ animationState: AnimationStates.OPEN, height: "auto" });
                break;
            case AnimationStates.CLOSING:
                this.setState({ animationState: AnimationStates.CLOSED });
                break;
            default:
                break;
        }
    }
};
Collapse.displayName = `${DISPLAYNAME_PREFIX}.Collapse`;
Collapse.defaultProps = {
    component: "div",
    isOpen: false,
    keepChildrenMounted: false,
    transitionDuration: 200,
};
Collapse = tslib_1.__decorate([
    polyfill
], Collapse);
export { Collapse };
//# sourceMappingURL=collapse.js.map