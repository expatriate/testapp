import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    Image
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

import { 
  navigateToSetupSource,
  navigateToDetails
} from '../../../actions';

class MainPage extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //this.props.getArticles();
    }

    navigateToArticle = (article) => {

        this.props.navigateToDetails(article)
    }

    _renderArticle = (article) => {
      return (
        <TouchableOpacity style={styles.item} onPress={() => {this.navigateToArticle(article.item)}}>
            <View>
                {
                    article.item.imageUrl ?
                        <View>
                            <Image style={styles.articleImage} source={{uri:`${item.photo}`}} resizeMode='cover'/>
                        </View>
                    : null
                }
                <View>
                    <Text>
                        {
                            article.item.title
                        }
                    </Text>
                    <Text>
                        {
                            article.item.shortDescription
                        }
                    </Text>
                </View>
            </View>
            <Text style={styles.title}>
                { article.item.title }
            </Text>
        </TouchableOpacity>
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
        navigateToDetails: (article) => navigateToDetails(article),
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