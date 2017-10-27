import Hello from '../compoments/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch } from 'react-redux';
import * as assign from 'object-assign';

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel:enthusiasmLevel,
        name:languageName
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export function mergeProps(stateProps: Object, dispatchProps: Object, ownProps: Object) {
    return assign({}, ownProps, stateProps, dispatchProps);
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Hello);