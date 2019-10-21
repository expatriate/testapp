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
    navigateToDetails,
    getArticles
} from '../../../actions';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            refreshing: false
        }
    }

    componentDidMount() {
    }

    navigateToArticle(article) {

        this.props.navigateToDetails(article)
    }

    pullToRefresh() {
        this.setState({
            refreshing: true
        });

        if (this.props.articles.url) {
            this.props.getArticles(this.props.articles.url, false);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.articles.version > this.props.articles.version) {
            this.setState({
                refreshing: false
            })
        }
    }

    renderArticle(article) {
        return (
            <TouchableOpacity style={styles.item} onPress={() => {this.navigateToArticle(article.item)}}>
                <View style={styles.row}>
                    {
                        article.item.imageUrl ?
                            <View style={styles.imageContainer}>
                                <Image style={styles.articleImage} source={{uri:`${article.item.imageUrl}`}} resizeMode='contain'/>
                            </View>
                        : null
                    }
                    <View style={[styles.col, {flex: 1}]}>
                        <View style={[styles.row, styles.nameRow]}>
                            {
                                !article.item.visited ?
                                    <View style={styles.visitedMark}>
                                    </View>
                                : null
                            }
                            <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>
                                {
                                    article.item.title
                                }
                            </Text>
                        </View>
                        <Text style={styles.description} numberOfLines={2} ellipsizeMode={'tail'}>
                            {
                                article.item.shortDescription
                            }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    setupTheSource() {
        
        this.props.navigateToSetupSource();
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    keyExtractor={item => `${item.id}_article`}
                    data={this.props.articles.list}
                    initialNumToRender={10}
                    renderItem={
                        function(item) {
                            return this.renderArticle(item)
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
                    refreshing={this.state.refreshing}
                    onRefresh={()=>{
                        this.pullToRefresh()
                    }}
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
        getArticles: (url, update) => getArticles(url, update),
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