import React, { Component } from 'react';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';
import { numberWithCommas } from '../utils/utils';
import { TotalBayar, ModalKeranjang } from '../components';

export default class Hasil extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showModal: false,
             keranjangDetail: false,
             jumlah: 0,
             keterangan: '',
             totalHarga: 0,
        }
    }

    handleShow = (menuKeranjang) => {
        this.setState({
            showModal: true,
            keranjangDetail: menuKeranjang,
            jumlah: menuKeranjang.jumlah,
            keterangan: menuKeranjang.keterangan,
            totalHarga: menuKeranjang.total_harga,
        });
    }

    handleClose = () => {
        this.setState({
            showModal: false,
        });
    }

    tambah = () => {
        this.setState({
            jumlah: this.state.jumlah + 1,
            totalHarga: this.state.keranjangDetail.product.harga * (this.state.jumlah + 1),
        });
    }
    
    kurang = () => {
        if (this.state.jumlah > 1) {
            this.setState({
                jumlah: this.state.jumlah - 1,
                totalHarga: this.state.keranjangDetail.product.harga * (this.state.jumlah - 1),
            });
        }
    }

    changeHandler = (event) => {
        this.setState({
            keterangan: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

    }

    render() {
        const { keranjangs } = this.props;

        return (
            <Col md={3} mt="2">
                <h4>
                    <strong>Hasil</strong>
                    <hr/>
                </h4>
                { keranjangs.length !== 0 && 
                    <ListGroup variant="flush">
                        { keranjangs.map((menuKeranjang) => (
                            <ListGroup.Item
                                key={menuKeranjang.id}
                                onClick={() => this.handleShow(menuKeranjang)}
                            >
                                <Row>
                                    <Col xs={2}>
                                        <h4>
                                            <Badge pill variant="success">
                                                {menuKeranjang.jumlah}
                                            </Badge>
                                        </h4>
                                    </Col>
                                    <Col>
                                        <h5>{ menuKeranjang.product.nama }</h5>
                                        <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                                    </Col>
                                    <Col>
                                        <strong className="float-right">Rp. {numberWithCommas(menuKeranjang.total_harga)}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        )) }
                        <ModalKeranjang 
                            handleClose={this.handleClose} 
                            {...this.state}
                            tambah={this.tambah}
                            kurang={this.kurang}
                            changeHandler={this.changeHandler}
                            handleSubmit={this.handleSubmit}
                        />
                    </ListGroup>
                }
                <TotalBayar keranjangs={keranjangs} {...this.props} />
            </Col>
        )
    }
}
