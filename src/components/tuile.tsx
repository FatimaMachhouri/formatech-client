import React from 'react';
import '../style/tuile.css';


const fakeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio erat. Integer pharetra dui sit amet mauris hendrerit, id faucibus lectus lobortis. Vestibulum efficitur ultrices enim eget congue. Donec porta, nunc a facilisis mollis, erat eros vulputate tortor, et maximus urna urna vel justo. Etiam blandit massa eget tincidunt hendrerit. "

interface IState {
    name?: string;
}

interface IProps {
    name: string;
}
class Tuile extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            name: this.props.name,
        };

    }

    render() {
        return (
            <div className="container">
                <p className="title">{this.state.name}</p>
            </div>
        );
    }

};

export default Tuile;