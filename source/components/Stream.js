import react, {Component} from "react";
import SnakiteStreamClient from "snapkite-stream-client";
import  StreamTweet from "./StreamTweet";
import Header from "./Header.react";

class Stream extends Component{

    state = {
        tweet : null
    };

    componentDidMount(){
        SnakiteStreamClient.initialiseStream(this.handleNewTweet);
    }

    componentWillUnmount(){
        SnakiteStreamClient.destroyStream();
    }

    handleNewTweet = (tweet) =>{
        this.setState({
            tweet: tweet
        });
    };

    render(){

        const { tweet } = this.state;
        const { onAddTweetToCollection } = this.props;
        const headerText = 'Waiting for public photos from Twitter...';
        if( tweet ){
            return(
                <Stream
                    tweet={tweet}
                    onAddTweetToCollection={onAddTweetToCollection}
                />
            );
        }
        return (
            <Header text={headerText}/>
        );
    }

    
}

export default Stream;

