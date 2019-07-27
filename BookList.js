import React, { Component } from 'react';

import { StyleSheet, Text, View, FlatList, SectionList, SafeAreaView } from 'react-native';

import BookItem from './BookItem'
import NYT from './NYT'


class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: []
            sections: []
        };
    }

    componentDidMount() {
        this._refreshData();
    }

    _renderItem = ({ item }) => {
        return (
            <BookItem
                coverURL={item.book_image}
                title={item.key}
                author={item.author}
            />
        )
    };

    _addKeysToBooks = books => {
        return books.map(book => {
            return Object.assign(book, { key: book.title });
        });
    };

    // _refreshData = () => {
    //     NYT.fetchBooks().then(books => {
    //         this.setState({ data: this._addKeysToBooks(books) })
    //     });
    // };

    _refreshData = () => {
        Promise
            .all([
                NYT.fetchBooks('hardcover-fiction'),
                NYT.fetchBooks('hardcover-nonfiction')
            ])
            .then(results => {
                if (results.length !== 2) {
                    console.error('Unexpected results');
                }

                this.setState({
                    sections: [
                        {
                            title: "Hardcover Fiction",
                            data: this._addKeysToBooks(results[0])
                        },
                        {
                            title: "Hardcover NonFiction",
                            data: this._addKeysToBooks(results[1])
                        }
                    ]
                });
            });
    };

    _renderHeader = ({ section }) => {
        return (
            <Text style={styles.headingText}>
                {section.title}
            </Text>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <View style={styles.container}>
                    <SectionList
                        sections={this.state.sections}
                        renderItem={this._renderItem}
                        renderSectionHeader={this._renderHeader}

                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    safearea: {
        flex: 1,
        backgroundColor: 'white'
    },
    headingText: {
        fontSize: 24,
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        fontWeight: 'bold',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 2,
        paddingBottom: 2,
        width: '100%'
    }
});

export default BookList;