import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

class DetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
      return (
            <View>
                <Text>
                    Details page
                    <Text>
                        {
                            JSON.stringify(this.props, null, 2)
                        }
                    </Text>
                </Text>
            </View>
      );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(
    state => {
        return {
            nav: state.nav,
            articles: state.articles
        }
    }, mapDispatchToProps
)(DetailsPage);