import * as React from 'react';
import { Component, PropTypes, Children } from 'react';
import { Observable } from 'rxjs/Observable';

interface RxProviderProps {
  state$: Observable<any>;
}

interface RxProviderState {
}

export default class RxProvider extends Component<RxProviderProps, RxProviderState> {

  state$: Observable<any>;

  static propTypes = {
    state$: PropTypes.instanceOf(Observable).isRequired,
    children: PropTypes.element.isRequired
  };

  static childContextTypes = {
    state$: PropTypes.instanceOf(Observable).isRequired
  };

  getChildContext() {
    return { state$: this.state$ };
  }

  constructor(props, context) {
    super(props, context);
    this.state$ = props.state$;
  }

  render() {
    const { children } = this.props;
    return Children.only(children);
  }
}

/*if ('development' === ENV) {

  let didWarnAboutReceivingState = false;
  function warnAboutReceivingState() {
    if (didWarnAboutReceivingState) {
      return;
    }
    didWarnAboutReceivingState = true;

    // eslint-disable no-console
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error('<Provider> does not support changing `state$` on the fly.');
    }
  }

  RxProvider.prototype.componentWillReceiveProps = (nextProps: RxProviderProps) => {
    const { state$ } = this;
    const { state$: nextState$ } = nextProps;

    if (state$ !== nextState$) {
      warnAboutReceivingState();
    }

  };
}
*/
