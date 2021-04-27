import React from "react";

import { Carousel, Container, Row, Col } from "react-bootstrap";

function IYArtistsGrid(props){
    let artistImages = props.artists.map(artist => {
        const artistImage = (
            <img
              src={require(`./photos/${artist.path}`)}
              style={{ width: "100%" }}
              alt=""
            />
          );
        return (
            <div>
                {artistImage}
            </div>
        )
    });
    
    console.log(artistImages);
    return (
        <Container style={{ padding: "120px 0px" }}>
            <Row>
                <Col md={1} xs={1}></Col>
                <Col>
                    {props.artists.map(artist => {
                        const artistImage = (
                            <img
                              src={require(`./photos/${artist.path}`)}
                              style={{ width: "100%" }}
                              alt=""
                            />
                          );
                        return (
                            <div>
                                {artistImage}
                            </div>
                        )
                    })}
                </Col>
                <Col md={1} xs={1}></Col>
            </Row>
        </Container>
    );
}

export default IYArtistsGrid;