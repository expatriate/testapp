import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    TextInput
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

import { 
  getArticles
} from '../../../actions';

class SetupSourcePage extends Component {
    constructor(props) {
        super(props);


        this.state = {
            url: ''
        }
    }

    componentDidMount() {
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

    fetchData = () => {
        
        this.setState({
            url: 'https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json'
        }, () => {
            
            if (this.state.url.length) {
                this.props.getArticles(this.state.url);
            } else {
                Alert.alert('ERROR', 'URL cannot be empty')
            }
        })
        //const url = 'https://gist.githubusercontent.com/happy-thorny/bd038afd981be300ac2ed6e5a8ad9f3c/raw/dd90f04475a2a7c1110151aacc498eabe683dfe4/memes.json';
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.formInputText}
                        placeholder='Enter the source url'
                        value={this.props.value}
                        onChangeText={
                            (text) => {
                                this.setState({
                                    url: text
                                })
                            }
                        }
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={() => {this.fetchData()}}
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
        getArticles: (url) => getArticles(url),
    }, dispatch);
}

export default connect(
    state => {
        return {
            nav: state.nav,
            articles: state.articles
        }
    }, mapDispatchToProps
)(SetupSourcePage);