import React from 'react';

export default (fetchData) => (WrappedComponent) => {
    class DataFetcher extends React.Component {
        state = {
            data: {},
            loaded: false
        }

        componentDidMount() {
            const {
                match: { params },
            } = this.props;

            if (!this.state.loaded) {
                fetchData(params).then(data => console.log(data) || this.setState({data, loaded: true}));
            }
        }

        render() {
            const {
                match,
                ...rest
            } = this.props;

            const {
                loaded,
                data
            } = this.state;

            return loaded ? <WrappedComponent {...rest} {...data} /> : <div>Loading</div>
        }
    }

    return DataFetcher;
}