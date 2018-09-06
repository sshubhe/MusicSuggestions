import React, {Component} from 'react';


class Background extends Component {

    constructor() {
        super();
        this.state = {
            songList: []
        }
    }

 

    componentDidMount() {

        let songData = 
            {
                            "songName": "Slow dancing in the burning room",
                            "artist": "John Mayer",
                            "genre": "Soft Rock"
                        };
                        // {
                        //     songName: "A sky full of stars",
                        //     artist: "Coldplay",
                        //     genre: "Alternative Rock"
                        // },
                        // {
                        //     songName: "Stadium Arcadium",
                        //     artist: "RHCP",
                        //     genre: "Rock"
                        // }]
    
        fetch(songData)
        .then(results => {
            return songData;
        })
        this.setState ({
            songList: songData
        });

    
    }

    render() {
        return (
            <div>
                {this.state.songList.songName} 
                <br></br>
                {this.state.songList.artist}
            </div>
        );
    }



}

export default Background;