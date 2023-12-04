'use client';
import { Card, Col } from "react-bootstrap";
import { INews } from "@/interfaces/news"
import Link from "next/link";

export default function NewsCard({ post } : { post: INews }) {
    return (
        <Col sm={12} md={6} lg={4}>
            <Card>
                <Card.Img variant="top" src={post.image} />
                <Card.Body>
                    <Card.Title>{ post.title }</Card.Title>
                    <Card.Text>{ post.lead }</Card.Text>
                    <Link href={`/news/${post.id}`}>Tovább...</Link>
                </Card.Body> 
            </Card>
        </Col>
    )
}