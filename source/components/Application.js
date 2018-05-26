import React, {Component} from "react";
import Stream from './Stream';
import Collection from './Collection';


class Application extends Component{

    state = {
        collectionTweets:{}
    };

    addTweetsToCollection = (tweet)=>{

        const { collectionTweets } = this.state;
        
        collectionTweets[tweet.id] = tweet;

        this.setState({
            collectionTweets: collectionTweets
        });
    };

    removeTweetsFromCollection =(tweet) =>{

        const { collectionTweets } = this.state;

        delete collectionTweets[tweet.id];

        this.setState({
            collectionTweets: collectionTweets
        });
    };

    removeAllTweetsFromCollection =()=>{
        this.setState({
            collectionTweets: {}
        });
    };

    render(){

        const {
            addTweetsToCollection,
            removeTweetsFromCollection,
            removeAllTweetsFromCollection
        }  = this;

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <Stream onAddTweetToCollection={addTweetsToCollection}/>
                    </div>
                </div>
                <div className="col-md-8">
                    <Collection
                        tweets={this.state.collectionTweets}
                        onRemoveTweetFromCollection={removeTweetsFromCollection}
                        onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}
                    />
                </div>
            </div>
        );
    }
}

export default Application