import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

import { 
  getArticles
} from '../../../actions';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticles();
    }

    _renderArticle = (article) => {
      return (
        <View style={styles.item}>
            <Text style={styles.title}>
                { article.item.title }
            </Text>
        </View>
      );
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    keyExtractor={item => `${item.id}_article`}
                    data={this.props.articles.list}
                    initialNumToRender={2}
                    renderItem={
                        function(item) {
                            return this._renderArticle(item)
                        }.bind(this)
                    }
                    ListEmptyComponent={() => {
                        return(
                            <View style={styles.nullDatacontainer}>
                                <Text style={styles.nullDatacontainer_text}>
                                    nothing here
                                </Text>
                            </View>
                        )}
                    }
                    />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>
                            Setup the source
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
      );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getArticles: getArticles,
    }, dispatch);
}

export default connect(
    state => {
        return {
            nav: state.nav,
            articles: state.articles
        }
    }, mapDispatchToProps
)(MainPage);