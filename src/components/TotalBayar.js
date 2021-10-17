import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';

export default class TotalBayar extends Component {
    render() {
        const totalBayar = this.props.keranjangs.reduce((result, item) => {
            return result + item.total_harga;
        }, 0);

        return (
            <div className="fixed-bottom">
                <Row>
                    <Col md={{ span: 3, offset: 9 }} className="px-4">
                        <h4>
                            Total Harga :{" "}
                            <strong className="float-right">
                                Rp. { numberWithCommas(totalBayar) }
                            </strong>
                        </h4>
                        <div className="d-grid gap-2">
                            <Button variant="primary" className="my-2" size="lg">
                                <FontAwesomeIcon icon={faShoppingCart} /> <strong>BAYAR</strong>
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
