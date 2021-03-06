import * as React from 'react';

export interface Props {
	name: string;
	enthusiasmLevel?: number;
	onIncrement?: () => void;
	onDecrement?: () => void;
}

export default class Hello extends React.Component<Props, object> {
	render() {
		const { name, enthusiasmLevel = 1 } = this.props;

		if (enthusiasmLevel <= 0) {
			throw new Error('You could be a little more enthusiastic. :D');
		}

		return (
			<div className="hello">
				<div className="greeting">
					Hello {name + getExclamationMarks(enthusiasmLevel)}
				</div>
				<div>
					<button onClick={this.props.onDecrement}>-</button>
					<button onClick={this.props.onIncrement}>+</button>
				</div>
			</div>
		);
	}
}

function getExclamationMarks(numChars: number) {
	return Array(numChars + 1).join('!');
}