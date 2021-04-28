import React from "react";

import { Carousel, Container, Row, Col } from "react-bootstrap";

function IYArtistsGrid(props){
    let artistImages = props.artists.map(artist => {
        return (
            artistGridElement(artist)
        )
    });
    let splitArtistImages = [];
    for (let i = 3; i > 0; i--) {
        splitArtistImages.push(artistImages.splice(0, Math.ceil(artistImages.length / i)));
    }

    console.log(splitArtistImages);
    return (
        <Container style={{ padding: "120px 0px" }}>
            <Row>
                <Col md={1} xs={1}></Col>
                <Col className="artistGrid" >
                    {splitArtistImages[0].map(component => component)}
                </Col>
                <Col className="artistGrid artistGridCenter">
                    {splitArtistImages[1].map(component => component)}
                </Col>
                <Col className="artistGrid">
                    {splitArtistImages[2].map(component => component)}
                </Col>
                <Col md={1} xs={1}></Col>
            </Row>
        </Container>
    );
}


function artistGridElement(artist){
    return (
        <div class="artistGridElement">
            <a href={artist.link}>
                <img
                src={require(`./photos/${artist.path}`)}
                style={{ width: "100%" }}
                alt=""
                href={artist.link}
                />
                <text>Socials</text>
            </a>
        </div>
    );
}

export default IYArtistsGrid;