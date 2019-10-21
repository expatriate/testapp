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
  navigateToSetupSource
} from '../../../actions';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.getArticles();
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

    setupTheSource = () => {
        
        this.props.navigateToSetupSource();
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
                                    The source is not defined
                                </Text>
                            </View>
                        )}
                    }
                    />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {this.setupTheSource()}}
                        >
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
        navigateToSetupSource: navigateToSetupSource,
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