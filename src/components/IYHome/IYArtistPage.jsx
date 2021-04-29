import React from "react";

import { Carousel, Container, Row, Col } from "react-bootstrap";

import { ReactTinyLink } from "react-tiny-link";

function IYArtistPage(props) {

    console.log(props);
    let artist = props.artist;

    return (
        <Container>
            <Row className="artistName">
                    <b>{artist.name}</b>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <img 
                        src={require(`./photos/${artist.path}`)}
                        style={{width: "100%"}}
                        href={artist.link}
                        />
                    </Row>
                    
                </Col>
                <Col >
                    <Row fluid className="artistPlayer">
                    <figure>
                        <figcaption>Listen to {artist.name}:</figcaption>
                        <audio
                            controls
                            src={require(`./audio/${artist.audio}`)}>
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>
                    </figure>
                    </Row>
                    <div className="artistGallery">
                        {artistGallery(artist)}
                    </div>
                    <b class="artistSubtitle">Media</b><br/>
                    <div style={{width: "100%;"}}>
                        <ReactTinyLink
                            cardSize="medium"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            url={artist.link}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

function artistGallery(artist) {
    function artistImage() {
        return (
            <img 
                src={require(`./photos/${artist.path}`)}
                style={{width: "100%"}}
                href={artist.link}
            />
        );
    }

    return (
        <Row fluid>
            <Col xs={4}>
                <table>
                    <tr>
                        <td>
                            {artistImage()}
                        </td>
                        <td>
                            {artistImage()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {artistImage()}    
                        </td>
                        <td>
                            {artistImage()}
                        </td>
                    </tr>
                </table>
            </Col>
            <Col xs={8}>
                Tour Dates here
            </Col>
        </Row>
    );
}

export default IYArtistPage;