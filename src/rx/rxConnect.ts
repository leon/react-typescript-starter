import {Component} from 'react';
import {Observable} from "rxjs/Observable";

export default function rxConnect(mapStateToProps, mapSubjectsToProps) {

  return function wrapWithRxConnect(WrappedComponent) {
    class RxConnect extends Component {

      $state: Observable<any>;

      shouldComponentUpdate() {
        //return !pure || this.haveOwnPropsChanged || this.hasStoreStateChanged
      }

      constructor(props, context) {
        super(props, context);
        this.state$ = props.state$ || context.state$;

        /*invariant(this.store,
          `Could not find "store" in either the context or ` +
          `props of "${this.constructor.displayName}". ` +
          `Either wrap the root component in a <Provider>, ` +
          `or explicitly pass "store" as a prop to "${this.constructor.displayName}".`
        )*/
      }
}
