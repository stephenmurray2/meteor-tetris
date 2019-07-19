import Square from './Square.js';

export default class Row extends React.Component {
    const fillTypes = ['empty','fill fill-one','fill fill-two','fill fill-three'];
    //console.log(this.props.squares);  
    //const className = classNames('square', fillTypes[this.props.squares[i]]);
    return <Square propclass={classNames('square', fillTypes[this.props.squares[i]])}/>;
}