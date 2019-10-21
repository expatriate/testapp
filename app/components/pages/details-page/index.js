import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles';

import { format } from 'date-fns';

import { 
    navigateBack,
    setVisited
} from '../../../actions';

class DetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {
                id: 0,
                date: '',
                shortDescription: '',
                description: '',
                imageUrl: '',
                link: '',
                title: ''
            }
        }
    }

    componentDidMount() {
        this.setState({
            article: this.props.navigation.state.params ? 
                this.props.navigation.state.params.article :
                {
                    id: 0,
                    date: '',
                    shortDescription: '',
                    description: '',
                    imageUrl: '',
                    link: '',
                    title: ''
                }
        }, () => {
            this.props.setVisited(this.state.article.id);
        })
    }

    render() {
      return (
            <ScrollView style={styles.container}>
                <View>
                    <TouchableOpacity onPress={() => {this.props.navigateBack()}}>
                        <Text style={styles.getback}>
                            {`< Back to list`}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.col, styles.content]}>
                    <View style={styles.row}>
                        {
                            this.state.article.imageUrl ?
                            <View style={styles.imageContainer}>
                                <Image style={styles.articleImage} source={{uri:`${this.state.article.imageUrl}`}} resizeMode='contain'/>
                            </View>
                            : null
                        }
                        <View style={[styles.col, styles.info]}>
                            <Text style={styles.title} numberOfLines={3}>
                                { this.state.article.title }
                            </Text>
                            {
                                this.state.article.date ?
                                <Text style={styles.date} numberOfLines={1}>
                                    Date: { format(new Date(this.state.article.date), 'HH:mm:ss yyyy-MM-dd ') }
                                </Text>
                                : null
                            }
                            <View style={styles.row}>
                                <TouchableOpacity style={styles.link} onPress={() => Linking.openURL(`${this.state.article.link}`)}>
                                    <Text style={styles.linkText}>
                                        Open link
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.description}>
                            {
                                this.state.article.description
                            }
                        </Text>
                    </View>
                </View>
            </ScrollView>
      );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        navigateBack: navigateBack,
        setVisited: (id) => setVisited(id)
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